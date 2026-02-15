import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";


const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating refresh and access token"
    );
  }
};


// ===============================
// 👤 REGISTER USER
// ===============================
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, role, gender, age, avatar } = req.body;

  // 1️⃣ Check if email or username already exists
  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser) {
    throw new ApiError(400, "Email or username already exists");
  }

  // 2️⃣ Create new user
  const newUser = await User.create({
    username,
    email,
    password,
    role: role || "patient",
    gender: gender || "other",
    age: age || null,
    avatar: avatar || "",
  });

  // 3️⃣ Generate tokens
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(newUser);

  // 4️⃣ Set cookies
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // only send cookie over HTTPS in prod
    sameSite: "Strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  };

  res
    .status(201)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new ApiResponse(
        201,
        {
          user: {
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            role: newUser.role,
            gender: newUser.gender,
            age: newUser.age,
            avatar: newUser.avatar,
          },
          accessToken,
          refreshToken,
        },
        "User registered successfully"
      )
    );
});



// ===============================
// 🔐 LOGIN USER
// ===============================
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  // 1️⃣ Find user by email
  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }

  // 2️⃣ Check password
  const isMatch = await user.isPasswordCorrect(password);
  if (!isMatch) {
    throw new ApiError(401, "Invalid email or password");
  }

  // 3️⃣ Generate tokens
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  // Save refreshToken in DB
  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  // 4️⃣ Send response
  res.status(200).json(
    new ApiResponse(
      200,
      {
        user: {
          _id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
        accessToken,
        refreshToken,
      },
      "Login successful"
    )
  );
});


// ===============================
// ✏️ UPDATE PROFILE
// ===============================
const updateProfile = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { username, email, gender, age } = req.body;

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      $set: {
        username,
        email,
        gender,
        age,
      },
    },
    { new: true }
  ).select("-password -refreshToken");

  return res.status(200).json(
    new ApiResponse(
      200,
      { user: updatedUser },   // ✅ IMPORTANT
      "Profile updated successfully"
    )
  );
});



const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh token is expired or used");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefereshTokens(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access token refreshed"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token");
  }
});

export { registerUser, loginUser, updateProfile, refreshAccessToken };

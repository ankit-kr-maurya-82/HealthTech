import { Doctor } from "../models/doctor.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const registerDoctor = asyncHandler(async (req, res) => {
  const { username, fullName, email, password, specialty, nmcNumber, gender, age } = req.body;
  
  const doctor = await Doctor.create({
    fullName,
    email,
    password,
    specialty,
    nmcNumber,
    gender,
    age
  });

  const createdDoctor = await Doctor.findById(doctor._id).select("-password -refreshToken");

  if (!createdDoctor) throw new ApiError(500, "Failed to create doctor");

  // Generate tokens
  const accessToken = createdDoctor.generateAccessToken();
  const refreshToken = createdDoctor.generateRefreshToken();

  // Save refresh token to database
  await Doctor.findByIdAndUpdate(
    createdDoctor._id,
    { refreshToken },
    { new: true }
  );

  res.status(201).json(new ApiResponse(201, { user: createdDoctor, accessToken, refreshToken }, "Doctor registered successfully"));
});

// Login doctor
const loginDoctor = asyncHandler(async (req, res) => {
  const { email, password, nmcNumber } = req.body;
  const doctor = await Doctor.findOne({ email });
  if (!doctor) throw new ApiError(401, "Invalid email or password");
  const isPasswordValid = await doctor.isPasswordCorrect(password);
  if (!isPasswordValid) throw new ApiError(401, "Invalid email or password");
  if (doctor.nmcNumber !== nmcNumber) {
    throw new ApiError(401, "Certificate number not verified with NMC. Login denied.");
  }

  const accessToken = doctor.generateAccessToken();
  const refreshToken = doctor.generateRefreshToken();
  await Doctor.findByIdAndUpdate(
    doctor._id,
    { refreshToken },
    { new: true }
  );

  const doctorData = await Doctor.findById(doctor._id).select("-password -refreshToken");
  res.status(200).json(new ApiResponse(200, { user: doctorData, accessToken, refreshToken }, "Doctor logged in successfully"));
} );


// GET doctor profile by ID

 const getDoctorProfile = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.id).select("-password -refreshToken");
  if (!doctor) throw new ApiError(404, "Doctor not found");

  res.status(200).json(new ApiResponse(200, { doctor }, "Doctor profile fetched"));
});

// UPDATE doctor profile
 const updateDoctorProfile = asyncHandler(async (req, res) => {
  const doctorId = req.user._id; // JWT user id
  const { fullName, specialty, phone, avatar } = req.body;

  const updatedDoctor = await Doctor.findByIdAndUpdate(
    doctorId,
    { $set: { fullName, specialty, phone, avatar } },
    { new: true }
  ).select("-password -refreshToken");

  if (!updatedDoctor) throw new ApiError(404, "Doctor not found");

  res.status(200).json(new ApiResponse(200, { doctor: updatedDoctor }, "Doctor profile updated"));
});

// GET all doctors
 const getAllDoctors = asyncHandler(async (req, res) => {
  const doctors = await Doctor.find().select("-password -refreshToken").sort({ createdAt: -1 });
  res.status(200).json(new ApiResponse(200, { doctors }, "All doctors fetched"));
});


export { registerDoctor, loginDoctor, getDoctorProfile, updateDoctorProfile, getAllDoctors };
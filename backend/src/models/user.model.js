import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
      validate: {
        validator: function (v) {
          return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(v);
        },
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      },
    },
    avatar: {
            type: String, // cloudinary url
        },

    role: {
      type: String,
      enum: ["doctor", "patient"],
      required: [true, "Role is required"],
    },

    // 👉 Doctor Fields
    specialization: {
      type: String,
      default: "",
      validate: {
        validator: function (v) {
          if (this.role === "doctor") return v && v.length > 0;
          return true;
        },
        message: "Specialization is required for doctors",
      },
    },

    certificateNumber: {
      type: String,
      default: "",
      validate: {
        validator: function (v) {
          if (this.role === "doctor") return v && v.length > 0;
          return true;
        },
        message: "Certificate Number is required for doctors",
      },
    },

    // 👉 Patient Fields
    age: {
      type: Number,
      default: null,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// ===============================
// 🔐 HASH PASSWORD
// ===============================
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error);
  }
});

// ===============================
// 🔑 PASSWORD CHECK
// ===============================
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// ===============================
// 🎟️ ACCESS TOKEN
// ===============================
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      role: this.role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};

// ===============================
// 🔁 REFRESH TOKEN
// ===============================
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    { _id: this._id, role: this.role },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};

// ===============================
// ❌ Hide password in JSON output
// ===============================
userSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.password;
    return ret;
  },
});

export const User = mongoose.model("User", userSchema);

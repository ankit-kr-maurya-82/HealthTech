import { Doctor } from "../models/doctor.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// GET doctor profile by ID
export const getDoctorProfile = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.id).select("-password -refreshToken");
  if (!doctor) throw new ApiError(404, "Doctor not found");

  res.status(200).json(new ApiResponse(200, { doctor }, "Doctor profile fetched"));
});

// UPDATE doctor profile
export const updateDoctorProfile = asyncHandler(async (req, res) => {
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
export const getAllDoctors = asyncHandler(async (req, res) => {
  const doctors = await Doctor.find().select("-password -refreshToken").sort({ createdAt: -1 });
  res.status(200).json(new ApiResponse(200, { doctors }, "All doctors fetched"));
});

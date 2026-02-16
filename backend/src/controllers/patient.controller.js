import { Patient } from "../models/patient.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// GET patient profile by ID
export const getPatientProfile = asyncHandler(async (req, res) => {
  const patient = await Patient.findById(req.params.id).select("-password -refreshToken");
  if (!patient) throw new ApiError(404, "Patient not found");

  res.status(200).json(new ApiResponse(200, { patient }, "Patient profile fetched"));
});

// UPDATE patient profile
export const updatePatientProfile = asyncHandler(async (req, res) => {
  const patientId = req.user._id; // JWT user id
  const { fullName, age, gender, avatar } = req.body;

  const updatedPatient = await Patient.findByIdAndUpdate(
    patientId,
    { $set: { fullName, age, gender, avatar } },
    { new: true }
  ).select("-password -refreshToken");

  if (!updatedPatient) throw new ApiError(404, "Patient not found");

  res.status(200).json(new ApiResponse(200, { patient: updatedPatient }, "Patient profile updated"));
});

// GET all patients
export const getAllPatients = asyncHandler(async (req, res) => {
  const patients = await Patient.find().select("-password -refreshToken").sort({ createdAt: -1 });
  res.status(200).json(new ApiResponse(200, { patients }, "All patients fetched"));
});

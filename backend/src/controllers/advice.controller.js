import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Advice from "../models/advice.model.js";
import { User } from "../models/user.model.js";


// =======================================
// 🩺 CREATE ADVICE (Doctor Only)
// =======================================

export const createAdvice = asyncHandler(async (req, res) => {
  const { patient, problem, medicine, tests, dietAdvice } = req.body;

  // 1️⃣ Only doctor allowed
  if (req.user.role !== "doctor") {
    throw new ApiError(403, "Only doctors can create advice");
  }

  if (!patient || !problem) {
    throw new ApiError(400, "Patient and problem are required");
  }

  const advice = await Advice.create({
    doctor: req.user._id,
    patient,
    problem,
    medicine,
    tests,
    dietAdvice,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, advice, "Advice created successfully"));
});


// =======================================
// 👨‍⚕️ GET ALL ADVICE GIVEN BY DOCTOR
// =======================================

export const getDoctorAdvices = asyncHandler(async (req, res) => {
  const advices = await Advice.find({ doctor: req.user._id })
    .populate("patient", "username email")
    .populate("problem")
    .sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, advices, "Doctor advices fetched"));
});


// =======================================
// 🧑‍🤝‍🧑 GET ALL ADVICE FOR PATIENT
// =======================================

export const getPatientAdvices = asyncHandler(async (req, res) => {
  const advices = await Advice.find({ patient: req.user._id })
    .populate("doctor", "username email")
    .populate("problem")
    .sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, advices, "Patient advices fetched"));
});


// =======================================
// 📄 GET SINGLE ADVICE
// =======================================

export const getSingleAdvice = asyncHandler(async (req, res) => {
  const { adviceId } = req.params;

  const advice = await Advice.findById(adviceId)
    .populate("doctor", "username email")
    .populate("patient", "username email")
    .populate("problem");

  if (!advice) {
    throw new ApiError(404, "Advice not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, advice, "Advice fetched"));
});


// =======================================
// ❌ DELETE ADVICE (Doctor Only)
// =======================================

export const deleteAdvice = asyncHandler(async (req, res) => {
  const { adviceId } = req.params;

  const advice = await Advice.findById(adviceId);

  if (!advice) {
    throw new ApiError(404, "Advice not found");
  }

  // Only doctor who created it can delete
  if (advice.doctor.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Unauthorized to delete this advice");
  }

  await advice.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Advice deleted successfully"));
});

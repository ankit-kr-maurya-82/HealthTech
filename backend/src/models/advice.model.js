import mongoose from "mongoose";

const adviceSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    problem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Problem",
      required: true,
    },
    medicine: [
      {
        name: String,
        dosage: String,
        duration: String,
      },
    ],
    tests: [{ type: String }], // Blood sugar, Hb, BP
    dietAdvice: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Advice", adviceSchema);

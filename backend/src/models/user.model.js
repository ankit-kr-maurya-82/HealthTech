import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: { 
        type: String, 
        required: true, 
        unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["patient", "doctor"], required: true },
    age: { type: Number }, // patient only
    gender: { type: String }, // patient only
    specialization: { type: String }, // doctor only
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

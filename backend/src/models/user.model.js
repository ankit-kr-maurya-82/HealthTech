import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["doctor", "patient"],
      required: true,
    },

    // 👉 Doctor Fields
    specialization: {
      type: String,
      default: "",
    },

    certificateNumber: {
      type: String,
      default: "",
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

userSchema.pre("save", async function (next) {
  if(!this.isModified("password")) return next()

    this.password = bcrypt.hash(this.password, 10)
    next()
  
})

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema);



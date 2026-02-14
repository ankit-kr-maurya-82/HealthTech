import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema(
  {
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      lowercase: true, 
      trim: true 
    },
    username: { 
      type: String, 
      required: true, 
      unique: true, 
      lowercase: true, 
      trim: true 
    },
    password: { 
      type: String, 
      required: true 
    },
    role: { 
      type: String, 
      default: "patient" 
    },
    age: { 
      type: Number, 
      default: null 
    },
    avatar: { 
      type: String, 
      default: "" 
    },
    gender: { 
      type: String, 
      enum: ["male", "female", "other"], 
      default: "" 
    },
    refreshToken: { 
      type: String, 
      default: "" 
    },
  },
  { timestamps: true } // adds createdAt and updatedAt
);


// ===============================
// 🔐 HASH PASSWORD
// ===============================



userSchema.pre("save", async function () {
    if(!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 10)
    
})


// ===============================
// 🔑 PASSWORD CHECK
// ===============================

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}


// ===============================
// 🎟️ ACCESS TOKEN
// ===============================


userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}


// ===============================
// 🔁 REFRESH TOKEN
// ===============================


userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema);

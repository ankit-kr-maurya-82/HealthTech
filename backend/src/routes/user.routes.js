import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
//   getProfile
} from "../controllers/user.controller.js";

import User from "../models/user.model.js";


import { upload } from "../middlewares/multer.middleware.js";
import { protect } from "../middlewares/auth.middleware.js";
import verifyJWT from "../middlewares/verifyJWT.js";

const router = Router();

// 🔓 Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/refresh-token", refreshAccessToken);

// 🔒 Protected Routes
router.post("/logout", protect, logoutUser);
// router.get("/profile", protect, getProfile);


// Get logged-in user info
router.get("/me", verifyJWT, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password -refreshToken");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

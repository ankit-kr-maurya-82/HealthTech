import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
//   getProfile
} from "../controllers/user.controller.js";

import { upload } from "../middlewares/multer.middleware.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = Router();

// 🔓 Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/refresh-token", refreshAccessToken);

// 🔒 Protected Routes
router.post("/logout", protect, logoutUser);
// router.get("/profile", protect, getProfile);

export default router;

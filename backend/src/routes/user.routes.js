import { Router } from "express";
import { loginUser, refreshAccessToken, registerUser, updateProfile } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";

const router = Router();

// Public test route
router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/update-profile", verifyJWT, updateProfile);


router.post("/refresh-token", refreshAccessToken);

export default router;

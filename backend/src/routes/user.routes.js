import { Router } from "express";
import { registerUser, loginUser, logoutUser, refreshAccessToken } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"; 
import { protect } from "../middlewares/auth.middleware.js"; 

const router = Router();

router.post("/register", upload.single("avatar"), registerUser);
router.post("/login", loginUser);
router.post("/logout", protect, logoutUser);
router.post("/refresh-token", refreshAccessToken);

export default router;

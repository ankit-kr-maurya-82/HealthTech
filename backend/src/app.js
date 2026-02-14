import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// ✅ CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

// ✅ Body parsers (important!)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cookieParser())

app.get("/",(req,res)=>{
  return res.send("Backend is Running")
})

// ✅ Routes import
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/users", userRouter);

// http://localhost:8000/api/v1/users/register
export { app };

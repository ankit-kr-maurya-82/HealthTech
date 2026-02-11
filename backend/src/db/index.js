import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const uri = `${process.env.MONGODB_URI}/${DB_NAME}`;

    const conn = await mongoose.connect(uri);

    console.log("✅ MongoDB Connected");
    console.log("🌐 Host:", conn.connection.host);
    console.log("📂 DB:", conn.connection.name);

  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;

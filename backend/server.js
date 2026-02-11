const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes test
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

// mongodb connect
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("✅ MongoDB Atlas Connected Successfully");
    app.listen(process.env.PORT, () => {
        console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log("❌ MongoDB Connection Error:", err.message);
});

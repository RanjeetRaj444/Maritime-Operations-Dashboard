const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/authDB";
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
module.exports = connectDB;

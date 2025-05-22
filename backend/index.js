const express = require("express");
const connectDB = require("./utils/db");
const userRoutes = require("./routes/user.Routes");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
const PORT = process.env.PORT || 3000;

const JWT_SECRET = process.env.JWT_SECRET;

app.use(express.json());
app.use("/user", userRoutes);

app.listen(
  PORT,
  connectDB()
    .then((data) => {
      console.log("Server is running on port", PORT);
    })
    .catch((error) => {
      console.log("Error connecting to database", error);
    })
);

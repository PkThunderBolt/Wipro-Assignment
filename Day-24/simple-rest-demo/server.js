const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");

const app = express();
app.use(cors());
app.use(express.json()); // to accept JSON data

//  Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/schoolDB")
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

//  Register Routes
app.use("/api/students", studentRoutes);

//  Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

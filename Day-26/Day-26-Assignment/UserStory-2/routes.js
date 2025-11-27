const express = require("express");
const router = express.Router();
const Enrollment = require("./models/Enrollment");
const User = require("./models/User");

// GET enrollments with user information
router.get("/enrollments", async (req, res) => {
  try {
    const data = await Enrollment.find().populate("user");
    res.status(200).json(data);
  } catch (err) {
    console.error(" Error fetching enrollments:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

// POST: Add a new enrollment
router.post("/enrollments", async (req, res) => {
  try {
    const { name, email, phone, courseName } = req.body;

    if (!name || !email || !phone || !courseName) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Step 1: Create a new user (or you can check duplicate later)
    const user = await User.create({ name, email, phone });

    // Step 2: Create an enrollment with user reference
    const enrollment = await Enrollment.create({
      courseName,
      user: user._id,
    });

    res.status(201).json({
      message: " Enrollment Created Successfully!",
      enrollmentId: enrollment._id,
      userId: user._id,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
});

module.exports = router;

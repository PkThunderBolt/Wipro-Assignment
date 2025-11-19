const express = require("express");
const router = express.Router();

const {
  getAllCourses,
  getCourseById,
} = require("../controllers/courses.controller");

// Route to get all courses
router.get("/", getAllCourses);

// Route to get a single course
router.get("/:id", getCourseById);

module.exports = router;

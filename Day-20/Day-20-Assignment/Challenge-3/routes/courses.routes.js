const express = require("express");
const router = express.Router();

const {
  getAllCourses,
  getCourseById,
} = require("../controllers/courses.controller");
const validateCourseId = require("../middlewares/validateCourseId");

// Route to get all courses
router.get("/", getAllCourses);

// Route to get a single course (with validation)
router.get("/:id", validateCourseId, getCourseById);

module.exports = router;

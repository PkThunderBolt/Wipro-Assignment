// routes/instructorRoutes.js
const express = require("express");
const router = express.Router();
const {
  getCoursesByInstructor,
  createInstructorWithCourses,
} = require("../controllers/instructorController");

// GET courses by instructor
router.get("/instructors/:id/courses", getCoursesByInstructor);

// POST (create instructor + courses)
router.post("/instructors", createInstructorWithCourses);

module.exports = router;

const express = require("express");
const router = express.Router();

const validateStudent = require("../middlewares/validateStudent");

// Sample data
let students = [
  { id: 1, name: "Prashant Kumar", email: "PK@Wipro.com", progress: 85 },
  { id: 2, name: "Ujjwal Raj", email: "UR@TCS.com", progress: 92 },
];

// GET all students
router.get("/", (req, res) => {
  res.json({
    status: "success",
    data: students,
  });
});

// POST add student (uses validation middleware)
router.post("/", validateStudent, (req, res, next) => {
  try {
    const { name, email, progress } = req.body;

    const newStudent = {
      id: students.length + 1,
      name,
      email,
      progress: progress || 0,
    };

    students.push(newStudent);

    res.status(201).json({
      status: "success",
      message: "Student added successfully",
      data: newStudent,
    });
  } catch (error) {
    next(error); // send to error handler
  }
});

// GET student by ID
router.get("/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));

  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  res.json({
    status: "success",
    data: student,
  });
});

module.exports = router;

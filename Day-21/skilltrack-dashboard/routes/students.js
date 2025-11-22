const express = require("express");
const router = express.Router();
const validateStudent = require("../middlewares/validateStudent");

let students = [
  { id: 1, name: "Prashant Kumar", email: "PK@Wipro.com", progress: 85 },
  { id: 2, name: "Ujjwal Raj", email: "UR@TCS.com", progress: 92 },
];

// Student list view
router.get("/", (req, res) => {
  res.render("students", { students });
});

// Add student form
router.get("/add", (req, res) => {
  res.render("addStudent", { error: null });
});

// Add student (POST)
router.post("/add", validateStudent, (req, res) => {
  const { name, email, progress } = req.body;

  const newStudent = {
    id: students.length + 1,
    name,
    email,
    progress: progress || 0,
  };

  students.push(newStudent);

  res.redirect("/students");
});

module.exports = router;

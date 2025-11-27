// routes.js
const express = require("express");
const router = express.Router();
const db = require("./db");

// Add a student to the database
router.post("/students", (req, res) => {
  const db = require("./db"); // Import DB connection

  const { name, age } = req.body;

  // Validation
  if (!name || !age) {
    return res.status(400).json({
      message: "Name and age are required fields",
    });
  }

  const sql = "INSERT INTO students (name, age) VALUES (?, ?)";

  db.query(sql, [name, age], (err, result) => {
    if (err) {
      console.error(" Error adding student:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(201).json({
      message: " Student added successfully!",
      studentId: result.insertId,
    });
  });
});

// GET: Get all students
router.get("/students", (req, res) => {
  const db = require("./db");

  const sql = "SELECT * FROM students";

  db.query(sql, (err, results) => {
    if (err) {
      console.error(" Error fetching students:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(200).json(results);
  });
});

// PUT: Update student by ID
router.put("/students/:id", (req, res) => {
  const db = require("./db");
  const { id } = req.params;
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ message: "Name and age are required" });
  }

  const sql = "UPDATE students SET name = ?, age = ? WHERE id = ?";

  db.query(sql, [name, age, id], (err, result) => {
    if (err) {
      console.error("❌ Error updating student:", err);
      return res.status(500).json({ message: "Database error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res
      .status(200)
      .json({ message: `✔ Student with ID ${id} updated successfully` });
  });
});

// DELETE: Remove student by ID
router.delete("/students/:id", (req, res) => {
  const db = require("./db");
  const { id } = req.params;

  const sql = "DELETE FROM students WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("❌ Error deleting student:", err);
      return res.status(500).json({ message: "Database error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res
      .status(200)
      .json({ message: `🗑 Student with ID ${id} deleted successfully` });
  });
});

module.exports = router;

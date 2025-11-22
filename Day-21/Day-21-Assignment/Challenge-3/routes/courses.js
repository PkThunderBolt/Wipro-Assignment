const express = require("express");
const router = express.Router();

const courses = [
  { id: 1, title: "JavaScript Basics" },
  { id: 2, title: "Node.js Mastery" },
  { id: 3, title: "Database Fundamentals" },
];

router.get("/", (req, res) => {
  res.render("courses", { courses });
});

module.exports = router;

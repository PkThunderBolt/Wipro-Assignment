const express = require("express");
const router = express.Router();

const courses = [
  { id: 1, title: "JavaScript Basics" },
  { id: 2, title: "Node.js Mastery" },
  { id: 3, title: "Database Fundamentals" },
];

router.get("/", (req, res) => {
  // terminal output
  console.log(`[${req.method}] /courses at ${new Date().toISOString()}`);

  // send response
  res.json(courses);
});

module.exports = router;

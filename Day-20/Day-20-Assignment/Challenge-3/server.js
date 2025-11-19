const express = require("express");
const app = express();
const port = 4000;

// ===============================
// Home Route
// ===============================
app.get("/", (req, res) => {
  res.send("Welcome to SkillSphere LMS API");
});

// Use courses routes
const courseRoutes = require("./routes/courses.routes");
app.use("/courses", courseRoutes);

// ===============================
// Start Server
// ===============================
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

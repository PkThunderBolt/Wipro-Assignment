const express = require("express");
const app = express();
const path = require("path");
const port = 4000;

// View Engine Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("Welcome to SkillSphere LMS API");
});

// Courses route
const coursesRoute = require("./routes/courses");
app.use("/courses", coursesRoute);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

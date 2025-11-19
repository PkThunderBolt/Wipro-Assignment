const express = require("express"); // Step 1: Import Express
const app = express();
const port = 4000; // Step 2: Create Express app

// Step 3: Create a route for home page
app.get("/", (req, res) => {
  res.send("Welcome to SkillSphere LMS API");
});

// Step 4: Start the server

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

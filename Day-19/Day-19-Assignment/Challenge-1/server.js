const express = require("express");
const path = require("path"); // Used to safely build file paths
const app = express();
const port = 4000;

// ----------------------------------------------------------
// Home Route
// Simply returns a welcome message when user hits the root URL
// ----------------------------------------------------------
app.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

// ----------------------------------------------------------
// /status Route
// Sends a JSON file located in the same folder as this script.
// Using path.join ensures the file path works on all systems.
// ----------------------------------------------------------
app.get("/status", (req, res) => {
  res.sendFile(path.join(__dirname, "status.json"));
});

// ----------------------------------------------------------
// Start the server
// ----------------------------------------------------------
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

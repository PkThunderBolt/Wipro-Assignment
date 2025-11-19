const express = require("express");
const path = require("path"); // <-- Missing import
const app = express();
const port = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hello/:name", (req, res) => {
  res.send("Hello " + req.params.name);
});

// About route
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

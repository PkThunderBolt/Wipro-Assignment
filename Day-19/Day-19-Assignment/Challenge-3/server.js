const express = require("express");
const app = express();
const port = 4000;

// -----------------------------------------------------
// Custom Middleware: Logger
// This middleware runs BEFORE every request.
// It logs the HTTP method, the URL, and the timestamp.
// -----------------------------------------------------
const logger = (req, res, next) => {
  const time = new Date().toISOString(); // Current time in readable format
  console.log(`[${req.method}] ${req.url} - ${time}`);

  // Tell Express to continue to the next middleware or route
  next();
};

// -----------------------------------------------------
// Register middleware globally
// This means the logger will run for every request made
// to this server.
// -----------------------------------------------------
app.use(logger);

// -----------------------------------------------------
// Routes
// These are sample routes to test the middleware.
// -----------------------------------------------------

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

// Products route
app.get("/products", (req, res) => {
  res.send("Products Page");
});

// Status route
app.get("/status", (req, res) => {
  res.send("Server Status OK");
});

// -----------------------------------------------------
// Start the server
// -----------------------------------------------------
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

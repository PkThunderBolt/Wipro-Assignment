const express = require("express");
const rateLimit = require("express-rate-limit");
const coursesRouter = require("./routes/courses");

const app = express();
const PORT = process.env.PORT || 3000;

// This middleware lets the server understand JSON coming from the client.
app.use(express.json());

// Simple rate limiter for all API v1 routes.
// Here we allow only 5 requests per minute from a single IP.
const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: { error: "Too many requests" },
});

// Versioned API prefix. If we ever create v2, we can add it side by side.
app.use("/api/v1", apiLimiter, coursesRouter);

// If a route is not found, we send a simple JSON error instead of HTML.
app.use(function (req, res, next) {
  res.status(404).json({ error: "Route not found" });
});

// Central error handler for any unexpected errors in the app.
app.use(function (err, req, res, next) {
  console.error("Unexpected error:", err);
  res.status(500).json({ error: "Something went wrong on the server" });
});

app.listen(PORT, function () {
  console.log(`Server is running on http://localhost:${PORT}`);
});

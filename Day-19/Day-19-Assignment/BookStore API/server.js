const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Import book routes
const bookRouter = require("./routes/books");
app.use("/books", bookRouter);

// -----------------------------
// Global 404 Handler
// -----------------------------
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// -----------------------------
// Central Error Handler
// -----------------------------
app.use((err, req, res, next) => {
  console.error("Internal Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

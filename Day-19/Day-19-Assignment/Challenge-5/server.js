const express = require("express");
const app = express();
const port = 4000;

// Middleware
app.use(express.json());

// Import book routes
const bookRouter = require("./routes/books");
app.use("/books", bookRouter);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Centralized Error Handler
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

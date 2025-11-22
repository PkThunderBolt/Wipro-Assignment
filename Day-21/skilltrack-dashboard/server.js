const express = require("express");
const morgan = require("morgan");
const path = require("path");

const logger = require("./middlewares/logger");
const studentRoutes = require("./routes/students");

const app = express();
const PORT = 4000;

// Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Built-in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom request logger
app.use(logger);

// Morgan logger
app.use(morgan("dev"));

// Routes
app.use("/students", studentRoutes);

// Home Page
app.get("/", (req, res) => {
  res.render("index");
});

// 404 Middleware
app.use((req, res) => {
  res.status(404).render("index", { message: "Page Not Found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Error:", err.message);

  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

const express = require('express');
const morgan = require('morgan');
const path = require('path');

// Import custom middlewares
const logger = require('./middlewares/logger');
const validateStudent = require('./middlewares/validateStudent');

// Import routes
const studentRoutes = require('./routes/students');

const app = express();
const PORT = 4000;

// ----------------------
// Built-in Body Parsing Middleware
// ----------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ----------------------
// Custom Request Logging Middleware
// ----------------------
app.use(logger);

// ----------------------
// Morgan Logging (built-in middleware)
// ----------------------
app.use(morgan('dev'));

// ----------------------
// Routes
// ----------------------
app.use('/students', studentRoutes);

// ----------------------
// 404 Middleware
// ----------------------
app.use((req, res, next) => {
    res.status(404).json({
        error: "Route not found"
    });
});

// ----------------------
// Global Error Handling Middleware
// ----------------------
app.use((err, req, res, next) => {
    console.error("Error:", err.message);

    res.status(500).json({
        status: "failed",
        message: "Something went wrong on the server.",
        error: err.message
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// In this file we will implement the following features:
// 1. Setup an Express server
// 2. Create a simple GET endpoint
// 3. Use middleware to parse JSON & form data
// 4. Error handling for unknown routes
// 5. DB setup using Mongoose for MongoDB connection
// 6. Serving static HTML form
// 7. POST route to handle form submission, validate input and save to DB
// 8. Display success message or validation errors

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const { body, validationResult } = require("express-validator");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/formDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Schema + Model
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const Form = mongoose.model("Form", formSchema);

// Serve form.html from project root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

// POST route
app.post(
  "/submit-form",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("message").notEmpty().withMessage("Message is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;
    const newForm = new Form({ name, email, message });

    try {
      await newForm.save();
      res.status(201).json({ message: "Form submitted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to submit form" });
    }
  }
);

// Success page
app.get("/success", (req, res) => {
  res.send("Form submitted successfully!");
});

// Error handling
app.use((req, res) => {
  res.status(404).send("Sorry, we could not find that route!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

// Load Passport config
require("./config/passport");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files for HTML
app.use(express.static("views"));

// Middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// DB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/", require("./routes/registerRoutes"));
app.use("/", require("./routes/authRoutes"));
app.use("/", require("./routes/adminRoutes"));
app.use("/", require("./routes/userRoutes"));

app.get("/", (req, res) => {
  res.send("Day 22 Project Running");
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`)
);

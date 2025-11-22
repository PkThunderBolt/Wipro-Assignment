const express = require("express");
const router = express.Router();
const { loginUser } = require("../controllers/authController");

// Login form
router.get("/login", (req, res) => {
  res.render("login", { error: null }); // No error by default
});

// Login POST
router.post("/login", loginUser);

module.exports = router;

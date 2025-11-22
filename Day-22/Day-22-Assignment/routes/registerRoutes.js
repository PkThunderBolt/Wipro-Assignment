const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/registerController");

// Registration form
router.get("/register", (req, res) => {
  res.sendFile("register.html", { root: "views" });
});

// Register user
router.post("/register", registerUser);

module.exports = router;

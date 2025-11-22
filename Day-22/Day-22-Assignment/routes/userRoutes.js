const express = require("express");
const router = express.Router();

function isUser(req, res, next) {
  if (!req.isAuthenticated()) return res.send("Access Denied: Not Logged In");
  if (req.user.role !== "user") return res.send("Access Denied: Not a User");
  next();
}

router.get("/dashboard", isUser, (req, res) => {
  res.send(`Welcome, ${req.user.name}! This is your user dashboard.`);
});

module.exports = router;

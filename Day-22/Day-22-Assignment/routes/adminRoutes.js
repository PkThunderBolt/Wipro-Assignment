const express = require("express");
const router = express.Router();
const { adminPage } = require("../controllers/adminController");

// RBAC Middleware
function isAdmin(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.send("Access Denied: Not Logged In");
  }

  if (req.user.role !== "admin") {
    return res.send("Access Denied: Not an Admin");
  }

  next();
}

// Protected Admin Dashboard
router.get("/admin", isAdmin, adminPage);

//  Create Default Admin User — Run Only Once
router.get("/create-admin", async (req, res) => {
  try {
    const User = require("../models/User");
    const bcrypt = require("bcryptjs");

    // check if admin already exists
    const isExist = await User.findOne({ username: "admin" });
    if (isExist) return res.send("Admin already exists!");

    const hashed = await bcrypt.hash("admin123", 10);

    await User.create({
      name: "Admin User",
      username: "admin",
      password: hashed,
      role: "admin",
    });

    res.send("Admin user created!");
  } catch (err) {
    console.log(err);
    res.send("Error creating admin");
  }
});

module.exports = router;

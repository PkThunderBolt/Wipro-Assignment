const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {
  const { name, username, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      username,
      password: hashedPassword,
      role: role || "user",
    });

    // ✅ Confirm in console
    console.log("New user saved:", newUser);

    res.send(`Registration successful for ${name}`);
  } catch (err) {
    console.log(err);
    res.send("Error saving user");
  }
};

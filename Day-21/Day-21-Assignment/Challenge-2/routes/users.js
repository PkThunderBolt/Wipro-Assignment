const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { id, name, age } = req.body;

  res.json({
    message: "User created successfully",
    data: {
      id,
      name,
      age,
    },
  });
});

module.exports = router;

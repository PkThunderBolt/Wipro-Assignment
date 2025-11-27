const mongoose = require("../db");
require("./User");

const enrollmentSchema = new mongoose.Schema({
  courseName: String,
  enrolledDate: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Enrollment", enrollmentSchema);

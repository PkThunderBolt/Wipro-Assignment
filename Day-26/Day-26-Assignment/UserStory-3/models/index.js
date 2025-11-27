// models/index.js
const sequelize = require("../config/sequelize");
const Instructor = require("./Instructor");
const Course = require("./Course");

// One Instructor has many Courses
Instructor.hasMany(Course, {
  foreignKey: "instructorId",
  as: "courses",
});

// Each Course belongs to an Instructor
Course.belongsTo(Instructor, {
  foreignKey: "instructorId",
  as: "instructor",
});

module.exports = { sequelize, Instructor, Course };

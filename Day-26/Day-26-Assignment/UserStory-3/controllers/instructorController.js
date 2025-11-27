const { Instructor, Course } = require("../models");

exports.createInstructorWithCourses = async (req, res) => {
  try {
    const { name, expertise, courses } = req.body;

    if (!name || !courses || !Array.isArray(courses)) {
      return res.status(400).json({ message: "Name & courses array required" });
    }

    const instructor = await Instructor.create(
      { name, expertise, courses },
      { include: [{ model: Course, as: "courses" }] }
    );

    res.status(201).json({
      message: "Instructor & Courses Created",
      instructor,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

exports.getCoursesByInstructor = async (req, res) => {
  try {
    const { id } = req.params;

    const instructor = await Instructor.findByPk(id, {
      include: [{ model: Course, as: "courses" }],
    });

    if (!instructor) {
      return res.status(404).json({ message: "Instructor not found" });
    }

    res.json({
      instructor: instructor.name,
      courses: instructor.courses,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

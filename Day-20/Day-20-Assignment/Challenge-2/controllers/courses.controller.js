// Dummy list of courses
const courses = [
  { id: "101", name: "React Mastery", duration: "6 weeks" },
  { id: "102", name: "Node.js", duration: "8 weeks" },
  { id: "103", name: "JavaScript", duration: "4 weeks" },
  { id: "104", name: "Python for Beginners", duration: "5 weeks" },
];

// Get all courses
exports.getAllCourses = (req, res) => {
  res.json(courses);
};

// Get course by ID
exports.getCourseById = (req, res) => {
  const { id } = req.params;

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  res.json(course);
};

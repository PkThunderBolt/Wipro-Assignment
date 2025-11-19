module.exports = function validateCourseId(req, res, next) {
  const { id } = req.params;

  // Check if ID is numeric
  if (!/^\d+$/.test(id)) {
    return res.status(400).json({ error: "Invalid course ID" });
  }

  next(); // continue to controller
};

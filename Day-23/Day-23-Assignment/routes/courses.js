const express = require("express");
const { body, validationResult } = require("express-validator");

const router = express.Router();

// In a real project this data would live in a database.
// For today we just keep everything in memory so it is easy to understand.
let courses = [
  { id: 1, name: "Node Basics", duration: "3 weeks" },
  { id: 2, name: "Express Js", duration: "4 weeks" },
];

let nextId = 3;

// A small helper to send validation errors in a simple and consistent way.
function handleValidationErrors(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // We only return the first error message to keep the response clean.
    const firstError = errors.array()[0];
    return res.status(400).json({ error: firstError.msg });
  }
  return null;
}

// GET /api/v1/courses
// Returns the full list of courses.
router.get("/courses", function (req, res) {
  res.json(courses);
});

// GET /api/v1/courses/:id
// Returns a single course by id.
router.get("/courses/:id", function (req, res) {
  const id = parseInt(req.params.id, 10);
  const course = courses.find(function (c) {
    return c.id === id;
  });

  if (!course) {
    return res.status(404).json({ error: "Course not found" });
  }

  res.json(course);
});

// POST /api/v1/courses
// Creates a new course after validating the input.
router.post(
  "/courses",
  [
    body("name").trim().notEmpty().withMessage("Course name is required"),
    body("duration")
      .trim()
      .notEmpty()
      .withMessage("Course duration is required"),
  ],
  function (req, res) {
    const errorResponse = handleValidationErrors(req, res);
    if (errorResponse) {
      return;
    }

    const newCourse = {
      id: nextId++,
      name: req.body.name,
      duration: req.body.duration,
    };

    courses.push(newCourse);
    res.status(201).json(newCourse);
  }
);

// PUT /api/v1/courses/:id
// Updates an existing course.
router.put(
  "/courses/:id",
  [
    body("name").trim().notEmpty().withMessage("Course name is required"),
    body("duration")
      .trim()
      .notEmpty()
      .withMessage("Course duration is required"),
  ],
  function (req, res) {
    const errorResponse = handleValidationErrors(req, res);
    if (errorResponse) {
      return;
    }

    const id = parseInt(req.params.id, 10);
    const courseIndex = courses.findIndex(function (c) {
      return c.id === id;
    });

    if (courseIndex === -1) {
      return res.status(404).json({ error: "Course not found" });
    }

    courses[courseIndex] = {
      id: id,
      name: req.body.name,
      duration: req.body.duration,
    };

    res.json(courses[courseIndex]);
  }
);

// DELETE /api/v1/courses/:id
// Deletes a course from the in-memory list.
router.delete("/courses/:id", function (req, res) {
  const id = parseInt(req.params.id, 10);
  const courseIndex = courses.findIndex(function (c) {
    return c.id === id;
  });

  if (courseIndex === -1) {
    return res.status(404).json({ error: "Course not found" });
  }

  const deleted = courses.splice(courseIndex, 1)[0];
  res.json(deleted);
});

module.exports = router;

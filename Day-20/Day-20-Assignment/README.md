# Challenge 1 — Basic Routing

In this challenge, I create a simple Express server and set up one route. When someone opens the main URL (the home page), they should see a welcome message. This message confirms that the server is running correctly.

### What I do

- Import Express
- Create an app
- Make a route for `/`
- Send a welcome message when the user visits this route

### Example Code

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to SkillSphere LMS API");
});

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});
```

---

# Challenge 2 — Dynamic Routing with Controllers and Routes

Here, I create routes for courses. One route returns details of a single course using an ID from the URL, and another route returns a list of multiple courses. To keep the project organized, I separate the logic into controllers and routes.

### How it works

- `/courses/:id` → returns one course based on ID
- `/courses` → returns a list of all courses
- Controllers store the logic
- Routes file connects URLs to controller functions

### Controller File (`controllers/course.controller.js`)

```js
exports.getCourseById = (req, res) => {
  const courseId = req.params.id;
  res.json({ id: courseId, name: "React Mastery", duration: "6 weeks" });
};

exports.getAllCourses = (req, res) => {
  const courses = [
    { id: 101, name: "React Mastery", duration: "6 weeks" },
    { id: 102, name: "Node.js Bootcamp", duration: "4 weeks" },
    { id: 103, name: "Express.js Deep Dive", duration: "3 weeks" },
  ];
  res.json(courses);
};
```

### Routes File (`routes/courses.routes.js`)

```js
const express = require("express");
const router = express.Router();
const {
  getCourseById,
  getAllCourses,
} = require("../controllers/course.controller");

router.get("/", getAllCourses);
router.get("/:id", getCourseById);

module.exports = router;
```

### Main File (`server.js`)

```js
const express = require("express");
const app = express();

const courseRoutes = require("./routes/courses.routes");
app.use("/courses", courseRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to SkillSphere LMS API");
});

app.listen(4000, () => console.log("Server running on port 4000"));
```

---

# Challenge 3 — Middleware Validation

This challenge adds a check before the actual route runs. I want to make sure that the course ID someone enters in the URL is a number. If the ID is not numeric, I show an error message instead of sending course data.

### How it works

- Middleware runs before the main controller
- It checks if the ID contains only digits
- If not a number → return an error
- If valid → go to the controller

### Middleware File (`middlewares/validateCourseId.js`)

```js
module.exports = (req, res, next) => {
  const { id } = req.params;

  if (!/^[0-9]+$/.test(id)) {
    return res.status(400).json({ error: "Invalid course ID" });
  }

  next();
};
```

### Using Middleware in Routes

```js
const validateCourseId = require("../middlewares/validateCourseId");
router.get("/:id", validateCourseId, getCourseById);
```

### What the user sees

If the ID is a valid number:

- They get course details.

If the ID is invalid (example: letters):

- They get `{ "error": "Invalid course ID" }`.

---

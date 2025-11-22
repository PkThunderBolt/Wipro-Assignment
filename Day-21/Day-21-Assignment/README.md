## Challenge 1: Logging Middleware

In this challenge, I created a middleware that runs before every route. This middleware prints the method of the request, the URL, and the time when the request was made. This helps me understand how my API is being used.

### File Structure

```
day21/
 ├── server.js
 ├── routes/
       └── courses.js
```

### Code

**server.js**

```
const express = require('express');
const app = express();

app.use((req, res, next) => {
  const time = new Date().toISOString();
  console.log(`[${req.method}] ${req.url} at ${time}`);
  next();
});

const dummyRoute = require('./routes/dummy');
app.use('/', dummyRoute);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
```

**routes/courses.js**

```
const express = require("express");
const router = express.Router();

const courses = [
  { id: 1, title: "JavaScript Basics" },
  { id: 2, title: "Node.js Mastery" },
  { id: 3, title: "Database Fundamentals" },
];

router.get("/", (req, res) => {
  // terminal output
  console.log(`[${req.method}] /courses at ${new Date().toISOString()}`);

  // send response
  res.json(courses);
});

module.exports = router;
```

## Challenge 2: Built-in Middleware for Parsing Data

In this challenge, I enabled Express’s built-in middleware to read JSON data and form data. This allows me to send a POST request with id, name, and age, and the server returns those values.

### File Structure

```
day21/
 ├── server.js
 ├── routes/
       └── users.js
```

### Code

**server.js**

```
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const usersRoute = require('./routes/users');
app.use('/users', usersRoute);

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
```

**routes/users.js**

```
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { id, name, age } = req.body;

  res.json({
    message: 'User created successfully',
    data: {
      id,
      name,
      age
    }
  });
});

module.exports = router;
```

## Challenge 3: Templates with EJS

In this challenge, I used EJS to show a list of courses on a webpage. I set up the view engine, created a route, and made an EJS file that displays the courses.

## To install Express and EJS together:

--npm install express ejs

### File Structure

```
day21/
 ├── server.js
 ├── routes/
 │     └── courses.js
 ├── views/
       └── courses.ejs
```

### Code

**server.js**

```
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const coursesRoute = require('./routes/courses');
app.use('/courses', coursesRoute);

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
```

**routes/courses.js**

```
const express = require('express');
const router = express.Router();

const courses = [
  { id: 1, title: 'JavaScript Basics' },
  { id: 2, title: 'Node.js Mastery' },
  { id: 3, title: 'Database Fundamentals' }
];

router.get('/', (req, res) => {
  res.render('courses', { courses });
});

module.exports = router;
```

**views/courses.ejs**

```
<!DOCTYPE html>
<html>
<head>
  <title>Courses</title>
</head>
<body>
  <h1>Available Courses</h1>
  <ul>
    <% courses.forEach(course => { %>
      <li><%= course.title %></li>
    <% }) %>
  </ul>
</body>
</html>
```

## Summary

I created three things: a logging middleware, middleware for reading POST data, and a template system that renders a page of courses. Every challenge has its own file structure and its own full code. This makes the project clean, clear, and easy to understand.

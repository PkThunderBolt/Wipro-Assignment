// insertCourse.js
const db = require("./db");

const course = {
  name: "MERN Full Stack",
  duration: "1.5 Months",
  instructor: "Parth Shukla",
};

db.query(
  "INSERT INTO courses (name, duration, instructor) VALUES (?, ?, ?)",
  [course.name, course.duration, course.instructor],
  (err, result) => {
    if (err) {
      console.log(" Error inserting course:", err);
    } else {
      console.log(" Course inserted successfully! Course ID:", result.insertId);
    }
    db.end(); // close connection
  }
);

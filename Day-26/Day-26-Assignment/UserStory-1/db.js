// db.js
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "courses_db1",
});

// connect to MySQL
db.connect((err) => {
  if (err) {
    console.log(" MySQL connection failed:", err.message);
  } else {
    console.log(" Connected to MySQL!");
  }
});

module.exports = db;

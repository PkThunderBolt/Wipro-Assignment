// db.js
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // your MySQL username
  password: "root", // your MySQL password
  database: "Students_db",
});

// Database connection
connection.connect((err) => {
  if (err) {
    console.log(" MySQL connection failed:", err.message);
    return;
  }
  console.log(" Connected to MySQL Database!");
});

module.exports = connection;

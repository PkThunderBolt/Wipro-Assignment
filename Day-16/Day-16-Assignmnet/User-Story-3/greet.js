// greet.js
const moment = require("moment");

// Get the name from command line arguments
// process.argv[0] = node, process.argv[1] = greet.js, process.argv[2] = first argument
const name = process.argv[2];

if (!name) {
  console.log("Please provide your name. Example: node greet.js Prashant");
  process.exit(1);
}

// Get current date and time
const now = moment().format("ddd MMM D YYYY, hh:mm A"); // Example: Fri Nov 7 2025, 10:45 AM

// Display the greeting
console.log(`Hello, ${name}! Today is ${now}`);

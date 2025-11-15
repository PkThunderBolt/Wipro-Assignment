const fs = require("fs");

// User input to write
const userInput = "Node.js is awesome!";

// Write data to feedback.txt
fs.writeFile("feedback.txt", userInput, (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("Data written successfully.");

  // Read the file after writing
  console.log("Reading file...");
  fs.readFile("feedback.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log(data);
  });
});

const fs = require("fs");

console.log("Starting read operation...");

// Read file asynchronously using callback
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  console.log("File content:");
  console.log(data);

  // Bonus: Adding delay before confirmation
  setTimeout(() => {
    console.log("Read operation completed (after delay)");
  }, 2000); // 2-second delay
});

console.log(
  "This will run before file reading completes — demonstrating async behavior."
);

// hello-node.js

// Log Node.js version
console.log("Node.js Version:", process.version);

// Log current file name and directory
console.log("Current file:", __filename);
console.log("Current directory:", __dirname);

// Welcome message every 3 seconds
let count = 0;
const interval = setInterval(() => {
  console.log("Welcome to Node.js!");
  count += 3;

  // Stop the interval after 10 seconds
  if (count >= 10) {
    clearInterval(interval);
    console.log("Stopped the welcome messages after 10 seconds.");
  }
}, 3000); // 3000ms = 3 seconds

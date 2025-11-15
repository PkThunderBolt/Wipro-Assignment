// here we will create a simple http based backend server using nodejs based on following steps
//Step 1: Creating http constant
//Step 2: creating Http server
//Step 3: starting the server @3000 port
//Step 4: running the server

// Step 1: Creating http constant
const http = require("http");

// Step 2: Creating HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Welcome to Node.js HTTP Server!\n");
});

// Step 3: Starting the server @3000 port

server.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});

// Step 4: Run the server
// Command: node filename.js

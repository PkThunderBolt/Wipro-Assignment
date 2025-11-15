// Import the built-in http module
const http = require("http");

// Define hostname and port
const hostname = "127.0.0.1";
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set content type
  res.setHeader("Content-Type", "text/html");

  // Routing logic
  if (req.url === "/" || req.url === "/home") {
    res.statusCode = 200;
    res.end(`
      <html>
        <head><title>Home</title></head>
        <body style="font-family: Arial; text-align: center; margin-top: 50px;">
          <h1>Welcome to My Node.js Server!</h1>
          <p>This is the home page served without using any external frameworks.</p>
          <a href="/about">About</a> | <a href="/contact">Contact</a>
        </body>
      </html>
    `);
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end(`
      <html>
        <head><title>About</title></head>
        <body style="font-family: Arial; text-align: center; margin-top: 50px;">
          <h1>About This Server</h1>
          <p>This is a simple Node.js HTTP server created without Express.</p>
          <a href="/">Home</a> | <a href="/contact">Contact</a>
        </body>
      </html>
    `);
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end(`
      <html>
        <head><title>Contact</title></head>
        <body style="font-family: Arial; text-align: center; margin-top: 50px;">
          <h1>Contact Us</h1>
          <p>Email: pk@gmail.com</p>
          <p>Phone: +91-7050746209</p>
          <a href="/">Home</a> | <a href="/about">About</a>
        </body>
      </html>
    `);
  } else {
    // 404 Not Found
    res.statusCode = 404;
    res.end(`
      <html>
        <head><title>404 Not Found</title></head>
        <body style="font-family: Arial; text-align: center; margin-top: 50px;">
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you're looking for doesn't exist.</p>
          <a href="/">Go Back Home</a>
        </body>
      </html>
    `);
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

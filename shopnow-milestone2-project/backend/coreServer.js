const http = require("http");
const fs = require("fs");
const path = require("path");

// This function ensures that the logs directory exists and then writes a log entry to app.log file.
function writeStartupLog() {
  const logsDir = path.join(__dirname, "logs");
  const logFilePath = path.join(logsDir, "app.log");

  // This checks whether the logs directory is already present, and creates it when missing.
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
  }

  const logMessage = "App started\n";

  // This appends the log message to the app.log file, creating the file if it does not exist.
  fs.appendFileSync(logFilePath, logMessage, "utf8");
}

// This function creates a very simple HTTP server that returns a small JSON response.
function startHttpServer() {
  const server = http.createServer((req, res) => {
    // This sets the header so that the client knows the response is JSON.
    res.writeHead(200, { "Content-Type": "application/json" });
    const body = JSON.stringify({ status: "running" });
    res.end(body);
  });

  const port = 5000;

  server.listen(port, () => {
    console.log(`Core HTTP server is listening on http://localhost:${port}`);
  });
}

// When this script is run directly we first write the log, then start the server.
writeStartupLog();
startHttpServer();

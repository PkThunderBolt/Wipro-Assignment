const express = require("express");
const http = require("http");
const path = require("path");
const multer = require("multer");
const cors = require("cors");
const { Server } = require("socket.io");
const fs = require("fs");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// --- Middleware ---
app.use(cors());
app.use(express.json());

// Serve frontend assets
app.use(express.static(path.join(__dirname, "public")));

// Serve uploaded files under /materials
app.use("/materials", express.static(path.join(__dirname, "uploads")));

// --- Multer configuration for PDF uploads ---
const uploadsPath = path.join(__dirname, "uploads");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsPath);
  },
  filename: (req, file, cb) => {
    // clean name and remove spaces
    let safeName = file.originalname.replace(/\s+/g, "-");

    // full path of upload
    const fullPath = path.join(uploadsPath, safeName);

    // if file exists, rename with numbering
    if (fs.existsSync(fullPath)) {
      const parsed = path.parse(safeName);
      let counter = 1;

      // loop until non-existing name found
      while (
        fs.existsSync(
          path.join(uploadsPath, `${parsed.name}(${counter})${parsed.ext}`)
        )
      ) {
        counter++;
      }

      safeName = `${parsed.name}(${counter})${parsed.ext}`;
    }

    cb(null, safeName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed"));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

// --- Routes ---

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// File upload route
app.post("/upload", (req, res) => {
  upload.single("file")(req, res, (err) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "Upload failed",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file provided",
      });
    }

    return res.json({
      success: true,
      message: `File uploaded successfully: ${req.file.filename}`,
      fileName: req.file.filename,
      downloadUrl: `/materials/${req.file.filename}`,
    });
  });
});

// --- Socket.io real-time chat ---
io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  // Notify others that a user joined
  socket.broadcast.emit("systemMessage", {
    text: "A new participant joined the chat.",
    timestamp: new Date().toISOString(),
  });

  socket.on("chatMessage", (data) => {
    const message = {
      id: socket.id,
      text: data.text,
      sender: data.sender || "Anonymous",
      timestamp: new Date().toISOString(),
    };
    // broadcast to everyone
    io.emit("chatMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
    socket.broadcast.emit("systemMessage", {
      text: "A participant left the chat.",
      timestamp: new Date().toISOString(),
    });
  });
});

// --- Start server ---
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

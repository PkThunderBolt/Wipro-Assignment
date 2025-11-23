# Day 24 — File Uploads & Real-Time Communication

This is a small Node.js project built from scratch to demonstrate:

- Uploading PDF files using Multer
- Serving uploaded files from an `/uploads` directory
- Enabling real-time chat between students and instructors using Socket.io

## Folder structure

```text
day24_file_uploads_chat/
  public/
    index.html      # Upload UI + link to chat
    chat.html       # Simple real-time chat UI
  uploads/          # Uploaded files are stored here at runtime
  server.js         # Express + Socket.io backend
  package.json      # Project metadata and dependencies
```

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

3. Open the main page in your browser:

```text
http://localhost:3000/
```

### Features

- **File upload**: Only PDF files are accepted. After a successful upload, you receive:
  - A success message
  - The stored file name
  - A direct download URL like `/materials/<stored-file-name>`
- **Static file serving**: The `/materials` route publicly serves files from the `uploads` directory.
- **Real-time chat**: Multiple users can join `/chat.html`. All sent messages are broadcast to every connected client immediately.

You can expand this base by adding:

- Authentication for instructors and students
- Rooms/namespaces for each course
- Storing chat history in a database
- Uploading large files to cloud storage services

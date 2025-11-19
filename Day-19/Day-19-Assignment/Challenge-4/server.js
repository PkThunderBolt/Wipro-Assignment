const express = require("express");
const app = express();
const port = 4000;

// Middleware to parse JSON request bodies
app.use(express.json());

// ----------------------------------------------------------
// In-memory data store
// ----------------------------------------------------------
let books = [
  { id: 1, title: "1984", author: "Orwell" },
  { id: 2, title: "The Alchemist", author: "Coelho" },
];

// ----------------------------------------------------------
// GET /books → Return all books
// ----------------------------------------------------------
app.get("/books", (req, res) => {
  res.json(books);
});

// ----------------------------------------------------------
// POST /books → Add a new book
// ----------------------------------------------------------
app.post("/books", (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({
      message: "Title and author are required",
    });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
  };

  books.push(newBook);

  res.status(201).json({
    message: "Book added successfully",
    book: newBook,
  });
});

// ----------------------------------------------------------
// PUT /books/:id → Update a book
// ----------------------------------------------------------
app.put("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (!title || !author) {
    return res.status(400).json({
      message: "Both title and author are required",
    });
  }

  book.title = title;
  book.author = author;

  res.json({
    message: "Book updated successfully",
    updatedBook: book,
  });
});

// ----------------------------------------------------------
// DELETE /books/:id → Delete a book
// ----------------------------------------------------------
app.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);

  const index = books.findIndex((b) => b.id === bookId);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  const deletedBook = books.splice(index, 1);

  res.json({
    message: "Book deleted successfully",
    deletedBook,
  });
});

// ----------------------------------------------------------
// Start Server
// ----------------------------------------------------------
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

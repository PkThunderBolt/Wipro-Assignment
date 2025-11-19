const express = require("express");
const router = express.Router();

// In-memory database
let books = [
  { id: 1, title: "1984", author: "Orwell" },
  { id: 2, title: "The Alchemist", author: "Coelho" },
  { id: 3, title: "Harry Potter", author: "J.K. Rowling" },
];

// GET /books → Return all books
router.get("/", (req, res) => {
  res.json(books);
});

// POST /books → Add a new book
router.post("/", (req, res, next) => {
  try {
    const { title, author } = req.body;

    if (!title || !author) {
      return res.status(400).json({ error: "Title and author are required" });
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
  } catch (err) {
    next(err);
  }
});

// PUT /books/:id → Update a book
router.put("/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { title, author } = req.body;

    const book = books.find((b) => b.id === id);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    if (!title || !author) {
      return res.status(400).json({ error: "Both title and author required" });
    }

    book.title = title;
    book.author = author;

    res.json({
      message: "Book updated successfully",
      book,
    });
  } catch (err) {
    next(err);
  }
});

// DELETE /books/:id → Delete a book
router.delete("/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const index = books.findIndex((b) => b.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "Book not found" });
    }

    const deletedBook = books.splice(index, 1);

    res.json({
      message: "Book deleted successfully",
      deletedBook,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

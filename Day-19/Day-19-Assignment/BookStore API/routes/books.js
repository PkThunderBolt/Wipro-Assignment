const express = require("express");
const { body, param, validationResult } = require("express-validator");

const router = express.Router();

// In-memory database
let books = [
  { id: 1, title: "1984", author: "Orwell" },
  { id: 2, title: "The Alchemist", author: "Coelho" },
  { id: 3, title: "Harry Potter", author: "J.K. Rowling" },
];

// Helper: Validation response
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// ----------------------------------------------------------
// GET /books → Get all books
// ----------------------------------------------------------
router.get("/", (req, res) => {
  res.json(books);
});

// ----------------------------------------------------------
// GET /books/:id → Get book by ID
// ----------------------------------------------------------
router.get(
  "/:id",
  param("id").isInt().withMessage("ID must be an integer"),
  validate,
  (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find((b) => b.id === id);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json(book);
  }
);

// ----------------------------------------------------------
// POST /books → Add a new book
// ----------------------------------------------------------
router.post(
  "/",
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("author").notEmpty().withMessage("Author is required"),
  ],
  validate,
  (req, res) => {
    const { title, author } = req.body;

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
  }
);

// ----------------------------------------------------------
// PUT /books/:id → Update book
// ----------------------------------------------------------
router.put(
  "/:id",
  [param("id").isInt(), body("title").notEmpty(), body("author").notEmpty()],
  validate,
  (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find((b) => b.id === id);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    book.title = req.body.title;
    book.author = req.body.author;

    res.json({
      message: "Book updated successfully",
      book,
    });
  }
);

// ----------------------------------------------------------
// DELETE /books/:id → Delete
// ----------------------------------------------------------
router.delete("/:id", param("id").isInt(), validate, (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Book not found" });
  }

  const removed = books.splice(index, 1);

  res.json({
    message: "Book deleted successfully",
    deletedBook: removed[0],
  });
});

module.exports = router;

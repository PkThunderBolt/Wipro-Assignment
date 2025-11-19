# Mini Project — BookStore API

This project combines all the previous challenges into a single, fully functional
Express-based REST API for managing books. It includes modular routing, validation,
error handling, and additional middleware.

## Features

1. Complete CRUD operations for books:

   - GET /books → fetch all books
   - GET /books/:id → fetch a book by ID
   - POST /books → add a new book
   - PUT /books/:id → update a book
   - DELETE /books/:id → remove a book

2. Proper project structure using modular routing:

   - All book-related routes are stored in routes/books.js
   - server.js imports and uses the router with `app.use('/books', bookRouter)`

3. CORS support:

   - Uses the cors middleware to allow cross-origin requests.

4. Validation using express-validator:

   - Validates inputs such as title and author before adding or updating a book.

5. In-memory data storage:

   - Uses a temporary array to store book objects.

6. Global error handling:

   - Unknown routes return: "Route not found"
   - Internal errors return: `{ "error": "Internal Server Error" }`

7. Fully testable:
   - All routes can be tested easily using Postman or curl.

## Outcome

A complete mini REST API that demonstrates Express fundamentals including:
routing, middleware, validation, error handling, CORS, and API structuring.

import React, { useState } from "react";
import BookCard from "./BookCard";

// Parent component to render list of books
const BookList = () => {
  // Sample books data
  const booksData = [
    { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien", price: 12.99 * 83 },
    { id: 2, title: "1984", author: "George Orwell", price: 10.5 * 83 },
    { id: 3, title: "Dune", author: "Frank Herbert", price: 15.0 * 83 },
    { id: 4, title: "Foundation", author: "Isaac Asimov", price: 13.75 * 83 },
    {
      id: 5,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      price: 14.0 * 83,
    },
    {
      id: 6,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 11.99 * 83,
    },
    {
      id: 7,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: 9.5 * 83,
    },
    {
      id: 8,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 12.25 * 83,
    },
    {
      id: 9,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      price: 10.75 * 83,
    },
    {
      id: 10,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      price: 20.0 * 83,
    },
    {
      id: 11,
      title: "Brave New World",
      author: "Aldous Huxley",
      price: 13.0 * 83,
    },
    { id: 12, title: "The Martian", author: "Andy Weir", price: 14.5 * 83 },
    {
      id: 13,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 9.99 * 83,
    },
    { id: 14, title: "Moby Dick", author: "Herman Melville", price: 11.0 * 83 },
    {
      id: 15,
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      price: 12.0 * 83,
    },
  ];

  // State to manage view mode: "grid" or "list"
  const [viewMode, setViewMode] = useState("grid");

  // State for search input
  const [searchTerm, setSearchTerm] = useState("");

  // Filter books based on search input
  const filteredBooks = booksData.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Featured Books</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "200px" }}
      />

      {/* View Mode Buttons */}
      <div style={{ margin: "10px 0" }}>
        <button
          onClick={() => setViewMode("grid")}
          style={{ marginRight: "5px" }}
        >
          Grid View
        </button>
        <button onClick={() => setViewMode("list")}>List View</button>
      </div>

      {/* Books Container */}
      <div
        style={{
          display: "flex",
          flexDirection: viewMode === "grid" ? "row" : "column",
          flexWrap: "wrap",
        }}
      >
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;

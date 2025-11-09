import React, { useEffect, useState } from "react";
import axios from "axios";
import BookStore from "../flux/stores/BookStore";

const BookList = () => {
  const [books, setBooks] = useState([]); // State to store all books

  //  Fetch initial list of books from JSON server when the page loads
  useEffect(() => {
    axios
      .get("/books") // Requesting all books
      .then((res) => setBooks(res.data)) // If success, store data in 'books'
      .catch((err) => console.error("Error fetching books:", err)); // If error, show it in console
  }, []);

  //  Listen for updates in Flux Store (when new books are added)
  useEffect(() => {
    const handleStoreChange = (updatedBooks) => {
      setBooks(updatedBooks); // Update the state with new book list
    };

    BookStore.addChangeListener(handleStoreChange); // Subscribe to store
    return () => {
      BookStore.removeChangeListener(handleStoreChange); // Unsubscribe on component unmount
    };
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Available Books</h2>
      <div className="row">
        {/*  Loop through all books and display each one */}
        {books.map((book) => (
          <div className="col-md-4 mb-4" key={book.id}>
            <div className="card h-100 shadow-sm">
              {/*  Book Cover Image */}
              <img
                src={
                  book.image?.trim()
                    ? book.image
                    : "https://via.placeholder.com/250x350?text=No+Image"
                }
                alt={book.title || "Book cover"} // Fallback if title missing
                className="card-img-top"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  borderTopLeftRadius: "0.5rem",
                  borderTopRightRadius: "0.5rem",
                }}
              />

              {/*  Book Details */}
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{book.title}</h5>{" "}
                  {/* Book title */}
                  <p className="text-muted">Author: {book.author}</p>{" "}
                  {/* Author name */}
                  <p className="fw-bold text-success">
                    Price: ₹{book.price}
                  </p>{" "}
                  {/* Book price */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;

// Import required modules and components
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import withLoading from "../hoc/withLoading";
import RenderMessage from "../hoc/RenderMessage";

const BookList = () => {
  // State variable to store the list of books
  const [books, setBooks] = useState([]);

  // useEffect hook runs once when the component mounts
  // It fetches the list of books from the backend
  useEffect(() => {
    axios
      .get("/books") // This goes to http://localhost:5000/books due to proxy setup
      .then((res) => setBooks(res.data)) // Save the fetched books into the state
      .catch((err) => console.error("Error fetching books:", err)); // Log any error if fetching fails
  }, []);

  return (
    <div className="container mt-4 fade-in">
      {/* Render a welcome message using the RenderMessage component */}
      <RenderMessage message="Welcome to BookVerse! Explore the library" />

      {/* Page heading */}
      <h2 className="mb-4 text-center">Available Books</h2>

      {/* Display the books in a Bootstrap grid layout */}
      <div className="row">
        {books.map((book) => (
          <div className="col-md-4 mb-4" key={book.id}>
            {/* Each book is displayed inside a card */}
            <div className="card h-100 shadow-sm">
              {/* Show the book image */}
              <img
                src={book.image}
                alt={book.title}
                className="card-img-top"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  borderTopLeftRadius: "0.5rem",
                  borderTopRightRadius: "0.5rem",
                }}
              />

              {/* Card body contains book details */}
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text text-muted">Author: {book.author}</p>
                  <p className="card-text fw-bold text-success">
                    Price: ₹{book.price}
                  </p>
                </div>

                {/* Link to navigate to the Book Details page */}
                <Link
                  to={`/book/${book.id}`}
                  className="btn btn-outline-primary mt-2"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Wrap this component with the withLoading Higher-Order Component
export default withLoading(BookList);

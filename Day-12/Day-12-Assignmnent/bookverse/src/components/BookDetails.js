// Import required modules and hooks
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  // Get the "id" parameter from the route
  const { id } = useParams();

  // State to store the fetched book details
  const [book, setBook] = useState(null);

  // Fetch book data when the component mounts or when "id" changes
  useEffect(() => {
    axios
      .get(`/books/${id}`) // The proxy forwards this to http://localhost:5000/books/:id
      .then((res) => setBook(res.data)) // Save response data into state
      .catch((err) => console.error("Error fetching book details:", err));
  }, [id]);

  // Show loading message until data is fetched
  if (!book) return <p className="text-center mt-5">Loading book details...</p>;

  return (
    <div className="container mt-4 fade-in">
      {/* Navigation link to go back to the home page */}
      <Link to="/home" className="btn btn-secondary mb-3">
        ⬅ Back to Home
      </Link>

      {/* Display book details inside a Bootstrap card */}
      <div className="card p-4 shadow-sm">
        <div className="row align-items-center">
          {/* Left side: Book cover image */}
          <div className="col-md-4 text-center">
            <img
              src={book.image}
              alt={book.title}
              className="img-fluid rounded mb-3"
              style={{
                maxHeight: "350px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>

          {/* Right side: Book information */}
          <div className="col-md-8">
            <h2 className="mb-3">{book.title}</h2>
            <p className="text-muted">
              <strong>Author:</strong> {book.author}
            </p>
            <p className="fw-bold text-success">
              <strong>Price:</strong> ₹{book.price}
            </p>

            <hr />

            {/* Author biography */}
            <p>
              <strong>About Author:</strong> {book.bio}
            </p>

            {/* List of top books by the author */}
            <h5 className="mt-4">Top Books by {book.author}:</h5>
            <ul>
              {book.topBooks.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the component
export default BookDetails;

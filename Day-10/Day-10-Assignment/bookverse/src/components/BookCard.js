import React from "react";

// Functional component to display individual book details
const BookCard = ({ title, author, price }) => {
  return (
    <div
      className="book-card"
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "200px",
      }}
    >
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Price: ₹{price.toFixed(2)}</p>
    </div>
  );
};

export default BookCard;

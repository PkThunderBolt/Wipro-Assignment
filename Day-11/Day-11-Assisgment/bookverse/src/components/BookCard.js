import React from "react";
import PropTypes from "prop-types";

// Displays a single book card
// When clicked, triggers parent event to show author info
const BookCard = ({ title, author, price, onClick }) => {
  return (
    <div
      className="card shadow-sm h-100"
      style={{ cursor: "pointer", transition: "transform 0.2s" }}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Author: {author}</p>
        <p className="card-text text-success fw-bold">₹{price.toFixed(2)}</p>
      </div>
    </div>
  );
};

// Prop type validation for better reliability
BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default BookCard;

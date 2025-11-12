import React from "react";
import PropTypes from "prop-types";

export default function DestinationCard({ data, wished, onToggle }) {
  return (
    <div className="card destination-card flex-fill position-relative overflow-hidden">
      {/* Image with overlay */}
      <div className="image-container position-relative">
        <img
          src={data.img}
          className="card-img-top destination-image"
          alt={data.name}
        />
        <div className="image-overlay">
          <h5 className="destination-title text-white fw-bold mb-0">
            {data.name}
          </h5>
        </div>
      </div>

      {/* Card body */}
      <div className="card-body text-center">
        <p className="card-text mb-2 text-secondary">
          Starting from <strong>₹{data.price}</strong>
        </p>
        <button
          className={
            "btn btn-sm " + (wished ? "btn-danger" : "btn-outline-primary")
          }
          onClick={onToggle}
        >
          {wished ? "Remove from Wishlist ❤️" : "Add to Wishlist 🤍"}
        </button>
      </div>
    </div>
  );
}

DestinationCard.propTypes = {
  data: PropTypes.object.isRequired,
  wished: PropTypes.bool,
  onToggle: PropTypes.func,
};

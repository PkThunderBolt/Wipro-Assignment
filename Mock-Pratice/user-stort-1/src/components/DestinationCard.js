import React, { useState } from "react";

// This component shows a single travel destination card
// It displays an image, name, price, and a button to add/remove from wishlist
function DestinationCard({ name, image, price }) {
  // useState is used to keep track of whether the destination is added to wishlist or not
  const [wishlist, setWishlist] = useState(false);

  // This function toggles the wishlist state when the button is clicked
  const handleWishlist = () => {
    setWishlist(!wishlist);
  };

  return (
    // The card is placed inside a Bootstrap column for proper grid layout
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100">
        {/* Image of the destination */}
        <img src={image} className="card-img-top" alt={name} />

        {/* Card content section */}
        <div className="card-body text-center">
          {/* Destination name */}
          <h5 className="card-title">{name}</h5>

          {/* Price information */}
          <p className="card-text text-muted">Starting from ₹{price}</p>

          {/* Wishlist button that changes style and text when clicked */}
          <button
            className={`btn ${wishlist ? "btn-danger" : "btn-outline-primary"}`}
            onClick={handleWishlist}
          >
            {wishlist ? "Added to Wishlist " : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}

// Exporting this component so it can be used in App.js or other files
export default DestinationCard;

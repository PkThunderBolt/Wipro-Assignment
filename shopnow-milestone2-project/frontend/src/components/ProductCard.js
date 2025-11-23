import React from "react";
import PropTypes from "prop-types";

// This functional component represents a single product card on the ShopNow listing page.
function ProductCard({ title, price, discount }) {
  // This line calculates the final price by subtracting the discount from the original price.
  const finalPrice = price - discount;

  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p>Original price: ₹{price}</p>
      <p>Discount: ₹{discount}</p>
      <p>
        <strong>Final price: ₹{finalPrice}</strong>
      </p>
    </div>
  );
}

// These PropTypes help to make sure that correct data types are passed into this component.
ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
};

export default ProductCard;

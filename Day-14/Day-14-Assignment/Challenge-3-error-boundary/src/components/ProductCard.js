// ProductCard component
// Displays individual product data; intentionally throws error for testing

import React from "react";

function ProductCard({ product }) {
  // Throw error if product name missing
  if (!product.name) {
    throw new Error("Product name is missing!");
  }

  return (
    <div className="card p-3 mt-3 shadow-sm">
      <h5>{product.name}</h5>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductCard;

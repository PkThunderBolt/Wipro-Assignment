// Main App component
// Demonstrates how ErrorBoundary prevents crashes from child components

import React from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import ProductCard from "./components/ProductCard";

function App() {
  // Product data (one intentionally broken)
  const products = [
    { id: 1, name: "Laptop", price: 600 },
    { id: 2, name: "Phone", price: 250 },
    { id: 3, name: "", price: 999 }, // This will throw an error
    { id: 4, name: "Headphones", price: 90 },
  ];

  return (
    <div className="container mt-5 text-center">
      <h2># Error Boundary Demo #</h2>
      <p>
        Demonstrating how the app handles component errors gracefully without
        crashing.
      </p>

      {/* Wrap the potentially error-throwing components inside ErrorBoundary */}
      <ErrorBoundary>
        <div className="row justify-content-center">
          {products.map((prod) => (
            <div key={prod.id} className="col-md-3 col-sm-6">
              <ProductCard product={prod} />
            </div>
          ))}
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;

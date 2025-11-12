import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/productSlice";

// Component to display product list from Redux store
const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  // Fetch products when component mounts
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Display loading or error messages based on status
  if (status === "loading") return <p>Loading products...</p>;
  if (status === "failed") return <p>Failed to load products.</p>;

  // Display list of products
  return (
    <div>
      <h2>Product List</h2>
      {items.map((p) => (
        <div key={p.id} style={styles.card}>
          <p>
            <strong>{p.name}</strong>
          </p>
          <p>Price: ₹{p.price}</p>
        </div>
      ))}
    </div>
  );
};

// Basic inline styling
const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    margin: "10px auto",
    padding: "10px",
    width: "250px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
};

export default ProductList;

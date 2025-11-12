import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../store/productSlice";

// Component to update product details using Redux actions
const ProductEditor = () => {
  const [id, setId] = useState(""); // track product ID input
  const [name, setName] = useState(""); // track product name input
  const [price, setPrice] = useState(""); // track product price input
  const dispatch = useDispatch();

  // Handle updating a product
  const handleUpdate = () => {
    if (id && name && price) {
      // Dispatch Redux action to update product
      dispatch(updateProduct({ id: Number(id), name, price: Number(price) }));
      alert("Product updated successfully");
      setId("");
      setName("");
      setPrice("");
    } else {
      alert("Please fill all fields before updating");
    }
  };

  // Render input fields and update button
  return (
    <div style={styles.container}>
      <h2>Update Product</h2>
      <input
        type="number"
        placeholder="Product ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="New Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="New Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleUpdate} style={styles.button}>
        Update Product
      </button>
    </div>
  );
};

// Inline styling for editor
const styles = {
  container: {
    marginBottom: "20px",
  },
  input: {
    margin: "5px",
    padding: "6px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ProductEditor;

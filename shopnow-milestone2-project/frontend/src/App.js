import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import LoginControlledUncontrolled from "./components/LoginControlledUncontrolled";
import UserStatus from "./components/UserStatus";
import UserDetails from "./components/UserDetails";
import WindowWidthDemo from "./components/WindowWidthDemo";
import FormikLogin from "./components/FormikLogin";

// This component is the main entry point for the frontend application.
function App() {
  // Here we create some sample products so that the ProductCard component can be demonstrated easily.
  const sampleProducts = [
    { id: 1, title: "Laptop", price: 60000, discount: 5000 },
    { id: 2, title: "Headphones", price: 3000, discount: 500 },
    { id: 3, title: "Smartphone", price: 25000, discount: 2000 },
  ];

  return (
    <div className="app-container">
      {/* This block shows a simple navigation bar so that you can move between different demo pages. */}
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/login-controlled">Login Controlled</Link>
        <Link to="/user-status">User Status</Link>
        <Link to="/window-width">Window Width Demo</Link>
        <Link to="/formik-login">Formik Login</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>ShopNow Mock 2 Frontend</h1>
              <p>
                This app shows solutions for multiple React topics like props, state, routing,
                class components, higher order components, and Formik with Yup.
              </p>
            </div>
          }
        />
        <Route
          path="/products"
          element={
            <div className="products-page">
              <h2>Product List</h2>
              <div className="products-grid">
                {sampleProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    discount={product.discount}
                  />
                ))}
              </div>
            </div>
          }
        />
        <Route path="/login-controlled" element={<LoginControlledUncontrolled />} />
        <Route
          path="/user-status"
          element={
            // Here we pass userId as a prop so that the class component can validate it.
            <UserStatus userId={101} />
          }
        />
        {/* This route is used to show user details from the backend using the id from the URL. */}
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/window-width" element={<WindowWidthDemo />} />
        <Route path="/formik-login" element={<FormikLogin />} />
      </Routes>
    </div>
  );
}

export default App;

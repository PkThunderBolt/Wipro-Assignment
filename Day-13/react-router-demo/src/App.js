import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";

// Import your page components
import Home from "./pages/home";
import About from "./pages/about";
import ContactUs from "./pages/contactUs";
import User from "./pages/user";
import NotFound from "./pages/notFound";

function App() {
  return (
    <Router>
      <div className="app">
        <nav style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              marginRight: 12,
              color: isActive ? "blue" : "black",
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) => ({
              marginRight: 12,
              color: isActive ? "blue" : "black",
            })}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              marginRight: 12,
              color: isActive ? "blue" : "black",
            })}
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/user/42"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "black",
            })}
          >
            User 42
          </NavLink>
        </nav>

        <main style={{ padding: 12 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

// Import required modules
import React from "react";
import { Link } from "react-router-dom";

// Navbar component definition
const Navbar = () => (
  // Bootstrap navbar with center-aligned brand name
  <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div className="container d-flex justify-content-center">
      {/* Brand name that navigates to the home page */}
      <Link className="navbar-brand fw-bold fs-3" to="/home">
        ##BookVerse##
      </Link>
    </div>
  </nav>
);

// Export the component
export default Navbar;

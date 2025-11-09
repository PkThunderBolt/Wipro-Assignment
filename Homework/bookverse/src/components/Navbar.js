import React from "react";
import { Link } from "react-router-dom";

//  Navbar component to navigate between Home and Add Book pages
const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div className="container d-flex justify-content-between align-items-center">
      {/*  Website Logo / Brand Name - Click to go to Home Page */}
      <Link className="navbar-brand fw-bold fs-3" to="/home">
        ## BookVerse ##
      </Link>

      {/*  Button to go to Add Book page */}
      <Link className="btn btn-success" to="/add-book">
        Add Book
      </Link>
    </div>
  </nav>
);

//  Exporting Navbar so it can be used in App.js
export default Navbar;

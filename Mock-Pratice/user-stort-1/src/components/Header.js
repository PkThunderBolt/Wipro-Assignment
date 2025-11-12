import React from "react";

// This component represents the top header section of the travel website
function Header() {
  return (
    // The navigation bar with a primary background and white text
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      {/* The container centers everything horizontally using Bootstrap flex utilities */}
      <div className="container d-flex justify-content-center">
        {/* This is the website title shown at the center of the navbar */}
        <h2 className="navbar-brand mb-0 text-center">Wipro-Travel</h2>
      </div>
    </nav>
  );
}

// Exporting Header so it can be used in other parts of the app
export default Header;

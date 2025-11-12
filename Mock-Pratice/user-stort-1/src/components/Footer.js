import React from "react";

// This component creates a footer that stays fixed at the bottom of the page
function Footer() {
  return (
    // Footer with dark background, white text, and centered content
    // 'fixed-bottom' keeps it always visible at the bottom of the screen
    <footer
      className="bg-dark text-white text-center py-3 fixed-bottom"
      style={{ zIndex: 10 }}
    >
      {/* Simple copyright notice */}
      <p className="mb-0">© 2025 Wipro-Travel. All Rights Reserved.</p>
    </footer>
  );
}

// Exporting Footer so it can be used throughout the app
export default Footer;

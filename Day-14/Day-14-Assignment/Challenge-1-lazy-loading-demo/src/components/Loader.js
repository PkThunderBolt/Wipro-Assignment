// Import React library
import React from "react";

// Define Loader component — used as a fallback during lazy loading
const Loader = () => {
  return (
    // Main container to center the spinner
    <div className="d-flex justify-content-center align-items-center mt-4">
      {/* Bootstrap spinner animation */}
      <div className="spinner-border text-primary" role="status">
        {/* Accessible text for screen readers */}
        <span className="visually-hidden">Loading...</span>
      </div>
      {/* Text message displayed beside spinner */}
      <span className="ms-2">Loading content...</span>
    </div>
  );
};

// Export the Loader component for use in other files
export default Loader;

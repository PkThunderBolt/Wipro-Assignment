// Import React library
import React from "react";

// Define the InstructorProfile component
const InstructorProfile = () => {
  return (
    // Card container for displaying instructor information
    <div className="card p-3 mt-3">
      {/* Instructor name */}
      <h3>Instructor: Parth Shukla</h3>

      {/* Instructor description */}
      <p>
        Full Stack & Data Engg Corporate SME empowering businesses with
        innovative skills, knowledge in Great Learning
      </p>

      {/* Instructor expertise section */}
      <p>
        <b>Expertise:</b> Html, Css, JavaScript, React, and Node Js.
      </p>
    </div>
  );
};

// Export the InstructorProfile component
export default InstructorProfile;

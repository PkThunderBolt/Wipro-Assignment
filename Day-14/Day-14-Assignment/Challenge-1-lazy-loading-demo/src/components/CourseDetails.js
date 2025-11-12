// Import React library
import React from "react";

// Define the CourseDetails component
const CourseDetails = () => {
  return (
    // Card container displaying course information
    <div className="card p-3 mt-3">
      {/* Course title */}
      <h3>Mern FullStack Course</h3>

      {/* Course description */}
      <p>
        This course covers hooks, routing, state management, and performance
        optimization.
      </p>

      {/* Course duration information */}
      <p>
        <b>Duration:</b> 6 weeks
      </p>
    </div>
  );
};

// Export the CourseDetails component for use in other parts of the app
export default CourseDetails;

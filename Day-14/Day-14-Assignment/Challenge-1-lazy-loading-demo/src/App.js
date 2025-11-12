// Import necessary React modules
import React, { Suspense, useState, lazy } from "react";
// Import stylesheet
import "./App.css";
// Import custom loader component
import Loader from "./components/Loader";

// Lazy load components — these will be loaded only when needed
const CourseDetails = lazy(() => import("./components/CourseDetails"));
const InstructorProfile = lazy(() => import("./components/InstructorProfile"));

function App() {
  // State variables to control the visibility of components
  const [showCourse, setShowCourse] = useState(false);
  const [showInstructor, setShowInstructor] = useState(false);

  return (
    // Main container for the application
    <div className="container text-center mt-5">
      {/* Application Title */}
      <h1 className="mb-4"># Online Learning Platform #</h1>

      {/* Buttons for toggling components */}
      <div className="d-flex justify-content-center gap-3">
        {/* Button to show/hide Course Details */}
        <button
          className="btn btn-primary"
          onClick={() => setShowCourse(!showCourse)}
        >
          {showCourse ? "Hide Course Details" : "View Course Details"}
        </button>

        {/* Button to show/hide Instructor Profile */}
        <button
          className="btn btn-success"
          onClick={() => setShowInstructor(!showInstructor)}
        >
          {showInstructor ? "Hide Instructor" : "View Instructor Profile"}
        </button>
      </div>

      {/* Suspense provides fallback UI while components load */}
      <Suspense fallback={<Loader />}>
        {/* Render CourseDetails only when showCourse is true */}
        {showCourse && <CourseDetails />}
        {/* Render InstructorProfile only when showInstructor is true */}
        {showInstructor && <InstructorProfile />}
      </Suspense>
    </div>
  );
}

// Export App component as default
export default App;

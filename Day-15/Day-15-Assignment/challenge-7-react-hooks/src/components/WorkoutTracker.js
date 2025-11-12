// WorkoutTracker Component — React Hooks Challenge 7
// This component tracks workout sets and rest time using React Hooks (useState, useEffect, useRef).

import React, { useState } from "react";
import { useTimer } from "../hooks/useTimer";

const WorkoutTracker = () => {
  // Track number of sets completed
  const [sets, setSets] = useState(0);

  // Import timer logic from the custom hook (time value, control functions)
  const { time, isRunning, start, stop, reset } = useTimer(0);

  // Track whether the user is currently resting
  const [resting, setResting] = useState(false);

  // Function to handle starting a new set
  const handleStartSet = () => {
    setSets((prev) => prev + 1); // Increment set count
    setResting(false); // Switch to active workout mode
    reset(); // Reset timer
    start(); // Start timer
  };

  // Function to handle rest period
  const handleRest = () => {
    stop(); // Stop workout timer
    setResting(true); // Set resting mode
    reset(); // Reset timer
    start(); // Start rest timer
  };

  // Function to handle finishing rest period
  const handleFinishRest = () => {
    stop(); // Stop rest timer
    reset(); // Reset time to 0
    setResting(false); // Exit resting mode
  };

  // Render tracker UI with timer and controls
  return (
    <div style={styles.container}>
      <h1> Workout Tracker</h1>
      <h2>Sets Completed: {sets}</h2>
      <h3>
        {resting ? "Rest Time:" : "Active Set Time:"} {time}s
      </h3>

      <div style={styles.buttons}>
        <button onClick={handleStartSet} style={styles.button}>
          Start Set
        </button>
        <button onClick={handleRest} style={styles.button} disabled={resting}>
          Rest
        </button>
        <button onClick={handleFinishRest} style={styles.button}>
          Finish Rest
        </button>
      </div>

      <p>
        {isRunning
          ? "⏱ Timer Running..."
          : " Timer Stopped / Waiting for Next Action"}
      </p>
    </div>
  );
};

// Inline style definitions for container and buttons
const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "12px",
    width: "300px",
    margin: "40px auto",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  buttons: { display: "flex", justifyContent: "center", gap: "10px" },
  button: {
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
};

export default WorkoutTracker;

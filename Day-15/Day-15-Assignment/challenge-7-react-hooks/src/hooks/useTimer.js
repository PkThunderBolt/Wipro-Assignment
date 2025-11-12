// Custom Hook: useTimer
// This hook manages a simple timer using React Hooks (useState, useEffect, useRef).
// It provides reusable logic for starting, stopping, and resetting a timer in any component.

import { useState, useEffect, useRef } from "react";

export const useTimer = (initialTime = 0) => {
  // State variable to track the current time in seconds
  const [time, setTime] = useState(initialTime);

  // State variable to track whether the timer is running
  const [isRunning, setIsRunning] = useState(false);

  // useRef is used to store the interval ID so it persists between renders
  const intervalRef = useRef(null);

  // useEffect handles side effects — it runs when "isRunning" changes
  useEffect(() => {
    // Start the timer if isRunning is true
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1); // Increment time every second
      }, 1000);
    }

    // Cleanup function: clears interval when component unmounts or timer stops
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // Start function: sets the running state to true
  const start = () => setIsRunning(true);

  // Stop function: clears interval and pauses timer
  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  // Reset function: clears interval, stops timer, and resets time to initial value
  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  // Return values and functions for external use
  return { time, isRunning, start, stop, reset };
};

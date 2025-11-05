import React from "react";
import { NumberItem } from "../types/NumberItem";

// ---------------------------------------
// Props Interface for Logger
// ---------------------------------------
// - numbers: the list of numbers currently displayed on the screen
// ---------------------------------------
interface LoggerProps {
  numbers: NumberItem[];
}

// ---------------------------------------
// Component: Logger
// ---------------------------------------
// Purpose: Iterates over the list of numbers and logs each one
// to the browser console using the forEach() method.
// ---------------------------------------
const Logger: React.FC<LoggerProps> = ({ numbers }) => {
  // -----------------------------------
  // Function: logNumbers
  // -----------------------------------
  // Loops through all numbers in the array and prints them
  // in the browser console.
  // Displays a small alert to remind the user to check the console.
  const logNumbers = () => {
    numbers.forEach((num) => {
      console.log("Logged Number:", num.value);
    });
    alert(" Numbers have been logged! Check the console.");
  };

  return (
    <div className="section gray-bg">
      <h2>Logger </h2>
      <p>
        This section demonstrates the <code>forEach()</code> method in JavaScript.
      </p>
      <ul>
        <li>Iterates through each number in the array.</li>
        <li>Logs the values inside the browser console.</li>
      </ul>

      {/* Button to trigger console logging */}
      <button onClick={logNumbers}>Log All Numbers</button>
    </div>
  );
};

export default Logger;

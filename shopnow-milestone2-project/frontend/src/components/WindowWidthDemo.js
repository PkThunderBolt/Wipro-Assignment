import React from "react";
import withWindowWidth from "./withWindowWidth";

// This component displays the current window width on the screen.
function SimpleWidthDisplay({ windowWidth }) {
  return (
    <div className="status-box">
      <h2>Window Width Demo</h2>
      <p>Current window width: {windowWidth}px</p>
      <p>
        You can resize the browser window to see how this value changes in real time.
      </p>
    </div>
  );
}

// This wraps SimpleWidthDisplay with the higher order component so that it receives windowWidth as a prop.
const WindowWidthDemo = withWindowWidth(SimpleWidthDisplay);

export default WindowWidthDemo;

import React, { useState } from "react";
import NumberList from "./components/NumberList";
import FilterControls from "./components/FilterControls";
import Logger from "./components/Logger";
import HoistingDemo from "./components/HoistingDemo";
import ConstructorDemo from "./components/ConstructorDemo";
import "./App.css"; // Import styles

// Interface for numbers
const NumberItem = (value) => ({ value });

const App = () => {
  // Initial number list
  const initialNumbers = [
    new NumberItem(1),
    new NumberItem(2),
    new NumberItem(3),
    new NumberItem(4),
    new NumberItem(5),
    new NumberItem(6),
  ];

  // State for current number list
  const [numbers, setNumbers] = useState(initialNumbers);

  return (
    <div className="App">
      <h1>JSX & JavaScript Concepts Sprint</h1>

      {/* 🟡 Display the number list */}
      <div className="section yellow-bg">
        <NumberList numbers={numbers} />
      </div>

      {/* 🟢 Filter and Map Controls */}
      <div className="section green-bg">
        <FilterControls
          numbers={numbers}
          setNumbers={setNumbers}
          originalNumbers={initialNumbers}
        />
      </div>

      {/* ⚪ Logger Component */}
      <div className="section gray-bg">
        <Logger numbers={numbers} />
      </div>

      {/* 🔵 Hoisting Demonstration */}
      <div className="section blue-bg">
        <HoistingDemo />
      </div>

      {/* 🟣 Constructor Demonstration */}
      <div className="section purple-bg">
        <ConstructorDemo />
      </div>
    </div>
  );
};

export default App;

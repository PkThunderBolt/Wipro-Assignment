import React, { useState } from "react";
import NumberList from "./components/NumberList";
import FilterControls from "./components/FilterControls";
import Logger from "./components/Logger";
import HoistingDemo from "./components/HoistingDemo";
import ConstructorDemo from "./components/ConstructorDemo";
import { NumberItem } from "./types/NumberItem";
import "./App.css";

// ---------------------------------------
// Component: App
// ---------------------------------------
// This is the main parent component that brings together all the
// smaller components: NumberList, FilterControls, Logger, HoistingDemo,
// and ConstructorDemo.
//
// It manages the state of the numbers and passes data + handlers
// as props to child components.
// ---------------------------------------
const App: React.FC = () => {
  // -----------------------------------
  // Initial array of numbers
  // Stored as objects (to match NumberItem interface)
  // -----------------------------------
  const initialNumbers: NumberItem[] = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];

  // -----------------------------------
  // State: numbers
  // Holds the current list of numbers displayed on screen
  // setNumbers → used to update the list dynamically
  // -----------------------------------
  const [numbers, setNumbers] = useState<NumberItem[]>(initialNumbers);

  return (
    <div className="App">
      {/* ------------------------------- */}
      {/* App Header */}
      {/* ------------------------------- */}
      <h1>JSX and JavaScript Concepts Sprint </h1>

      {/* ------------------------------- */}
      {/* Section 1: Display Number List */}
      {/* ------------------------------- */}
      <div className="section yellow-bg">
        <h2>1️⃣ Number List</h2>
        <NumberList numbers={numbers} />
      </div>

      {/* ------------------------------- */}
      {/* Section 2: Filter & Map Controls */}
      {/* ------------------------------- */}
      <div className="section green-bg">
        <h2>2️⃣ Filter & Map Controls</h2>
        <FilterControls
          numbers={numbers}
          setNumbers={setNumbers}
          originalNumbers={initialNumbers}
        />
      </div>

      {/* ------------------------------- */}
      {/* Section 3: Logger (forEach Demo) */}
      {/* ------------------------------- */}
      <div className="section gray-bg">
        <h2>3️⃣ Logger</h2>
        <Logger numbers={numbers} />
      </div>

      {/* ------------------------------- */}
      {/* Section 4: Variable & Function Hoisting */}
      {/* ------------------------------- */}
      <div className="section blue-bg">
        <h2>4️⃣ Variable & Function Hoisting</h2>
        <HoistingDemo />
      </div>

      {/* ------------------------------- */}
      {/* Section 5: Constructor Demo */}
      {/* ------------------------------- */}
      <div className="section purple-bg">
        <h2>5️⃣ Constructor Demo</h2>
        <ConstructorDemo />
      </div>
    </div>
  );
};

export default App;

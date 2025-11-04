import React, { useState } from "react";
import NumberList from "./components/NumberList";
import FilterControls from "./components/FilterControls";
import Logger from "./components/Logger";
import HoistingDemo from "./components/HoistingDemo";
import ConstructorDemo from "./components/ConstructorDemo";

// ✅ Proper constructor class
class NumberItem {
  constructor(value) {
    this.value = value;
  }
}

const App = () => {
  const initialNumbers = [
    new NumberItem(1),
    new NumberItem(2),
    new NumberItem(3),
    new NumberItem(4),
    new NumberItem(5),
    new NumberItem(6),
  ];

  const [numbers, setNumbers] = useState(initialNumbers);

  return (
    <div className="App">
      <h1>JSX & JavaScript Concepts Sprint</h1>

      <div className="section yellow-bg">
        <NumberList numbers={numbers} />
      </div>

      <div className="section green-bg">
        <FilterControls
          numbers={numbers}
          setNumbers={setNumbers}
          originalNumbers={initialNumbers}
        />
      </div>

      <div className="section gray-bg">
        <Logger numbers={numbers} />
      </div>

      <div className="section blue-bg">
        <HoistingDemo />
      </div>

      <div className="section purple-bg">
        <ConstructorDemo />
      </div>
    </div>
  );
};

export default App;

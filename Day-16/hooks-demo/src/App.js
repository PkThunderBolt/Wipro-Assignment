import React from "react";
import "./App.css";
import DataDisplay from "./components/DataDisplay";

function App() {
  return (
    <div className="app">
      <h1>Custom Hook Demo: Data Fetching</h1>
      <DataDisplay />
    </div>
  );
}

export default App;

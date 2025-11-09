import React from "react";
import ButtonComponent from "./components/ButtonComponent";
import CardComponent from "./components/CardComponent";

function App() {
  return React.createElement("div", { className: "container py-4" }, [
    React.createElement(
      "h1",
      { className: "mb-4 text-center" },
      "Bootstrap + React Components "
    ),

    React.createElement(
      "div",
      { className: "mb-3" },
      React.createElement(ButtonComponent)
    ),

    React.createElement(CardComponent),
  ]);
}

export default App;

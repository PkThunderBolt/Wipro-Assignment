import React from "react";

const HoistingDemo = () => {
  // Variable hoisting example
  console.log("Variable before declaration:", a);
  var a = 10;

  // Function hoisting example
  hoistedFunction();
  function hoistedFunction() {
    console.log("This is a hoisted function!");
  }

  return (
    <>
      <h2>Hoisting Demo</h2>
      <p>Open console to see variable and function hoisting in action.</p>
    </>
  );
};

export default HoistingDemo;

import React from "react";

// A simple constructor demo using a JavaScript class
class NumberItem {
  constructor(value) {
    this.value = value;
  }

  display() {
    return `Number value is ${this.value}`;
  }
}

const ConstructorDemo = () => {
  const number = new NumberItem(10); // ✅ Using 'new' keyword to create object

  return (
    <div className="component">
      <h3>Constructor Demo</h3>
      <p>{number.display()}</p>
    </div>
  );
};

export default ConstructorDemo;

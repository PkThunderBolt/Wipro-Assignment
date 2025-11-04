import React from "react";

class NumberConstructor {
  constructor(value) {
    this.value = value;
  }

  double() {
    return this.value * 2;
  }
}

const ConstructorDemo = () => {
  const obj = new NumberConstructor(5);
  const doubled = obj.double();

  return (
    <>
      <h2>Constructor Demo</h2>
      <p>
        Original value: <b>{obj.value}</b>
      </p>
      <p>
        Doubled using constructor method: <b>{doubled}</b>
      </p>
    </>
  );
};

export default ConstructorDemo;

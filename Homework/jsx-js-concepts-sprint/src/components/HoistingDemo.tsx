import React, { useEffect } from "react";

// ---------------------------------------
// Component: HoistingDemo
// ---------------------------------------
// Purpose: Demonstrates how variable and function hoisting
// work in JavaScript, using simple console examples.
// ---------------------------------------
const HoistingDemo: React.FC = () => {
  useEffect(() => {
    console.log("=== Variable & Function Hoisting Demo ===");

    // -----------------------------------
    // 🔹 Variable Hoisting
    // -----------------------------------
    // In JavaScript, 'var' declarations are hoisted to the top of their scope.
    // That means 'a' is declared but not yet assigned a value — so it prints 'undefined'.
    // TypeScript flags this as unsafe, so we temporarily disable the lint warning.

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    // @ts-ignore
    console.log(a); // Output: undefined (hoisted declaration, not assignment)

    var a = 10; // Declaration hoisted, assignment happens here
    console.log("After assignment, a =", a);

    // -----------------------------------
    // 🔹 Function Hoisting
    // -----------------------------------
    // Function declarations are fully hoisted — meaning we can call them
    // even before they are defined in the code.
    hoistedFunction(); // Works perfectly

    function hoistedFunction() {
      console.log(" Function hoisting works before declaration!");
    }

    // -----------------------------------
    // 🔹 let / const (Temporal Dead Zone)
    // -----------------------------------
    // Unlike 'var', variables declared with 'let' or 'const'
    // are *not accessible* before their declaration.
    // Accessing them earlier would throw a ReferenceError (TDZ).
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let b = 20;

    console.log("Hoisting demo complete — check console for details!");
  }, []); // Empty dependency → runs only once when component mounts

  return (
    <div className="section blue-bg">
      <h2>Hoisting Demo </h2>
      <p>
        This section demonstrates how <code>var</code>, <code>let</code>, and{" "}
        <code>function</code> hoisting behave in JavaScript.
      </p>
      <ul>
        <li>
          <strong>var:</strong> Declaration hoisted, value undefined.
        </li>
        <li>
          <strong>let / const:</strong> Not hoisted (in TDZ until defined).
        </li>
        <li>
          <strong>function:</strong> Fully hoisted (works before definition).
        </li>
      </ul>
      <p>
        <em>Open the browser console to see real hoisting behavior!</em>
      </p>
    </div>
  );
};

export default HoistingDemo;

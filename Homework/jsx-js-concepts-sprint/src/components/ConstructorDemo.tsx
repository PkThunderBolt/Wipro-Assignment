import React, { useEffect } from "react";

// -----------------------------
// Example of a simple class with a constructor
// -----------------------------
class Car {
  brand: string;
  year: number;

  // The constructor runs automatically whenever a new object of this class is created
  constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
  }

  // A method to return car info as a string
  displayInfo() {
    return `${this.brand} - ${this.year}`;
  }
}

// -----------------------------
// React Functional Component: ConstructorDemo
// -----------------------------
const ConstructorDemo: React.FC = () => {
  useEffect(() => {
    // Creating two Car objects using the constructor
    const car1 = new Car("Tesla", 2023);
    const car2 = new Car("BMW", 2022);

    // Logging constructor output to the console
    console.log("=== Constructor Demo ===");
    console.log(car1.displayInfo()); // Output: Tesla - 2023
    console.log(car2.displayInfo()); // Output: BMW - 2022
  }, []); // Empty dependency array → runs only once on mount

  return (
    <div className="section purple-bg">
      <h2>Constructor Demo </h2>
      <p>
        This section demonstrates how constructors are used in
        JavaScript/TypeScript classes.
      </p>
      <ul>
        <li>
          Creates objects using the <code>new</code> keyword.
        </li>
        <li>Initializes values for each object when it's created.</li>
        <li>Check the console to see how it logs car details.</li>
      </ul>
    </div>
  );
};

export default ConstructorDemo;

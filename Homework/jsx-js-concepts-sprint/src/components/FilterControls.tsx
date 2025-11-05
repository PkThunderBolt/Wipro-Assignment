import React from "react";
import { NumberItem } from "../types/NumberItem";

// ---------------------------------------
// Props Interface for FilterControls
// ---------------------------------------
// - numbers: current state of displayed numbers
// - setNumbers: function to update the number list
// - originalNumbers: keeps a copy of the initial list (for reset)
// ---------------------------------------
interface FilterControlsProps {
  numbers: NumberItem[];
  setNumbers: React.Dispatch<React.SetStateAction<NumberItem[]>>;
  originalNumbers: NumberItem[];
}

// ---------------------------------------
// Component: FilterControls
// ---------------------------------------
// Handles filtering (even numbers), mapping (doubling),
// and resetting the list to its original state.
// ---------------------------------------
const FilterControls: React.FC<FilterControlsProps> = ({
  numbers,
  setNumbers,
  originalNumbers,
}) => {
  // -------------------------------
  // Filters only even numbers
  // -------------------------------
  const handleFilterEven = () => {
    const evenNumbers = originalNumbers.filter((num) => num.value % 2 === 0);
    setNumbers(evenNumbers);
  };

  // -------------------------------
  // Maps numbers → doubles their values
  // -------------------------------
  const handleDouble = () => {
    const doubled = originalNumbers.map((num) => ({
      value: num.value * 2,
    }));
    setNumbers(doubled);
  };

  // -------------------------------
  // Resets list back to original values
  // -------------------------------
  const handleReset = () => {
    setNumbers(originalNumbers);
  };

  return (
    <div className="section yellow-bg">
      <h2>Filter & Map Controls </h2>
      <p>Use these buttons to modify the list of numbers dynamically:</p>

      {/* Action buttons for different operations */}
      <button onClick={handleFilterEven}>Filter Even</button>
      <button onClick={handleDouble}>Double Values</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default FilterControls;

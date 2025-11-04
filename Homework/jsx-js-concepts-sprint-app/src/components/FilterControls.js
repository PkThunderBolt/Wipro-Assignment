import React from "react";

const FilterControls = ({ onDouble, setNumbers, numbers, originalNumbers }) => {
  const handleFilterEven = () => {
    setNumbers(numbers.filter((num) => num.value % 2 === 0));
  };

  return (
    <div>
      <h3>Filter Controls</h3>
      <button onClick={handleFilterEven}>Show Even Numbers</button>
      <button onClick={onDouble}>Double Numbers</button>
      <button onClick={() => setNumbers(originalNumbers)}>Reset</button>
    </div>
  );
};

export default FilterControls;

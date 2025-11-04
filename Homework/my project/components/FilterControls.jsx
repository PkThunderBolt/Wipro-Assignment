import React from "react";

const NumberItem = (value) => ({ value });

const FilterControls = ({ numbers, setNumbers, originalNumbers }) => {
  const handleFilterEven = () => {
    const filtered = originalNumbers.filter((num) => num.value % 2 === 0);
    setNumbers(filtered);
  };

  const handleMapDouble = () => {
    const doubled = originalNumbers.map((num) => new NumberItem(num.value * 2));
    setNumbers(doubled);
  };

  const handleReset = () => setNumbers(originalNumbers);

  return (
    <>
      <h2>Filter & Map Controls</h2>
      <button onClick={handleFilterEven}>Show Even Numbers</button>
      <button onClick={handleMapDouble}>Double Numbers</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default FilterControls;

import React from "react";
import { NumberItem } from "../types/NumberItem";

// ---------------------------------------
// Props Interface for NumberList
// ---------------------------------------
// - numbers: an array of NumberItem objects (each containing a numeric value)
// ---------------------------------------
interface NumberListProps {
  numbers: NumberItem[];
}

// ---------------------------------------
// Component: NumberList
// ---------------------------------------
// Purpose: Displays the list of numbers passed down as props.
// Uses the JavaScript map() method to render each number inside a <li> element.
// ---------------------------------------
const NumberList: React.FC<NumberListProps> = ({ numbers }) => {
  return (
    <div className="section green-bg">
      <h2>Number List </h2>
      <p>
        This section displays all the numbers currently available in the list.
      </p>

      {/* 
        Using map() to loop through the array of numbers 
        and render each one as a list item.
      */}
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;

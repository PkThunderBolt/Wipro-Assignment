import React from "react";

const NumberList = ({ numbers }) => {
  return (
    <>
      <h2>Number List</h2>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num.value}</li>
        ))}
      </ul>
    </>
  );
};

export default NumberList;

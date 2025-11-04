import React from "react";

const Logger = ({ numbers }) => {
  const handleLog = () => {
    numbers.forEach((num) => console.log("Logging:", num.value));
    alert("Numbers logged in console!");
  };

  return (
    <>
      <h2>Logger</h2>
      <button onClick={handleLog}>Log Numbers to Console</button>
    </>
  );
};

export default Logger;

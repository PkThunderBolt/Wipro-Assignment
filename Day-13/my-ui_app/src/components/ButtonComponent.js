import React from "react";

function ButtonComponent() {
  return React.createElement(
    "button",
    { className: "btn btn-primary" },
    "Click Me"
  );
}

export default ButtonComponent;

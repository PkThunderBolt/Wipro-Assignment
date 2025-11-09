import React from "react";

// Reusable Render Props component for rendering UI dynamically
const RenderMessage = ({ message }) => {
  return (
    <div className="alert alert-info text-center" role="alert">
      {message}
    </div>
  );
};

export default RenderMessage;

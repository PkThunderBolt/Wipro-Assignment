// Import React and memo for optimization
import React from "react";

// Functional component wrapped with React.memo to prevent unnecessary re-renders
const StatsCard = React.memo(({ title, value, lastUpdated }) => {
  console.log(`${title} rendered`); // Log to observe re-renders

  return (
    <div className="card p-3 mt-3 shadow-sm">
      <h5>Title: {title}</h5>
      <p className="fs-4 fw-bold">Value: {value}</p>
      <small className="text-muted">Last Updated: {lastUpdated}</small>
    </div>
  );
});

export default StatsCard;

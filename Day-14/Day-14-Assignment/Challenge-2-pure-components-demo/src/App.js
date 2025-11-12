// Import React and hooks
import React, { useState } from "react";
// Import stylesheet
import "./App.css";
// Import the memoized StatsCard component
import StatsCard from "./components/StatsCard";

function App() {
  // Dashboard data — stored as an array of objects
  const [stats, setStats] = useState([
    { id: 1, title: "Users", value: 120, lastUpdated: "10:00 AM" },
    { id: 2, title: "Revenue", value: "$5,000", lastUpdated: "10:00 AM" },
    { id: 3, title: "Orders", value: 230, lastUpdated: "10:00 AM" },
  ]);

  // Track which card is selected for update (default = Users)
  const [selected, setSelected] = useState(1);

  // Function to simulate updating the selected card's value
  const simulateUpdate = () => {
    setStats((prevStats) =>
      prevStats.map(
        (item) =>
          // Update only the selected card
          item.id === selected
            ? {
                ...item,
                // Logic for updating value differently based on type
                value:
                  item.title === "Revenue"
                    ? `$${parseInt(item.value.replace("$", "")) + 100}` // increment revenue
                    : item.value + Math.floor(Math.random() * 10 + 1), // increment users/orders
                // Update timestamp
                lastUpdated: new Date().toLocaleTimeString(),
              }
            : item // leave others unchanged
      )
    );
  };

  return (
    <div className="container text-center mt-5">
      {/* Page title */}
      <h2 className="mb-4"> Pure Components Demo</h2>

      {/* Radio button section — choose which card to update */}
      <div className="d-flex justify-content-center gap-3 mb-3">
        {stats.map((item) => (
          <label key={item.id}>
            <input
              type="radio"
              name="updateOption"
              value={item.id}
              checked={selected === item.id}
              onChange={() => setSelected(item.id)}
              className="me-2"
            />
            {item.title}
          </label>
        ))}
      </div>

      {/* Button to trigger update */}
      <button className="btn btn-primary mb-4" onClick={simulateUpdate}>
        Simulate Update
      </button>

      {/* Display all StatsCard components */}
      <div className="row justify-content-center">
        {stats.map((stat) => (
          <div key={stat.id} className="col-md-3 col-sm-6">
            <StatsCard
              title={stat.title}
              value={stat.value}
              lastUpdated={stat.lastUpdated}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// Export App component
export default App;

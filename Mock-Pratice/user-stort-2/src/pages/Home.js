import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content text-center text-white">
            <h1 className="fw-bold display-4">
              Explore the World with Wipro Travel
            </h1>
            <p className="lead">
              Discover unforgettable destinations at amazing prices.
            </p>
            <button className="btn btn-light btn-lg mt-3">
              Start Exploring
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

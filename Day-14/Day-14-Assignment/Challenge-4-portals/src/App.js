// Main App Component
// Demonstrates using React Portals for modal popups

import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  // Toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="app-container text-center mt-5">
      <h2># React Portals Demo #</h2>
      <p>Modal renders outside the main DOM hierarchy using createPortal().</p>

      <button className="btn btn-primary mt-3" onClick={toggleModal}>
        {showModal ? "Close Modal" : "Open Modal"}
      </button>

      {/* Render modal when showModal is true */}
      {showModal && <Modal onClose={toggleModal} />}
    </div>
  );
}

export default App;

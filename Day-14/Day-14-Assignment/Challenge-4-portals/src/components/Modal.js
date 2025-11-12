// Modal Component using React Portals

import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

function Modal({ onClose }) {
  // Prevent background scroll when modal opens
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  // Modal content
  const modalContent = (
    <div className="modal-overlay">
      <div className="modal-content fade-in">
        <h4> Portal Modal</h4>
        <p>
          This modal is rendered outside the main React DOM tree using
          <b> ReactDOM.createPortal()</b>.
        </p>
        <button className="btn btn-danger mt-3" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );

  // Create Portal
  return ReactDOM.createPortal(modalContent, modalRoot);
}

export default Modal;

import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export default function ModalPortal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
      onClick={onClose} // Close on background click
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px",
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {children}

        <button style={{ marginTop: "10px" }} onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

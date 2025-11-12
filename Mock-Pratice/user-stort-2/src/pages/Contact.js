import React from "react";

function Contact() {
  return (
    <div className="container mt-5 text-center">
      <h2 className="fw-bold mb-3">Get in Touch</h2>
      <p className="text-muted mb-4">
        We'd love to hear from you! Reach out for travel support or package
        details.
      </p>
      <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
        <p>
          <strong>Email:</strong> support@wiprotravel.com
        </p>
        <p>
          <strong>Phone:</strong> +91 7050746209
        </p>
        <p>
          <strong>Address:</strong> Bangalore, India
        </p>
      </div>
    </div>
  );
}

export default Contact;

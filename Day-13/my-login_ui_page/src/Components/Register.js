import React from "react";

function Register(props) {
  function handleRegister(event) {
    event.preventDefault();
    props.onRegisterSuccess(); // Switch to Login page
  }

  return React.createElement(
    "div",
    {
      className:
        "container d-flex justify-content-center align-items-center vh-100",
    },
    React.createElement(
      "form",
      {
        onSubmit: handleRegister,
        className: "border p-4 rounded shadow",
        style: { width: "350px" },
      },
      [
        React.createElement(
          "h3",
          { className: "text-center mb-4" },
          "Register"
        ),

        React.createElement("input", {
          type: "text",
          placeholder: "Full Name",
          className: "form-control mb-3",
        }),

        React.createElement("input", {
          type: "email",
          placeholder: "Email",
          className: "form-control mb-3",
        }),

        React.createElement("input", {
          type: "password",
          placeholder: "Password",
          className: "form-control mb-3",
        }),

        React.createElement(
          "button",
          { type: "submit", className: "btn btn-success w-100" },
          "Register"
        ),
      ]
    )
  );
}

export default Register;

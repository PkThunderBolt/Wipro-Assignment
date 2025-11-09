import React from "react";

function Login(props) {
  return React.createElement(
    "div",
    {
      className:
        "container d-flex justify-content-center align-items-center vh-100",
    },
    React.createElement(
      "form",
      { className: "border p-4 rounded shadow", style: { width: "350px" } },
      [
        React.createElement("h3", { className: "text-center mb-4" }, "Login"),

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
          { type: "submit", className: "btn btn-primary w-100 mb-3" },
          "Login"
        ),

        // Link to go to Register page
        React.createElement(
          "p",
          {
            className: "text-center text-primary",
            style: { cursor: "pointer" },
            onClick: props.onRegisterClick,
          },
          "Create New Account"
        ),
      ]
    )
  );
}

export default Login;

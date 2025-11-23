import React, { useRef, useState } from "react";

// This component demonstrates one controlled input for username
// and one uncontrolled input for password using useRef.
function LoginControlledUncontrolled() {
  // This state holds the current value of the username field.
  const [username, setUsername] = useState("");
  // This reference gives direct access to the password input element.
  const passwordRef = useRef(null);

  // This function handles form submission and logs both username and password.
  const handleSubmit = (event) => {
    event.preventDefault();
    // This reads the current value from the uncontrolled password field.
    const passwordValue = passwordRef.current ? passwordRef.current.value : "";

    console.log("Username (controlled):", username);
    console.log("Password (uncontrolled):", passwordValue);

    alert(
      "Username: " + username + "\nPassword: " + passwordValue
    );

    // This clears the inputs after submission so that the form looks fresh to the user.
    setUsername("");
    if (passwordRef.current) {
      passwordRef.current.value = "";
    }
  };

  return (
    <div>
      <h2>Login Form (Controlled and Uncontrolled)</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-field">
          <label htmlFor="username">Username</label>
          {/* This input is controlled because its value comes from state and is updated by setUsername. */}
          <input
            id="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter username"
          />
        </div>

        <div className="form-field">
          <label htmlFor="password">Password</label>
          {/* This input is uncontrolled because we do not store its value in React state. */}
          <input
            id="password"
            type="password"
            ref={passwordRef}
            placeholder="Enter password"
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginControlledUncontrolled;

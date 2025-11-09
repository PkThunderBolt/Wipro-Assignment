import React, { useState } from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  function goToLogin() {
    setShowLogin(true);
  }

  function goToRegister() {
    setShowLogin(false);
  }

  return React.createElement("div", null, [
    showLogin
      ? React.createElement(Login, { onRegisterClick: goToRegister })
      : React.createElement(Register, { onRegisterSuccess: goToLogin }),
  ]);
}

export default App;

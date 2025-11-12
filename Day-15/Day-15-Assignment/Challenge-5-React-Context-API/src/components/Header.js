import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{ padding: "10px 20px", borderBottom: "1px solid gray" }}>
      <h1>Theme Context Example</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;

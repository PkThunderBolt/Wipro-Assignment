import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer style={{ padding: "10px", borderTop: "1px solid gray" }}>
      <p>
        Footer — Theme: <strong>{theme}</strong>
      </p>
    </footer>
  );
}

export default Footer;

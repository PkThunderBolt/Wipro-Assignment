import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <main style={{ padding: "20px" }}>
      <p>
        The current theme is <strong>{theme}</strong>.
      </p>
      <p>
        This theme is applied globally using <code>React Context API</code>!
      </p>
    </main>
  );
}

export default Content;

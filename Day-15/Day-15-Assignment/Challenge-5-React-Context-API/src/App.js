import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const themeStyles = {
    backgroundColor: theme === "light" ? "#f9f9f9" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    transition: "all 0.3s ease",
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={themeStyles}>
        <Header />
        <Content />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

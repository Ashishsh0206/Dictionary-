import React, { useState } from "react";
import Dictionary from "./Dictionary";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode state
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#121212" : "#FFFFFF",
        color: darkMode ? "#FFFFFF" : "#000000",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <header style={{ padding: "20px" }}>
        <h1>Dictionary App</h1>
        <button
          onClick={toggleDarkMode}
          style={{
            padding: "10px 20px",
            fontSize: "10px",
            cursor: "pointer",
            backgroundColor: darkMode ? "#BB86FC" : "#007BFF",
            color: darkMode ? "#000000" : "#FFFFFF",
            border: "none",
            borderRadius: "16px",
          }}
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </header>
      <Dictionary />
    </div>
  );
}

export default App;

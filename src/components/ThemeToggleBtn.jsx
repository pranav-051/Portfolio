// ThemeToggleButton.js
import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeToggleBtn = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
    </button>
  );
};

export default ThemeToggleBtn;

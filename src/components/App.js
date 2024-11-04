import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State for toggling between light and dark modes
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function for dark mode
  function handleDarkModeToggle() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  // Dynamic class name based on the mode
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

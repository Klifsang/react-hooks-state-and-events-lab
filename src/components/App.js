// App.js
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [dark, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${dark ? "dark" : "light"}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;


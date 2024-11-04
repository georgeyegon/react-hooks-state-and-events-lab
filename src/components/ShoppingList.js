import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // State for the selected category filter
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Update selected category based on the dropdown selection
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Filter items based on the selected category
  const itemsToDisplay = selectedCategory === "All"
    ? items
    : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange} role="combobox">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

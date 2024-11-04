import React, { useState } from "react";

function Item({ name, category }) {
  // State for toggling item in/out of the cart
  const [isInCart, setIsInCart] = useState(false);

  // Toggle function for the cart status
  function handleAddToCart() {
    setIsInCart((prevInCart) => !prevInCart);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;

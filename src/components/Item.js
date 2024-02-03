// Item.js
import React, { useState } from "react";

const Item = ({ name, category }) => {
  const [inCart, setInCart] = useState(false);

  const addToCart = () => {
    setInCart(true);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart}>Add to Cart</button>
    </li>
  );
};

export default Item;

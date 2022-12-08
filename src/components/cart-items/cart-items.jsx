import React from "react";
import "./cart-items.scss";

const CartItem = ({ id, name, imageUrl, price, quantity }) => (
  <div className="dropdown-cart-items" key={id}>
    <img src={imageUrl} />
    {name.split(" ")[0]} {name.split(" ")[1]} x {quantity}
  </div>
);

export default CartItem;

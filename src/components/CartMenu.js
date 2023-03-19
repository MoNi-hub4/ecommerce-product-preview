import React, { useState } from "react";
import { Cart } from "../styledComponents/CartMenuStyle";

const CartMenu = () => {
  const [CartState, setCartState] = useState("close");

  const cartClick = () => {
    setCartState(CartState === "close" ? "open" : "close");
  };

  return <Cart prop={CartState}>Cart</Cart>;
};

export default CartMenu;

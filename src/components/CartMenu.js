import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Cart, CartHeader, CartBody } from "../styledComponents/CartMenuStyle";

const CartMenu = forwardRef((props, ref) => {
  const [CartState, setCartState] = useState("close");

  useImperativeHandle(ref, () => ({
    cartClick() {
      setCartState(CartState === "close" ? "open" : "close");
    },
  }));

  return (
    <Cart prop={CartState}>
      <CartHeader>Cart</CartHeader>
      <CartBody></CartBody>
    </Cart>
  );
});

export default CartMenu;

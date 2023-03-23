import React, { useState, forwardRef, useImperativeHandle } from "react";
import {
  Cart,
  CartHeader,
  CartBody,
  CartItemDescription,
  CartItem,
  CartItemImg,
  CartItemTitle,
  CartImgDiv,
  CartItemAmount,
  CartItemCount,
  CartItemDeleteButton,
  ButtonCheckout,
} from "../styledComponents/CartMenuStyle";
import CartImg from "./images/image-product-1-thumbnail.jpg";
import ItemDelete from "./images/icon-delete.svg";

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
      <CartBody>
        {
          props.count
        }
        {/* {
          
          <CartItem>
            <CartImgDiv>
              <CartItemImg src={CartImg}></CartItemImg>
            </CartImgDiv>
            <CartItemDescription>
              <CartItemTitle>Fall Limited Edition Sneakers</CartItemTitle>
              <CartItemAmount>
                $125 <CartItemCount>x 3</CartItemCount>{" "}
              </CartItemAmount>

              <CartItemDeleteButton src={ItemDelete}></CartItemDeleteButton>
            </CartItemDescription>
          </CartItem>
        } */}

        <ButtonCheckout>Checkout</ButtonCheckout>
      </CartBody>
    </Cart>
  );
});

export default CartMenu;

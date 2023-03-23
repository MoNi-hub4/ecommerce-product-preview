import React from "react";
import plusImg from "./images/icon-plus.svg";
import minusImg from "./images/icon-minus.svg";
import IconCart from "./images/icon-cart-white.svg";
import {
  Amount,
  AmountDiv,
  AddtoCart,
  Callout,
  Description,
  DescriptionBox,
  IconMinus,
  IconPlus,
  PriceBefore,
  PriceBox,
  PriceNow,
  SubTitle,
  Title,
  CartImage,
  BottomBox,
} from "../styledComponents/ProductDescriptionStyle";
import CartImg from "./images/image-product-1-thumbnail.jpg";
import ItemDelete from "./images/icon-delete.svg";

import {
  CartItemDescription,
  CartItem,
  CartItemImg,
  CartItemTitle,
  CartImgDiv,
  CartItemAmount,
  CartItemCount,
  CartItemDeleteButton,
} from "../styledComponents/CartMenuStyle";

const ProductDescription = (props) => {
  return (
    <DescriptionBox>
      <SubTitle>Sneaker Company</SubTitle>
      <Title>Fall Limited Edition Sneakers</Title>
      <Description>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </Description>
      <PriceBox>
        <PriceNow>$125.00</PriceNow>
        <Callout>50%</Callout>
        <PriceBefore>$250.00</PriceBefore>
      </PriceBox>
      <BottomBox>
        <AmountDiv>
          <IconMinus src={minusImg}></IconMinus>
          <Amount>0</Amount>
          <IconPlus src={plusImg}></IconPlus>
        </AmountDiv>
        <AddtoCart
          onClick={() => {
            props.setCount([
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
              </CartItem>,
            ]);
          }}
        >
          <CartImage src={IconCart}></CartImage> Add to cart
        </AddtoCart>
      </BottomBox>
    </DescriptionBox>
  );
};

export default ProductDescription;

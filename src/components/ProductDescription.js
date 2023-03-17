import React from "react";
import plusImg from "./images/icon-plus.svg";
import minusImg from "./images/icon-minus.svg";
import IconCart from './images/icon-cart-white.svg';
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
  CartImg,
} from "../styledComponents/ProductDescriptionStyle";


const ProductDescription = () => {
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
      <AmountDiv>
        <IconMinus src={minusImg}></IconMinus>
        <Amount>0</Amount>
        <IconPlus src={plusImg}></IconPlus>
      </AmountDiv>
      <AddtoCart><CartImg src={IconCart}></CartImg> Add to cart</AddtoCart>
    </DescriptionBox>
  );
};

export default ProductDescription;

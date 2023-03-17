import React from "react";
import {
  Description,
  DescriptionBox,
  SubTitle,
  Title,
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
    </DescriptionBox>
  );
};

export default ProductDescription;

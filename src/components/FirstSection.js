import React from "react";
import { FirstSectionContainer } from "../styledComponents/FirstSectionStyle";
import ImageSlider from "./ImageSlider";
import ProductDescription from "./ProductDescription";

const FirstSection = (props) => {
  return (
    <FirstSectionContainer>
      <ImageSlider />
      <ProductDescription
  
        count={props.count}
        setCount={props.setCount}
        num = {props.num}
        setnum = {props.setnum}
        setCartCount = {props.setCartCount}
      />
    </FirstSectionContainer>
  );
};

export default FirstSection;

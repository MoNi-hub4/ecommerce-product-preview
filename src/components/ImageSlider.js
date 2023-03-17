import React from "react";
import {
  Image,
  LeftArrowContainer,
  RightArrowContainer,
  LeftArrow,
  RightArrow,
  SliderSection,
} from "../styledComponents/ImageSliderStyle";
import { ImageList } from "./ImageList";
import IconNext from "./images/icon-next.svg";
import IconPrevious from "./images/icon-previous.svg";

export default function ImageSlider() {
  return (
    <SliderSection>
      <Image></Image>
      <LeftArrowContainer>
        <LeftArrow src={IconPrevious}></LeftArrow>
      </LeftArrowContainer>
      <RightArrowContainer>
        <RightArrow src={IconNext}></RightArrow>
      </RightArrowContainer>
    </SliderSection>
  );
}

import React, {useState} from "react";
import {
  Image,
  LeftArrowContainer,
  RightArrowContainer,
  LeftArrow,
  RightArrow,
  SliderSection,
} from "../styledComponents/ImageSliderStyle";
import ImageList from "./ImageList";
import IconNext from "./images/icon-next.svg";
import IconPrevious from "./images/icon-previous.svg";

export default function ImageSlider() {
    const [Imageid, setImageid] = useState(0);
    console.log(ImageList[0])


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

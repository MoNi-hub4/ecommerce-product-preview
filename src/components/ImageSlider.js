import React, {useState} from "react";
// import Image1 from './images/image-product-2.jpg'
import {
  Image,
  LeftArrowContainer,
  RightArrowContainer,
  LeftArrow,
  RightArrow,
  SliderSection,
} from "../styledComponents/ImageSliderStyle";
import {ImageList} from "./ImageList";
import IconNext from "./images/icon-next.svg";
import IconPrevious from "./images/icon-previous.svg";

export default function ImageSlider() {
    const [Img , setImg] = useState(0)

    const nextImg = () => {
        setImg(Img < 3 ? Img + 1 : 0);
    }

    const prevImg = () => {
        setImg(Img === 0 ? 3 : Img - 1);
    }


  return (
    <SliderSection>
      <Image src={ImageList[Img].url}></Image>
      <LeftArrowContainer onClick={prevImg}>
        <LeftArrow src={IconPrevious}></LeftArrow>
      </LeftArrowContainer>
      <RightArrowContainer onClick={nextImg}>
        <RightArrow src={IconNext}></RightArrow>
      </RightArrowContainer>
    </SliderSection>
  );
}

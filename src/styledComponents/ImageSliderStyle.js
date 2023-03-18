import styled from "styled-components";

export const SliderSection = styled.div`
  width: 100%;
  height: 35vh;
  /* background: cyan; */
  position: relative;

  @media (min-width: 968px) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 70%;
    height: auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (min-width: 968px) {
    border-radius: 20px;
    width: 70%;
  }
`;

export const LeftArrowContainer = styled.div`
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translate(50%, -50%);
  left: 0px;
  top: 50%;

  @media (min-width: 968px) {
    display: none;
  }
`;

export const LeftArrow = styled.img`
  margin-right: 5px;
`;

export const RightArrowContainer = styled.div`
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translate(-50%, -50%);
  right: 0px;
  top: 50%;

  @media (min-width: 968px) {
    display: none;
  }
`;

export const RightArrow = styled.img``;

export const ImageThumbnailSection = styled.div`
  display: none;
  @media (min-width: 968px) {
    width: 70%;
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-top: 20px;
    cursor: pointer;
  }
`;

export const ImgThumb = styled.img`
  @media (min-width: 968px) {
    width: 90px;
    /* height: auto; */
    border-radius: 15px;
  }
`;

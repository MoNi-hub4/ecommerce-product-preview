import styled from "styled-components";

export const SliderSection = styled.div`
  width: 100%;
  height: 350px;
  /* background: cyan; */
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
`;

export const RightArrow = styled.img``;

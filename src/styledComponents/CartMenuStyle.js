import styled from "styled-components";

export const Cart = styled.div`
  background: #fff;
  width: 95vw;
  height: 200px;
  border-radius: 10px;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  z-index: 98;
  display: ${(props) => props.prop === 'open' ? 'block' : 'none'};

  @media (min-width :968px){
    width: 400px;
    z-index: 99;
    margin: 0;
    left: 80%;
  }
`;

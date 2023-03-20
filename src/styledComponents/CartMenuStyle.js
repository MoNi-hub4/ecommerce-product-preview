import styled from "styled-components";

export const Cart = styled.div`
  background: #fff;
  width: 95vw;
  height: auto;
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
  display: ${(props) => (props.prop === "open" ? "block" : "none")};

  @media (min-width: 968px) {
    width: 400px;
    z-index: 99;
    margin: 0;
    left: 80%;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 100%;
  height: 70px;
  /* background:cyan; */
  border-bottom: 2px solid hsl(223, 64%, 98%);
  font-weight: 800;
  font-size: 18px;
`;

export const CartBody = styled.div`
  /* height: auto; */
`;
export const CartItem = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  gap: 20px;
`;

export const CartImgDiv = styled.div`
  flex: 1;
`;

export const CartItemImg = styled.img`
  width: 100%;
  border-radius: 5px;
`;
export const CartItemDescription = styled.div`
  flex: 5;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const CartItemTitle = styled.span`
  display: block;
  font-size: 17px;
  font-weight: 500;
  color: hsl(219, 9%, 45%);
`;
export const CartItemAmount = styled.span`
  font-size: 17px;
  font-weight: 500;
  color: hsl(219, 9%, 45%);
`;

export const CartItemCount = styled.span``;

export const CartItemDeleteButton = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
`;

export const ButtonCheckout = styled.button`
  all: unset;
`;

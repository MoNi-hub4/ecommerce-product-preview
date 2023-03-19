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
`

export const CartBody = styled.div`
/* height: auto; */


`
export const CartItem = styled.div`

`

export const CartItemImg = styled.img`

`
export const CartItemDescription  = styled.div``

export const CartItemTitle = styled.span`
`
export const CartItemAmount = styled.span``

export const CartItemCount = styled.span`
`

export const CartItemDeleteButton = styled.img``

export const ButtonCheckout = styled.button`
  all:unset;
`
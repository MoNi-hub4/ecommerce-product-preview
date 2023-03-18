import styled from "styled-components";

export const DescriptionBox = styled.div`
  padding: 20px;

  @media (min-width:968px){
    flex:1;
    padding: 60px;
  }
`;

export const SubTitle = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 800;
  color: hsl(26, 100%, 55%);
  margin-bottom: 15px;
`;

export const Title = styled.h1`
  line-height: 1.1;
  font-weight: 700;
  margin-bottom: 15px;
  color: hsl(220, 13%, 13%);
`;

export const Description = styled.span`
  line-height: 1.6;
  color: hsl(219, 9%, 45%);
`;

export const PriceBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-top: 20px;
`;

export const PriceNow = styled.p`
  margin-right: 20px;
  font-size: 30px;
  font-weight: 700;
`;
export const Callout = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  background: hsl(25, 100%, 94%);
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  font-size: 14px;
  color: hsl(26, 100%, 55%);
  font-weight: 800;
`;

export const PriceBefore = styled.p`
  position: absolute;
  right: 0;
  font-size: 15px;
  color: hsl(219, 9%, 45%);
  font-weight: 500;
`;
export const AmountDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: hsl(223, 64%, 98%);
  height: 60px;
  border-radius: 10px;
  margin-top: 25px;

  @media (min-width:968px){
    width: 100%;
    margin: 0;
    margin-right: 20px;
  }
`;
export const IconPlus = styled.img`
  margin-right: 20px;
`;
export const IconMinus = styled.img`
  margin-left: 20px;
`;
export const Amount = styled.span`
  font-weight: 700;
`;

export const AddtoCart = styled.button`
    all: unset;
    height: 60px;
    background: hsl(26, 100%, 55%);
    width: 100%;
    border-radius: 10px;
    margin-top: 15px;
    text-align: center;
    color: hsl(0, 0%, 100%);
    font-weight: 600;
    letter-spacing: 0.5px;
    box-shadow: rgba(255, 125, 26, 0.25) 0px 15px 30px 5px;

    @media (min-width:968px){
      margin: 0;
    }
`;

export const CartImg = styled.img`
    width: 15px;
    height: 15px;
    margin-right: 10px;
    
`

export const BottomBox = styled.div`
  @media (min-width:968px){
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }
`
import styled from "styled-components";

export const NavContainer = styled.div`
  position: relative;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  z-index: 99;

  @media (min-width: 968px){
    height: 90px;
    border-bottom: 2px solid hsl(223, 64%, 98%);
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const FirstContainer = styled.div`
  display: flex;
  align-items: center;

`;

export const SecondContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const MenuButton = styled.img`
  /* display: inline-block; */
  margin-top: 2px;
  margin-left: 10px;
  height: 15px;
  width: 15px;
  cursor: pointer;

  @media (min-width: 968px) {
    display: none;
  }
`;
export const LogoName = styled.img`
  /* display: block; */
  width: 100%;
  margin-left: 20px;

  @media (min-width:968px){
    margin-left: 0;
  }
`;

export const MenuSection = styled.div`
  background: cyan;
  height: 100vh;
  width: 65%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: ${(props) => (props.prop === "open" ? "0" : "-800px")};

  @media (min-width: 968px){
    width: auto;
    height: auto;
    top: auto;
    position: static;
    margin-top: 5px;
    margin-left: 40px;
    /* left: 200px; */
    background: none;
    flex-direction: row;
  }
`;

export const MenuClose = styled.img`
  height: 15px;
  width: 15px;
  margin-bottom: 35px;

  @media (min-width: 968px) {
    display: none;
  }
`;

export const MenuItem = styled.a`
    text-decoration: none;
    margin-top: 10px;
    margin-bottom: 15px;
    font-weight: 800;

    @media (min-width: 968px) {
    margin-right: 40px;
    font-weight: 500;
    color: hsl(219, 9%, 45%);
  }
`;

export const CartIcon = styled.img`
  margin-right: 25px;

  @media (min-width:968px){
    margin-right: 35px;
    cursor: pointer;
  }
`;

export const UserProfile = styled.img`
  margin-right: 15px;
  height: 25px;
  width: 25px;

  @media (min-width: 968px){
    margin-right: 0;
    height: 40px;
    width: 40px;
  }
`;

import styled from "styled-components";

export const NavContainer = styled.div`
  position: relative;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
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
`;
export const LogoName = styled.img`
  /* display: block; */
  width: 100%;
  margin-left: 20px;
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
  left: ${(props) => (props.prop === "open" ? "0" : "-500px")};
`;

export const MenuClose = styled.img`
  height: 15px;
  width: 15px;
  margin-bottom: 35px;
`;

export const MenuItem = styled.a`
    text-decoration: none;
    margin-top: 10px;
    margin-bottom: 15px;
    font-weight: 800;
`;

export const CartIcon = styled.img`
  margin-right: 25px;
`;

export const UserProfile = styled.img`
  margin-right: 15px;
  height: 25px;
  width: 25px;
`;

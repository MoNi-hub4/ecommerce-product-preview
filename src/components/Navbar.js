import React, { useState , useRef } from "react";
import MenuImg from "./images/icon-menu.svg";
import CartImg from "./images/icon-cart.svg";
import UserImg from "./images/image-avatar.png";
import CartMenu  from './CartMenu'
import LogoImg from "./images/logo.svg";
import CloseImg from "./images/icon-close.svg";
import {
  CartIcon,
  FirstContainer,
  LogoName,
  MenuButton,
  MenuItem,
  MenuClose,
  NavContainer,
  SecondContainer,
  MenuSection,
  UserProfile,
} from "../styledComponents/NavbarStyle";

export default function Navbar(props) {
  const menuItems = ["Collections", "Men", "Women", "About", "Contact"];

  const [State, setState] = useState("close");

  const ChildRef = useRef();

  const openMenu = () => {
    setState("open");
  };

  const closeMenu = () => {
    setState("close");
  }

  //Create Image Component switching src with arrow buttons

  return (
      <NavContainer>
        <FirstContainer>
          <MenuButton src={MenuImg} onClick={openMenu}></MenuButton>
          <LogoName src={LogoImg}></LogoName>
          <MenuSection prop={State}>
            <MenuClose src={CloseImg} onClick={closeMenu}></MenuClose>
            {menuItems.map((items, id) => (
              <MenuItem href="/" key={id}>{items}</MenuItem>
            ))}
          </MenuSection>
        </FirstContainer>
        <SecondContainer>
          <CartIcon src={CartImg} onClick ={ () => ChildRef.current.cartClick()} ></CartIcon>
          <UserProfile src={UserImg}></UserProfile>
        </SecondContainer>
        <CartMenu ref={ChildRef} count = {props.count} />
      </NavContainer>
  );
}

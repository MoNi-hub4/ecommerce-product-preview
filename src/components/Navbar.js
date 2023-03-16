import React, { useState } from "react";
import MenuImg from "./images/icon-menu.svg";
import CartImg from "./images/icon-cart.svg";
import UserImg from "./images/image-avatar.png";
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

export default function Navbar() {
  const menuItems = ["Collections", "Men", "Women", "About", "Contact"];

  const [State, setState] = useState("close");

  const openMenu = () => {
    setState("open");
  };

  const closeMenu = () => {
    setState("close");
  }

  //Create Image Component switching src with arrow buttons

  return (
    <div>
      <NavContainer>
        <FirstContainer>
          <MenuButton src={MenuImg} onClick={openMenu}></MenuButton>
          <LogoName src={LogoImg}></LogoName>
          <MenuSection prop={State}>
            <MenuClose src={CloseImg} onClick={closeMenu}></MenuClose>
            {menuItems.map((items, id) => (
              <MenuItem key={id}>{items}</MenuItem>
            ))}
          </MenuSection>
        </FirstContainer>
        <SecondContainer>
          <CartIcon src={CartImg}></CartIcon>
          <UserProfile src={UserImg}></UserProfile>
        </SecondContainer>
      </NavContainer>
    </div>
  );
}

import React, { useState } from "react";
import FirstSection from "./FirstSection";
import Navbar from "./Navbar";
import CartImg from "./images/image-product-1-thumbnail.jpg";
import ItemDelete from "./images/icon-delete.svg";

import {
  CartItemDescription,
  CartItem,
  CartItemImg,
  CartItemTitle,
  CartImgDiv,
  CartItemAmount,
  CartItemCount,
  CartItemDeleteButton,
} from "../styledComponents/CartMenuStyle";

export default function Home() {
  const [Count, setCount] = useState([]);
  const [Num, setNum] = useState(0);
  const [CartCount, setCartCount] = useState(0);

  return (
    <div className="Home">
      <Navbar count={Count} num={CartCount} />
      <FirstSection
        num={Num}
        setnum={setNum}
        count={Count}
        setCount={setCount}
        setCartCount = {setCartCount}
      />
    </div>
  );
}

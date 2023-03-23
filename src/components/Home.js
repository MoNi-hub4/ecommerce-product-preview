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
  CartItemDeleteButton
  
} from "../styledComponents/CartMenuStyle";

export default function Home() {
  const [Count, setCount] = useState([
    
  ]);
  console.log(Count);

  return (
    <div className="Home">
      <Navbar count={Count} />
      <FirstSection count={Count} setCount={setCount} />
    </div>
  );
}

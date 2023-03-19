import React, { useState ,forwardRef, useImperativeHandle } from "react";
import { Cart } from "../styledComponents/CartMenuStyle";




const CartMenu = forwardRef((props,ref) => {
  const [CartState, setCartState] = useState("close");

  useImperativeHandle(ref , () => ({
    cartClick(){
      setCartState(CartState === 'close' ? 'open' : 'close')
    }
    
  }))

 

  return <Cart prop={CartState}>Cart</Cart>;
})

export default CartMenu;

import React from "react";
import { useState } from "react";

function String() {
  const lists = 12;
  
  const [Item, setItem] = useState([]);
  
  const addItem = () => {
    setItem([...Item, lists]);
  }


  // Fix this =====> ideas = filter array and use set function to set the state
  
  const removeItem = () => {
    let size = Item.length;
    size--;
    setItem((current) => current.filter(items => Item.length = size));
  }
  


  return (
    <div>
      <ul>
        {Item.map( (Items, key) =><li key={key} >{Items}</li>)}  
      </ul>
      <button onClick={addItem} >Add list</button>
      <button onClick={removeItem}>Remove Item</button>
      <h2>{JSON.stringify(Item)}</h2>
    </div>
  );
}

export default String;

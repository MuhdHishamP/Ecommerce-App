import React, { createContext, useState } from "react";



export const ItemContext = createContext(null);
// const getdefaultCart = () => {};

export default ItemContextProvider = (props) => {
  const [cartItems, setcartItems] = useState({});

  return <ItemContext.Provider>{props.children}</ItemContext.Provider>;
};

import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
    console.log(product);
  }

  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};
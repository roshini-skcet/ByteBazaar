import React, { createContext, useState, useContext } from 'react';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [shopItems, setShopItems] = useState([]);

  const addToShop = (item) => {
    setShopItems(prevItems => [...prevItems, item]);
  };

  return (
    <ShopContext.Provider value={{ shopItems, addToShop }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);

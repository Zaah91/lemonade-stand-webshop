'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Product = { id: string; name: string; price: number; };

type ShopContextType = {
  profit: number;
  product: Product[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
};

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [profit, setProfit] = useState(0);
  const [product, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => setCart((prev) => [...prev, product]);
  const clearCart = () => setCart([]);

  return (
    <ShopContext.Provider value={{ profit, product, addToCart, clearCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error('useShop must be used within a ShopProvider');
  return context;
};
'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { CartItem } from './types';
import { getCart, addToCart as addToCartUtil, removeFromCart as removeFromCartUtil, updateQuantity as updateQuantityUtil, getCartTotal as getCartTotalUtil } from './cart';

interface CartContextType {
  cart: CartItem[];
  total: number;
  addToCart: (product: CartItem['product'], quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCart(getCart());
    setTotal(getCartTotalUtil());
  }, []);

  const updateCartState = () => {
    setCart(getCart());
    setTotal(getCartTotalUtil());
  };

  const addToCart = (product: CartItem['product'], quantity: number = 1) => {
    addToCartUtil(product, quantity);
    updateCartState();
  };

  const removeFromCart = (productId: string) => {
    removeFromCartUtil(productId);
    updateCartState();
  };

  const updateQuantity = (productId: string, quantity: number) => {
    updateQuantityUtil(productId, quantity);
    updateCartState();
  };

  const clearCart = () => {
    localStorage.setItem('shopping-cart', JSON.stringify([]));
    updateCartState();
  };

  return (
    <CartContext.Provider value={{ cart, total, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
import { CartItem, Product } from './types';

const CART_KEY = 'shopping-cart';

export const getCart = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (product: Product, quantity: number = 1) => {
  const cart = getCart();
  const existingItem = cart.find(item => item.product.id === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const removeFromCart = (productId: string) => {
  const cart = getCart().filter(item => item.product.id !== productId);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const updateQuantity = (productId: string, quantity: number) => {
  const cart = getCart();
  const item = cart.find(item => item.product.id === productId);
  if (item) {
    item.quantity = quantity;
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
};

export const clearCart = () => {
  localStorage.setItem(CART_KEY, JSON.stringify([]));
};

export const getCartTotal = (): number => {
  return getCart().reduce((total, item) => total + (item.product.price * item.quantity), 0);
};
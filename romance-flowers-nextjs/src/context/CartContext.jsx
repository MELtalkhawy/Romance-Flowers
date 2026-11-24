'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('romance_flowers_cart');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem('romance_flowers_cart', JSON.stringify(items));
    } catch {
      // Ignore storage errors
    }
  }, [items]);

  const addItem = (product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const clearCart = () => setItems([]);

  const { totalCount, subtotal } = useMemo(() => {
    return items.reduce(
      (acc, item) => ({
        totalCount: acc.totalCount + item.quantity,
        subtotal: acc.subtotal + item.price * item.quantity,
      }),
      { totalCount: 0, subtotal: 0 }
    );
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        setIsOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addItem,
        removeItem,
        updateQty,
        clearCart,
        totalCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return ctx;
}

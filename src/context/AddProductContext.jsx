import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    let stored = []
    try {
      const data = localStorage.getItem("cart");
      stored = data ? JSON.parse(data) : [];
    }
    catch (error) {
      console.error(error);
      stored = []
    }
    setCart(stored)
  }, []);
  const updatedCart = (updated) => {
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));

  };
  const addItemToCart = (id) => {
    const existing = cart.find((item) => item.id === id);
    let updated;
    if (existing) {
      updated = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updated = [...cart, { id, quantity: 1 }];
    }
    updatedCart(updated);
  };
  const decreaseQty = (id) => {
    const existing = cart.find((item) => item.id === id);
    if (!existing) return;
    let updated;
    if (existing.quantity === 1) {
      updated = cart.filter((item) => item.id !== id);
    } else {
      updated = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    }
    updatedCart(updated);
  };
  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    updatedCart(updated);
  };
  const clearCart = ()=>{
    setCart([],
      localStorage.setItem('cart', JSON.stringify([]))
    )
  }
  return (
    <CartContext.Provider
      value={{ cart, addItemToCart, decreaseQty, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

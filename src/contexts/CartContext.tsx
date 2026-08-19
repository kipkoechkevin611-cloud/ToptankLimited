"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/lib/products";

interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

interface CartContextType {
  items: CartItem[];
  orderNumber: string;
  addToCart: (product: Product, quantity?: number, selectedColor?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  generateOrderNumber: () => void;
  getWhatsAppMessage: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [orderNumber, setOrderNumber] = useState<string>("");

  const generateOrderNumber = () => {
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    setOrderNumber(`TT-${timestamp}-${random}`);
  };

  const getWhatsAppMessage = () => {
    if (items.length === 0) return "";
    
    let message = `*TopTank Order #${orderNumber}*\n\n`;
    message += `*Order Details:*\n`;
    
    items.forEach((item, index) => {
      const colorInfo = item.selectedColor ? ` (${item.selectedColor})` : "";
      message += `${index + 1}. ${item.product.name}${colorInfo}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: KSh ${item.product.price.toLocaleString()} each\n`;
      message += `   Subtotal: KSh ${(item.product.price * item.quantity).toLocaleString()}\n\n`;
    });
    
    const total = getCartTotal();
    message += `*Total: KSh ${total.toLocaleString()}*\n\n`;
    message += `Please confirm my order. Free delivery nationwide.`;
    
    return encodeURIComponent(message);
  };

  const addToCart = (product: Product, quantity: number = 1, selectedColor?: string) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => 
        item.product.id === product.id && 
        item.selectedColor === selectedColor
      );
      
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...prevItems, { product, quantity, selectedColor }];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => total + (item.product.salePrice || item.product.price) * item.quantity, 0);
  };

  const getCartCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        orderNumber,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        generateOrderNumber,
        getWhatsAppMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

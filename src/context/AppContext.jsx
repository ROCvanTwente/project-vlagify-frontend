/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';
import { authService } from '../services/authService';

const AppContext = createContext(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  // Initialize user from localStorage using lazy initialization
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    const token = authService.getToken();
    
    if (savedUser && token) {
      try {
        const parsedUser = JSON.parse(savedUser);
        return parsedUser;
      } catch (error) {
        console.error('Failed to parse saved user:', error);
        localStorage.removeItem('user');
      }
    }
    return null;
  });

  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  const login = async (email, password) => {
    const result = await authService.login(email, password);
    
    if (result.success && result.user) {
      setUser(result.user);
      // Save user to localStorage for persistence
      localStorage.setItem('user', JSON.stringify(result.user));
    }
    return result;
  };

  const register = async (userData) => {
    const result = await authService.register(userData);
    
    if (result.success && result.user) {
      setUser(result.user);
      // Save user to localStorage for persistence
      localStorage.setItem('user', JSON.stringify(result.user));
    }
    return result;
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    // Remove user from localStorage on logout
    localStorage.removeItem('user');
  };

  const updateProfile = (data) => {
    if (user) {
      setUser({ ...user, ...data });
    }
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartTotal,
        cartItemCount,
        user,
        login,
        register,
        logout,
        updateProfile
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
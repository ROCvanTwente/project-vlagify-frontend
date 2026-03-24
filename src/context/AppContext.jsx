/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';

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
  const [user, setUser] = useState(null);

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
    // Mock login - in real app, this would call an API
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Demo users
    if (email === 'admin@vlagify.nl' && password === 'admin') {
      setUser({
        id: '1',
        email: 'admin@vlagify.nl',
        firstName: 'Admin',
        lastName: 'User',
        name: 'Admin User',
        role: 'admin',
        address: 'Hoofdstraat 1',
        postalCode: '1234 AB',
        city: 'Amsterdam',
        country: 'Nederland',
        phone: '0612345678'
      });
      return true;
    } else if (email === 'user@vlagify.nl' && password === 'user') {
      setUser({
        id: '2',
        email: 'user@vlagify.nl',
        firstName: 'Jan',
        middleName: 'de',
        lastName: 'Vries',
        name: 'Jan de Vries',
        role: 'user',
        address: 'Kerkstraat 10',
        postalCode: '5678 CD',
        city: 'Rotterdam',
        country: 'Nederland',
        phone: '0687654321'
      });
      return true;
    }
    return false;
  };

  const register = async (userData) => {
    // Mock registration
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser({
      id: Date.now().toString(),
      email: userData.email,
      firstName: userData.firstName,
      middleName: userData.middleName,
      lastName: userData.lastName,
      name: `${userData.firstName} ${userData.middleName ? userData.middleName + ' ' : ''}${userData.lastName}`,
      role: 'user',
      phone: userData.phone,
      address: userData.address,
      postalCode: userData.postalCode,
      city: userData.city,
      country: userData.country
    });
    return true;
  };

  const logout = () => {
    setUser(null);
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
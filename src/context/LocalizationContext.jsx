/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';
import { en } from '../../i18n/locales/en';
import { nl } from '../../i18n/locales/nl';
import { de } from '../../i18n/locales/de';
import { fr } from '../../i18n/locales/fr';

const translations = {
  en,
  nl,
  de,
  fr
};

const LocalizationContext = createContext(undefined);

const exchangeRates = {
  EUR: 1,
  USD: 1.08,
  GBP: 0.85
};

const currencySymbols = {
  EUR: '€',
  USD: '$',
  GBP: '£'
};

export const LocalizationProvider = ({ children }) => {
  const [language, setLanguage] = useState('nl');
  const [currency, setCurrency] = useState('EUR');
  const [measurementSystem, setMeasurementSystem] = useState('metric');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const convertPrice = (price) => {
    const convertedAmount = price * exchangeRates[currency];
    return {
      amount: convertedAmount,
      symbol: currencySymbols[currency]
    };
  };

  const convertDimensions = (width, height, unit) => {
    if (measurementSystem === 'metric') {
      if (unit === 'cm') {
        return `${width} × ${height} cm`;
      } else {
        return `${width} × ${height} m`;
      }
    } else {
      // Convert to inches/feet
      let widthInInches = unit === 'cm' ? width / 2.54 : width * 100 / 2.54;
      let heightInInches = unit === 'cm' ? height / 2.54 : height * 100 / 2.54;
      
      if (widthInInches >= 12 && heightInInches >= 12) {
        const widthFeet = (widthInInches / 12).toFixed(1);
        const heightFeet = (heightInInches / 12).toFixed(1);
        return `${widthFeet} × ${heightFeet} ft`;
      } else {
        return `${widthInInches.toFixed(1)} × ${heightInInches.toFixed(1)} in`;
      }
    }
  };

  return (
    <LocalizationContext.Provider
      value={{
        language,
        setLanguage,
        currency,
        setCurrency,
        measurementSystem,
        setMeasurementSystem,
        t,
        convertPrice,
        convertDimensions
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within LocalizationProvider');
  }
  return context;
};

// Helper hooks for components
export const useLanguage = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLanguage must be used within LocalizationProvider');
  }
  const { language, setLanguage, t } = context;
  return { language, setLanguage, t };
};

export const useCurrency = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useCurrency must be used within LocalizationProvider');
  }
  const { currency, setCurrency, convertPrice } = context;
  return { 
    currency, 
    setCurrency,
    convertPrice: (price) => convertPrice(price).amount,
    formatPrice: (price) => {
      const { amount, symbol } = convertPrice(price);
      return `${symbol}${amount.toFixed(2)}`;
    }
  };
};

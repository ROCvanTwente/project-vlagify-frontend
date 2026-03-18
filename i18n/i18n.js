import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import { en } from './locales/en';
import { nl } from './locales/nl';
import { de } from './locales/de';
import { fr } from './locales/fr';

const resources = {
  en: { translation: en },
  nl: { translation: nl },
  de: { translation: de },
  fr: { translation: fr },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: resources, // Plug it in here
    lng: 'nl', // Default language
    fallbackLng: 'nl', // Default language
    interpolation: {
      escapeValue: false, // Not needed for react as it escapes by default
    }
  });

export default i18n;
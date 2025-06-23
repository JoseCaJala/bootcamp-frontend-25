/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const languages = ['JavaScript', 'Python'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleLanguage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  const value = {
    language: languages[currentIndex],
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

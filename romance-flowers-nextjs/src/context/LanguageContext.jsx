'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ar');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('romance_flowers_lang');
      if (saved === 'ar' || saved === 'en') {
        setLang(saved);
      }
    } catch {
      // Ignore storage access errors in restricted environments
    }
  }, []);

  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem('romance_flowers_lang', lang);
    } catch {
      // Ignore storage access errors
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const isAr = lang === 'ar';
  const currency = isAr ? 'ر.س' : 'SAR';
  const t = (arText, enText) => (isAr ? arText : enText);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLanguage,
        isAr,
        dir: isAr ? 'rtl' : 'ltr',
        currency,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}

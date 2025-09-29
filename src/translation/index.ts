import { useState, useEffect, useCallback } from 'react';
import type { TranslationStructure, SupportedLanguages, TranslationKey } from './translationTyping.ts';

import it from './italian.ts';
import es from './spanish.ts';

const translations: Record<SupportedLanguages, TranslationStructure> = {
  it,
  es
};

//Detect browser language
const detectBrowserLanguage = (): SupportedLanguages => {
  if (typeof window === 'undefined') return 'it'; // SSR fallback
  
  //Get browser language (first preference)
  const browserLang = navigator.language || navigator.languages?.[0] || 'it';
  
  //Extract language code (like 'it-IT'->'it', 'en-US'->'en')
  const langCode = browserLang.toLowerCase().split('-')[0];
  
  //Return supported language or default to Italian
  return langCode === 'es' ? 'es' : 'it';
};

//Global state - shared across all components
let globalLanguage: SupportedLanguages = (() => {
  if (typeof window === 'undefined') return 'it';
  
  const saved = localStorage.getItem('preferred-language');
  
  //If user has a saved preference, use it
  if (saved === 'it' || saved === 'es') {
    return saved as SupportedLanguages;
  }
  
  //Otherwise, detect from browser
  return detectBrowserLanguage();
})();

const listeners: Set<() => void> = new Set();

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguages>(globalLanguage);

  //Subscribe to global language changes
  useEffect(() => {
    const updateListener = () => setCurrentLanguage(globalLanguage);
    listeners.add(updateListener);
    
    return () => {
      listeners.delete(updateListener);
    };
  }, []);

  const setLanguage = useCallback((lang: SupportedLanguages) => {
    globalLanguage = lang;
    
    //Save to localStorage
    localStorage.setItem('preferred-language', lang);
    
    //Notify all components
    listeners.forEach(listener => listener());
  }, []);

  const t = useCallback((key: TranslationKey): string => {
    const keys = key.split('.');
    let result: any = translations[currentLanguage];
    
    for (const k of keys) {
      if (result && typeof result === 'object') {
        result = result[k];
      } else {
        return key; //Early return for invalid paths
      }
    }
    
    return typeof result === 'string' ? result : key;
  }, [currentLanguage]);

  return {
    currentLanguage,
    setLanguage,
    t,
  };
}
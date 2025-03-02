"use client";

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang: 'en' | 'tr') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="bg-muted/50 hover:bg-muted transition-colors duration-300 rounded-full p-2 flex items-center gap-2 text-sm"
        aria-expanded={isOpen}
        aria-label={t('language')}
      >
        <span className="font-semibold">{language === 'tr' ? 'TR' : 'EN'}</span>
        <span className="hidden sm:inline">{language === 'tr' ? 'Türkçe' : 'English'}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-background border border-muted rounded-md shadow-lg py-1 z-50 origin-top-right animate-scale-in">
          <button
            onClick={() => changeLanguage('en')}
            className={`flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-muted/50 transition-colors ${language === 'en' ? 'text-primary' : ''}`}
          >
            <span className="font-semibold">EN</span>
            <span>English</span>
            {language === 'en' && (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-auto text-primary"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            )}
          </button>
          <button
            onClick={() => changeLanguage('tr')}
            className={`flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-muted/50 transition-colors ${language === 'tr' ? 'text-primary' : ''}`}
          >
            <span className="font-semibold">TR</span>
            <span>Türkçe</span>
            {language === 'tr' && (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-auto text-primary"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
} 
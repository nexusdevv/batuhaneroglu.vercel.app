"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";
import TextTransition from "./TextTransition";

export default function Navigation() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // İlk yükleme kontrolü
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-bold tracking-tight"
          >
            Hydra
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/#hakkimda" 
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <TextTransition content={t('nav.about')} />
            </Link>
            <Link 
              href="/#projeler" 
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <TextTransition content={t('nav.projects')} />
            </Link>
            <Link 
              href="/#iletisim" 
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <TextTransition content={t('nav.contact')} />
            </Link>
            
            <LanguageSwitcher />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 ml-3 text-foreground focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-scale-in origin-top">
            <Link 
              href="/#hakkimda" 
              className="block py-2 text-foreground/70 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <TextTransition content={t('nav.about')} />
            </Link>
            <Link 
              href="/#projeler" 
              className="block py-2 text-foreground/70 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <TextTransition content={t('nav.projects')} />
            </Link>
            <Link 
              href="/#iletisim" 
              className="block py-2 text-foreground/70 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <TextTransition content={t('nav.contact')} />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
} 
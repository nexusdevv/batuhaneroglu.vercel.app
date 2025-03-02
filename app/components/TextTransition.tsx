"use client";

import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface TextTransitionProps {
  content: string;
  as?: React.ElementType;
  className?: string;
}

const TextTransition: React.FC<TextTransitionProps> = ({ 
  content, 
  as: Component = 'span',
  className = '' 
}) => {
  const { isLanguageChanging } = useLanguage();
  const [isChanging, setIsChanging] = useState(false);
  const [displayedContent, setDisplayedContent] = useState(content);

  useEffect(() => {
    if (content !== displayedContent) {
      setIsChanging(true);
      
      const timer = setTimeout(() => {
        setDisplayedContent(content);
        
        setTimeout(() => {
          setIsChanging(false);
        }, 50);
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [content, displayedContent]);

  return (
    <Component 
      className={`${className} ${isChanging || isLanguageChanging ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'} transition-all duration-300`}
    >
      {displayedContent}
    </Component>
  );
};

export default TextTransition; 
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'tr';

type TranslationKey = 
  | 'nav.about' | 'nav.projects' | 'nav.contact'
  | 'hero.greeting' | 'hero.role' | 'hero.contact' | 'hero.work'
  | 'about.title' | 'about.paragraph1' | 'about.paragraph2' | 'about.paragraph3' | 'about.paragraph4'
  | 'about.skills' | 'about.skill1' | 'about.skill2' | 'about.skill3' | 'about.skill4' | 'about.skill5'
  | 'projects.title' | 'projects.portfolio.title' | 'projects.portfolio.desc' | 'projects.discord.title'
  | 'projects.discord.desc' | 'projects.coming.title' | 'projects.coming.desc' | 'projects.details'
  | 'contact.title' | 'contact.description' | 'contact.social' | 'contact.email' | 'contact.location'
  | 'contact.form.title' | 'contact.form.name' | 'contact.form.email' | 'contact.form.message'
  | 'contact.form.placeholder.name' | 'contact.form.placeholder.email' | 'contact.form.placeholder.message'
  | 'contact.form.send' | 'footer.rights' | 'footer.links' | 'footer.social'
  | 'language' | 'language.en' | 'language.tr'
  | 'form.sending' | 'form.success.title' | 'form.success.message' | 'form.close';

type TranslationType = Record<TranslationKey, string>;

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isLanguageChanging: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const translations: Record<Language, TranslationType> = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.greeting": "Hello, I'm",
    "hero.role": "Full-stack developer, technology enthusiast and creative problem solver. I create user-focused digital experiences.",
    "hero.contact": "Get in Touch",
    "hero.work": "See My Work",
    
    // About Section
    "about.title": "About Me",
    "about.paragraph1": "Hello! I'm Batuhan Eroğlu, a full-stack software developer known by the nickname 'Hydra'. My passion for coding comes from a deep belief in how technology can improve people's lives.",
    "about.paragraph2": "I have expertise in modern web technologies and am experienced particularly in React, Next.js, Node.js, and database systems. I aim to develop high-performance and reliable applications that prioritize user experience.",
    "about.paragraph3": "I focus on continuous learning and self-improvement. Exploring new technologies, solving challenging problems, and sharing my knowledge with others motivates me.",
    "about.paragraph4": "I have an open approach to collaboration and believe in the power of teamwork. In my projects, I prefer to work closely with my clients by prioritizing communication and transparency.",
    "about.skills": "My Skills",
    "about.skill1": "Frontend: React, Next.js, Tailwind CSS",
    "about.skill2": "Backend: Node.js, Express, MongoDB",
    "about.skill3": "Mobile: React Native",
    "about.skill4": "Tools: Git, Docker, AWS",
    "about.skill5": "Design: Figma, Adobe XD",
    
    // Projects Section
    "projects.title": "My Projects",
    "projects.portfolio.title": "Personal Portfolio",
    "projects.portfolio.desc": "A modern personal portfolio website built with Next.js and Tailwind CSS.",
    "projects.discord.title": "Multi Tool Application",
    "projects.discord.desc": "A versatile utility application with various tools for daily productivity and development.",
    "projects.coming.title": "Coming Soon",
    "projects.coming.desc": "New exciting project under development. Stay tuned for updates!",
    "projects.details": "View Details",
    
    // Contact Section
    "contact.title": "Contact",
    "contact.description": "Do you have a project idea? Or do you just want to say hello? You can reach me through my contact information below.",
    "contact.social": "Social Media",
    "contact.email": "Email me at:",
    "contact.location": "Ankara, Turkey",
    "contact.form.title": "Send Message",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.placeholder.name": "Your name",
    "contact.form.placeholder.email": "Your email address",
    "contact.form.placeholder.message": "Your message",
    "contact.form.send": "Send",
    
    // Footer
    "footer.rights": "All rights reserved.",
    "footer.links": "Links",
    "footer.social": "Social Media",

    // Language Selector
    "language": "Language",
    "language.en": "English",
    "language.tr": "Turkish",

    // Form Status
    "form.sending": "Sending...",
    "form.success.title": "Thank You!",
    "form.success.message": "Your message has been successfully sent. I will get back to you as soon as possible.",
    "form.close": "Close"
  },
  tr: {
    // Navigation
    "nav.about": "Hakkımda",
    "nav.projects": "Projeler",
    "nav.contact": "İletişim",
    
    // Hero Section
    "hero.greeting": "Merhaba, ben",
    "hero.role": "Full-stack geliştirici, teknoloji tutkunu ve yaratıcı problem çözücü. Kullanıcı odaklı dijital deneyimler oluşturuyorum.",
    "hero.contact": "İletişime Geç",
    "hero.work": "Çalışmalarımı Gör",
    
    // About Section
    "about.title": "Hakkımda",
    "about.paragraph1": "Merhaba! Ben Batuhan Eroğlu, \"Hydra\" takma adıyla tanınan bir full-stack yazılım geliştiricisiyim. Kodlama dünyasına olan tutkum, teknolojinin insanların hayatlarını nasıl iyileştirebileceğine dair derin bir inançtan geliyor.",
    "about.paragraph2": "Modern web teknolojileri konusunda uzmanlığım var ve özellikle React, Next.js, Node.js ve veritabanı sistemleri konularında deneyimliyim. Kullanıcı deneyimini ön planda tutan, performanslı ve güvenilir uygulamalar geliştirmeyi hedefliyorum.",
    "about.paragraph3": "Sürekli öğrenmeye ve kendimi geliştirmeye odaklanıyorum. Yeni teknolojileri keşfetmek, zorlu problemleri çözmek ve bilgimi başkalarıyla paylaşmak beni motive ediyor.",
    "about.paragraph4": "İş birliğine açık bir yaklaşımım var ve ekip çalışmasının gücüne inanıyorum. Projelerimde iletişimi ve şeffaflığı ön planda tutarak, müşterilerimle yakın çalışmayı tercih ediyorum.",
    "about.skills": "Yeteneklerim",
    "about.skill1": "Frontend: React, Next.js, Tailwind CSS",
    "about.skill2": "Backend: Node.js, Express, MongoDB",
    "about.skill3": "Mobil: React Native",
    "about.skill4": "Araçlar: Git, Docker, AWS",
    "about.skill5": "Tasarım: Figma, Adobe XD",
    
    // Projects Section
    "projects.title": "Projelerim",
    "projects.portfolio.title": "Kişisel Portfolyo",
    "projects.portfolio.desc": "Next.js ve Tailwind CSS ile oluşturulmuş modern bir kişisel portfolyo sitesi.",
    "projects.discord.title": "Çok Amaçlı Araç Uygulaması",
    "projects.discord.desc": "Günlük üretkenlik ve geliştirme için çeşitli araçlar sunan çok yönlü bir yardımcı uygulama.",
    "projects.coming.title": "Çok Yakında",
    "projects.coming.desc": "Yeni heyecan verici proje geliştirme aşamasında. Güncellemeler için takipte kalın!",
    "projects.details": "Detayları Gör",
    
    // Contact Section
    "contact.title": "İletişim",
    "contact.description": "Bir proje fikriniz mi var? Veya sadece merhaba mı demek istiyorsunuz? Aşağıdaki iletişim bilgilerimden bana ulaşabilirsiniz.",
    "contact.social": "Sosyal Medya",
    "contact.email": "E-posta ile ulaşmak için:",
    "contact.location": "Ankara, Türkiye",
    "contact.form.title": "Mesaj Gönder",
    "contact.form.name": "İsim",
    "contact.form.email": "E-posta",
    "contact.form.message": "Mesaj",
    "contact.form.placeholder.name": "Adınız",
    "contact.form.placeholder.email": "E-posta adresiniz",
    "contact.form.placeholder.message": "Mesajınız",
    "contact.form.send": "Gönder",
    
    // Footer
    "footer.rights": "Tüm hakları saklıdır.",
    "footer.links": "Bağlantılar",
    "footer.social": "Sosyal Medya",

    // Language Selector
    "language": "Dil",
    "language.en": "İngilizce",
    "language.tr": "Türkçe",

    // Form Status
    "form.sending": "Gönderiliyor...",
    "form.success.title": "Teşekkürler!",
    "form.success.message": "Mesajınız başarıyla gönderildi. En kısa sürede size geri dönüş yapacağım.",
    "form.close": "Kapat"
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [isLanguageChanging, setIsLanguageChanging] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    if (lang !== language) {
      setIsLanguageChanging(true);
      
      setTimeout(() => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
        
        setTimeout(() => {
          setIsLanguageChanging(false);
        }, 300);
      }, 100);
    }
  };

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t, isLanguageChanging }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 
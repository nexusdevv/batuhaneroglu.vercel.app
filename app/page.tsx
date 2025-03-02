"use client";

import Link from "next/link";
import Navigation from "./components/Navigation";
import { useLanguage } from "./contexts/LanguageContext";
import { useState } from "react";
import ThankYouModal from "./components/ThankYouModal";
import TextTransition from "./components/TextTransition";
import { Squares } from "./components/ui/squares-background";

export default function Home() {
  const { t } = useLanguage();
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    setFormStatus({ submitting: true, success: false });
    
    try {
      await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      // FormSubmit başarılı olduğunda
      setFormStatus({ submitting: false, success: true });
      setIsModalOpen(true);
      form.reset(); // Formu temizle
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({ submitting: false, success: false });
    }
  };

  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <Squares 
          direction="diagonal"
          speed={0.3}
          squareSize={40}
          borderColor="#e02f2f" 
          hoverFillColor="#ff3e3e"
          className="opacity-40"
        />
      </div>
      
      <Navigation />
      
      <main className="pt-32 pb-20 relative z-0">
        <section id="hero" className="container-custom space-y-8 mb-20 relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight relative z-10">
            <TextTransition content={t('hero.greeting')} as="span" /> <span className="text-primary">Batuhan Eroğlu</span>.
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl relative z-10">
            <TextTransition content={t('hero.role')} as="span" />
          </p>
          <div className="flex flex-wrap gap-4 relative z-10">
            <Link href="/#iletisim" className="btn-primary">
              <TextTransition content={t('hero.contact')} />
            </Link>
            <Link 
              href="/#projeler" 
              className="inline-flex items-center justify-center px-5 py-2 rounded-md border border-foreground/20 hover:border-primary hover:text-primary transition-colors"
            >
              <TextTransition content={t('hero.work')} />
            </Link>
          </div>
          <div className="flex gap-5 pt-4 relative z-10">
            <a 
              href="https://github.com/hhydraaa" 
            target="_blank"
            rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
          </a>
          <a
              href="https://www.instagram.com/batuhan13485/" 
            target="_blank"
            rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </section>
        
        <section id="hakkimda" className="container-custom py-12">
          <h2 className="text-3xl font-bold mb-8">
            <TextTransition content={t('about.title')} />
          </h2>
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 space-y-4">
              <p>
                {t('about.paragraph1')}
              </p>
              <p>
                {t('about.paragraph2')}
              </p>
              <p>
                {t('about.paragraph3')}
              </p>
              <p>
                {t('about.paragraph4')}
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="bg-muted/80 backdrop-blur-sm p-6 rounded-lg border border-muted/30">
                <h3 className="text-xl font-semibold mb-4">{t('about.skills')}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{t('about.skill1')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{t('about.skill2')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section id="projeler" className="container-custom py-12">
          <h2 className="text-3xl font-bold mb-8">
            <TextTransition content={t('projects.title')} />
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-muted/40 backdrop-blur-sm rounded-lg overflow-hidden border border-muted hover:border-primary transition-colors">
              <div className="aspect-video bg-gradient-to-r from-primary/20 to-accent/20 relative flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                  <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                  <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{t('projects.portfolio.title')}</h3>
                <p className="text-foreground/70 mb-4">
                  {t('projects.portfolio.desc')}
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 text-xs bg-background rounded">Next.js</span>
                  <span className="px-2 py-1 text-xs bg-background rounded">Tailwind CSS</span>
                  <span className="px-2 py-1 text-xs bg-background rounded">TypeScript</span>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary hover:underline"
                >
          </a>
        </div>
            </div>
            
            <div className="bg-muted/40 backdrop-blur-sm rounded-lg overflow-hidden border border-muted hover:border-primary transition-colors">
              <div className="aspect-video bg-gradient-to-br from-teal-500/20 to-amber-500/20 relative flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{t('projects.discord.title')}</h3>
                <p className="text-foreground/70 mb-4">
                  {t('projects.discord.desc')}
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 text-xs bg-background rounded">JavaScript</span>
                  <span className="px-2 py-1 text-xs bg-background rounded">Node.js</span>
                  <span className="px-2 py-1 text-xs bg-background rounded">Electron</span>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary hover:underline"
                >
                </a>
              </div>
            </div>
            
            <div className="bg-muted/40 backdrop-blur-sm rounded-lg overflow-hidden border border-muted hover:border-primary transition-colors">
              <div className="aspect-video bg-gradient-to-bl from-green-500/20 to-yellow-500/20 relative flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{t('projects.coming.title')}</h3>
                <p className="text-foreground/70 mb-4">
                  {t('projects.coming.desc')}
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-2 py-1 text-xs bg-background rounded">???</span>
                </div>
                <span className="inline-flex items-center text-foreground/40">
                </span>
              </div>
            </div>
          </div>
        </section>
        
        <section id="iletisim" className="container-custom py-12">
          <h2 className="text-3xl font-bold mb-8">
            <TextTransition content={t('contact.title')} />
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-lg">
                {t('contact.description')}
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a href="mailto:batuhaneroglu145@gmail.com" className="text-lg hover:text-primary">batuhaneroglu145@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-lg">{t('contact.location')}</span>
                </div>
              </div>
              
              <div className="flex gap-5 mt-8">
                <a 
                  href="https://github.com/hhydraaa" 
          target="_blank"
          rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
        </a>
        <a
                  href="https://www.instagram.com/batuhan13485/" 
          target="_blank"
          rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  </a>
              </div>
            </div>
            
            <form 
              className="space-y-4 bg-muted/30 p-6 rounded-lg"
              action="https://formsubmit.co/batuhaneroglu145@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Yeni İletişim Formu Mesajı" />
              <input type="hidden" name="_honey" value="" />
              <input type="hidden" name="_autoresponse" value="Mesajınız için teşekkürler. En kısa sürede size geri dönüş yapacağım." />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  {t('contact.form.name')}
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 rounded-md bg-background border border-muted focus:border-primary focus:outline-none transition-colors"
                  placeholder={t('contact.form.placeholder.name')}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  {t('contact.form.email')}
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 rounded-md bg-background border border-muted focus:border-primary focus:outline-none transition-colors"
                  placeholder={t('contact.form.placeholder.email')}
                  autoComplete="off"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  {t('contact.form.message')}
                </label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full p-3 rounded-md bg-background border border-muted focus:border-primary focus:outline-none transition-colors"
                  placeholder={t('contact.form.placeholder.message')}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="btn-primary w-full flex justify-center items-center"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                {formStatus.submitting ? t('form.sending') : t('contact.form.send')}
              </button>
            </form>
          </div>
        </section>
      </main>
      
      <footer className="bg-black py-10 border-t border-primary/20 relative z-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <Link href="/" className="text-xl font-bold tracking-tight text-white">Hydra</Link>
              <p className="text-white/70 mt-2">
                &copy; {new Date().getFullYear()} Batuhan Eroğlu. {t('footer.rights')}
              </p>
            </div>
            
            <nav className="flex gap-6">
              <Link 
                href="/#hakkimda" 
                className="text-white/70 hover:text-white transition-colors"
              >
                {t('nav.about')}
              </Link>
              <Link 
                href="/#projeler" 
                className="text-white/70 hover:text-white transition-colors"
              >
                {t('nav.projects')}
              </Link>
              <Link 
                href="/#iletisim" 
                className="text-white/70 hover:text-white transition-colors"
              >
                {t('nav.contact')}
              </Link>
            </nav>
          </div>
        </div>
      </footer>
      
      <ThankYouModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

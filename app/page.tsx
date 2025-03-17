'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";
import FadeIn from "./components/animations/FadeIn";
import BlurIn from "./components/animations/BlurIn";
import AnimatedContent from "./components/animations/AnimatedContent";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-grow container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          <AnimatedContent>
            <div className="grid gap-20 md:grid-cols-2 items-center">
              <FadeIn>
                <div className="space-y-8">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                    Batuhan Eroğlu
                    <span className="block text-xl md:text-2xl font-normal mt-2 text-zinc-400">
                      {t('home.title')}
                    </span>
                  </h1>
                  
                  <p className="text-lg text-zinc-300">
                    {t('home.description')}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link 
                      href="/about" 
                      className="flex items-center justify-center h-12 px-6 font-medium rounded-md border border-zinc-700 hover:bg-zinc-900 transition-colors"
                    >
                      {t('home.cta.about')}
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.4} className="mt-24 space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {t('home.recentWorks')}
              </h2>
              
              <BlurIn delay={0.3}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="group relative bg-gradient-to-b from-zinc-900 to-zinc-950/50 rounded-2xl border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="p-6 space-y-4">
                      <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 w-fit p-4 rounded-2xl border border-zinc-800/50">
                        <svg className="w-12 h-12 text-zinc-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.975-.608 1.41a18.27 18.27 0 0 0-5.487 0 12.19 12.19 0 0 0-.617-1.409.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 6.031 3.056.073.073 0 0 0 .079-.025c.433-.595.82-1.224 1.154-1.883a.075.075 0 0 0-.041-.105 13.209 13.209 0 0 1-1.88-.9.075.075 0 0 1-.008-.126c.126-.095.252-.195.372-.297a.074.074 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.102.246.204.373.298a.075.075 0 0 1-.006.127 12.37 12.37 0 0 1-1.882.899.077.077 0 0 0-.041.105c.338.659.724 1.288 1.152 1.883a.073.073 0 0 0 .079.026 19.963 19.963 0 0 0 6.032-3.056.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.029zM8.02 15.278c-1.182 0-2.157-1.09-2.157-2.434s.955-2.434 2.157-2.434c1.211 0 2.176 1.101 2.157 2.434 0 1.344-.956 2.434-2.157 2.434zm7.975 0c-1.183 0-2.157-1.09-2.157-2.434s.955-2.434 2.157-2.434c1.211 0 2.176 1.101 2.157 2.434 0 1.344-.946 2.434-2.157 2.434z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-zinc-300 to-zinc-100 bg-clip-text text-transparent">Discord Clone</h3>
                      <p className="text-zinc-500 leading-relaxed">Full-stack Discord replica with WebSocket integration, role-based permissions, and real-time voice channels.</p>
                    </div>
                  </div>

                  <div className="group relative bg-gradient-to-b from-zinc-900 to-zinc-950/50 rounded-2xl border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="p-6 space-y-4">
                      <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 w-fit p-4 rounded-2xl border border-zinc-800/50">
                        <svg className="w-12 h-12 text-zinc-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 11.807C10.7418 10.5483 9.88488 8.94484 9.53762 7.1993C9.19037 5.45375 9.36832 3.64444 10.049 2C8.10826 2.38205 6.3256 3.33431 4.92899 4.735C1.02399 8.64 1.02399 14.972 4.92899 18.877C8.83499 22.783 15.166 22.782 19.072 18.877C20.4723 17.4805 21.4245 15.6983 21.807 13.758C20.1625 14.4385 18.3533 14.6164 16.6077 14.2692C14.8622 13.9219 13.2588 13.0651 12 11.807V11.807Z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-zinc-300 to-zinc-100 bg-clip-text text-transparent">Modern Portfolio</h3>
                      <p className="text-zinc-500 leading-relaxed">You're seeing it rn.</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent font-bold tracking-wide">Want to see more project of mine? Then click here!</span>
                    <Link 
                      href="/portfolio" 
                      className="flex items-center justify-center h-12 px-6 font-medium rounded-md bg-white text-black hover:bg-zinc-200 transition-colors"
                    >
                      {t('home.cta.portfolio')}
                    </Link>
                  </div>
                </div>
              </BlurIn>
            </FadeIn>
          </AnimatedContent>
        </div>
      </main>
      
      <footer className="border-t border-zinc-800 py-8 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-zinc-400">
              © {new Date().getFullYear()} Batuhan Eroğlu. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="https://github.com/nexusdevv" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="icon-sm" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://instagram.com/batuhan13485" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="icon-sm" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.231.585 1.786 1.14.568.568.902 1.132 1.152 1.8.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 01-1.153 1.8c-.568.568-1.132.902-1.8 1.152-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 01-1.8-1.153 4.903 4.903 0 01-1.152-1.8c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.903 4.903 0 011.153-1.8A4.903 4.903 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

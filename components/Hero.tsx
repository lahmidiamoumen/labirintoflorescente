import React from 'react';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = TRANSLATIONS[language].hero;

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-darker">
      
      {/* Background Image with Advanced Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Industrial Structure Image - Optimized for LCP */}
        <img 
          src="https://images.unsplash.com/photo-1581094794329-cd2a1fb44a5b?q=80&w=2070&auto=format&fit=crop" 
          alt="Industrial Construction Site" 
          width="2070"
          height="1380"
          fetchPriority="high"
          className="w-full h-full object-cover scale-105 animate-[pulse_60s_ease-in-out_infinite]" 
        />
        {/* Heavy Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-dark/90 to-brand-dark/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-brand-blue to-brand-orange opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-0">
        <div className="max-w-4xl">
            <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-[0.65rem] sm:text-xs font-bold tracking-widest uppercase mb-6 sm:mb-8 backdrop-blur-md">
            <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            {language === Language.PT ? "Líder em Confinamento Industrial" : language === Language.FR ? "Leader en Confinement Industriel" : "Industrial Containment Leaders"}
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6 sm:mb-8 leading-tight drop-shadow-2xl">
            LABIRINTO<br className="block md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500">FLORESCENTE</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-3xl text-slate-300 font-light mb-6 border-l-4 border-brand-orange pl-4 sm:pl-6 max-w-3xl leading-snug">
            {t.headline}
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-8 sm:mb-12 max-w-2xl pl-4 sm:pl-6 font-medium leading-relaxed">
            {t.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 pl-0 sm:pl-6">
            <a 
                href="#contact" 
                className="group inline-flex items-center justify-center px-8 py-3 sm:py-4 text-sm sm:text-base font-bold rounded-sm text-white bg-brand-orange hover:bg-orange-600 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] uppercase tracking-wide"
                aria-label={t.cta}
            >
                {t.cta}
                <ChevronRight className="ml-2 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-3 sm:py-4 border border-slate-600 text-sm sm:text-base font-bold rounded-sm text-slate-300 hover:text-white hover:border-white hover:bg-white/5 transition-all duration-300 uppercase tracking-wide backdrop-blur-sm"
                aria-label={t.learnMore}
            >
                {t.learnMore}
            </a>
            </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-brand-orange rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
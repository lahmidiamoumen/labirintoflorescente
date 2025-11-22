import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = TRANSLATIONS[language].hero;

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-dark">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/construction2/1920/1080" 
          alt="Industrial Construction Site" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-orange/50 bg-brand-orange/10 text-brand-orange text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm">
          {language === Language.PT ? "Líder em Confinamento" : language === Language.FR ? "Leader en Confinement" : "Containment Leaders"}
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 drop-shadow-lg">
          LABIRINTO<span className="text-brand-orange">FLORESCENTE</span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-gray-300 font-light mb-10">
          {t.headline}
        </p>
        
        <p className="mt-2 max-w-3xl mx-auto text-base md:text-lg text-gray-400 mb-12">
          {t.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-brand-orange hover:bg-orange-600 md:text-lg md:px-10 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
          >
            {t.cta}
            <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
          </a>
          <a 
            href="#services" 
            className="inline-flex items-center justify-center px-8 py-4 border border-gray-500 text-base font-medium rounded-md text-gray-300 hover:text-white hover:border-white hover:bg-white/10 md:text-lg md:px-10 transition-all duration-300"
          >
             {t.learnMore}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
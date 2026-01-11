
import React, { useState } from 'react';
import { ShieldCheck, Award, HardHat, CheckCircle2, ChevronLeft, ChevronRight, Biohazard } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { ABOUT_IMG_ASBESTOS, ABOUT_IMG_NETS, ABOUT_IMG_WRAP } from '../assets/images';

interface AboutProps {
  language: Language;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const t = TRANSLATIONS[language].about;
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: ABOUT_IMG_ASBESTOS,
      title: language === Language.FR ? "Confinement Intégral Amiante" : language === Language.PT ? "Confinamento Integral de Amianto" : "Full Asbestos Containment"
    },
    {
      src: ABOUT_IMG_NETS,
      title: language === Language.FR ? "Filets de Protection Industriels" : language === Language.PT ? "Redes de Proteção Industrial" : "Industrial Safety Nets"
    },
    {
      src: ABOUT_IMG_WRAP,
      title: language === Language.FR ? "Systèmes Thermo-Rétractables" : language === Language.PT ? "Sistemas Termorretráteis" : "Thermo-Retractable Enclosures"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="about" className="py-16 sm:py-16 lg:py-32 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 transform -skew-x-12 translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          
          {/* Image Carousel */}
          <div className="relative mb-20 lg:mb-0 group">
            <div className="absolute -inset-4 bg-brand-orange/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Main Image Container */}
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white relative z-10 bg-slate-100">
               {images.map((img, index) => (
                 <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                 >
                    <img 
                        src={img.src} 
                        alt={img.title}
                        loading="lazy"
                        className="object-cover w-full h-full transform scale-105 group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60"></div>
                    
                    {/* Caption Text - Positioned Bottom Left */}
                    <div className="absolute bottom-12 left-8 right-8 text-white z-20 pointer-events-none">
                        <p className="font-black text-2xl border-l-4 border-brand-orange pl-6 drop-shadow-lg animate-fade-in uppercase tracking-tighter">
                        {img.title}
                        </p>
                    </div>
                 </div>
               ))}

               {/* Carousel Navigation - Moved to Bottom Right to avoid text overlap */}
               <div className="absolute bottom-4 right-4 z-30 flex gap-2">
                 <button 
                    onClick={prevSlide} 
                    className="p-3 bg-white/10 backdrop-blur-xl rounded-full hover:bg-brand-orange transition-all text-white border border-white/20 shadow-lg" 
                    aria-label="Previous"
                  >
                    <ChevronLeft size={24} />
                 </button>
                 <button 
                    onClick={nextSlide} 
                    className="p-3 bg-white/10 backdrop-blur-xl rounded-full hover:bg-brand-orange transition-all text-white border border-white/20 shadow-lg" 
                    aria-label="Next"
                  >
                    <ChevronRight size={24} />
                 </button>
               </div>
            </div>

            {/* Floating Technical Label - Moved to Top Left to avoid overlapping bottom caption */}
            <div className="absolute -top-6 -left-4 md:-top-8 md:-left-6 bg-brand-dark text-white p-6 md:p-8 rounded-[2rem] shadow-2xl hidden lg:block max-w-[300px] border-t-4 border-brand-orange z-30 animate-slide-up">
              <div className="flex items-center mb-4">
                <Biohazard className="text-brand-orange h-6 w-6 mr-3 flex-shrink-0" />
                <span className="font-black uppercase tracking-widest text-[10px]">{t.hazardTitle}</span>
              </div>
              <p className="text-slate-300 text-sm font-bold leading-relaxed">
                {t.hazardDescription}
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:pl-10">
            <div className="flex items-center space-x-4 mb-6">
                <span className="h-px w-12 bg-brand-orange"></span>
                <h2 className="text-brand-orange font-black tracking-[0.3em] uppercase text-xs">
                {t.companyName}
                </h2>
            </div>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-dark mb-8 leading-none tracking-tighter">
              {t.title}
            </h3>
            <div className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              <p>{t.description}</p>
            </div>
            
            <div className="bg-slate-900 rounded-[2rem] p-8 mb-12 border border-slate-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-1000"></div>
              <p className="text-white font-bold text-base flex items-start relative z-10">
                <ShieldCheck className="h-6 w-6 text-brand-blue mr-4 flex-shrink-0 mt-0.5" />
                {t.specialization}
              </p>
            </div>

            {/* Technical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-brand-blue transition-all duration-300">
                <div className="flex-shrink-0 bg-brand-blue text-white p-3 rounded-xl shadow-lg shadow-brand-blue/20">
                  <Biohazard className="h-6 w-6" />
                </div>
                <div className="ml-5">
                  <h4 className="text-sm font-black text-brand-dark uppercase tracking-widest">Amianto Removal</h4>
                  <p className="text-[10px] text-slate-400 mt-1 font-black uppercase tracking-widest">Certified Hermetic Seals</p>
                </div>
              </div>
              <div className="flex items-center p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-brand-orange transition-all duration-300">
                <div className="flex-shrink-0 bg-brand-orange text-white p-3 rounded-xl shadow-lg shadow-brand-orange/20">
                  <HardHat className="h-6 w-6" />
                </div>
                <div className="ml-5">
                  <h4 className="text-sm font-black text-brand-dark uppercase tracking-widest">Industrial Netting</h4>
                  <p className="text-[10px] text-slate-400 mt-1 font-black uppercase tracking-widest">Certified EN 1263-1</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

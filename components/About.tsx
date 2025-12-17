
import React, { useState } from 'react';
import { ShieldCheck, Award, HardHat, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface AboutProps {
  language: Language;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const t = TRANSLATIONS[language].about;
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1591588582259-e675bd2e6088?q=80&w=1000&auto=format&fit=crop",
      title: language === Language.FR ? "Confinement Intégral" : language === Language.PT ? "Confinamento Integral" : "Total Containment"
    },
    {
      src: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=1000",
      title: language === Language.FR ? "Structure Industrielle" : language === Language.PT ? "Estrutura Industrial" : "Industrial Structure"
    },
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000",
      title: language === Language.FR ? "Sécurité Avancée" : language === Language.PT ? "Segurança Avançada" : "Advanced Safety"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="about" className="py-16 sm:py-16 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 transform -skew-x-12 translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          
          {/* Image Carousel */}
          <div className="relative mb-20 lg:mb-0 group">
            <div className="absolute -inset-4 bg-brand-orange/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Main Image Container */}
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border-4 border-white relative z-10 bg-slate-100">
               {images.map((img, index) => (
                 <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                 >
                    <img 
                        src={img.src} 
                        alt={img.title}
                        loading="lazy"
                        className="object-cover w-full h-full transform scale-105 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                        <p className="font-bold text-lg border-l-4 border-brand-orange pl-3 drop-shadow-md animate-fade-in">
                        {img.title}
                        </p>
                    </div>
                 </div>
               ))}

               {/* Carousel Navigation */}
               <div className="absolute bottom-6 right-6 z-20 flex space-x-2">
                  <button onClick={prevSlide} className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors text-white border border-white/50" aria-label="Previous">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={nextSlide} className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors text-white border border-white/50" aria-label="Next">
                    <ChevronRight size={20} />
                  </button>
               </div>
            </div>

            {/* Secondary Image - Floating Bottom Left (Static) */}
            <div className="absolute -bottom-12 -left-4 md:-left-12 w-40 h-40 sm:w-48 sm:h-48 rounded-lg border-4 border-white shadow-xl overflow-hidden hidden sm:block z-20 animate-[fadeIn_1s_ease-out]">
               <img 
                src="https://plus.unsplash.com/premium_photo-1661877303180-1d85c880155d?auto=format&fit=crop&q=80&w=1000" 
                alt="Industrial safety detail" 
                loading="lazy"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Floating Info Card */}
            <div className="absolute -bottom-8 -right-4 md:-right-10 bg-brand-dark p-6 sm:p-8 rounded-lg shadow-xl hidden lg:block max-w-xs border-t-4 border-brand-orange z-30">
              <div className="flex items-center mb-3">
                <HardHat className="text-brand-orange h-6 w-6 mr-3" />
                <span className="text-white font-bold uppercase tracking-wider text-xs">Expert Engineering</span>
              </div>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                Weather-resistant, dust-tight, and secure. We wrap entire structures for safety and environmental control.
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
                <span className="h-px w-8 bg-brand-orange"></span>
                <h2 className="text-brand-orange font-bold tracking-widest uppercase text-xs sm:text-sm">
                {t.companyName}
                </h2>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 sm:mb-8 leading-tight">
              {t.title}
            </h3>
            <div className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed space-y-6">
              <p>{t.description}</p>
            </div>
            
            <div className="bg-slate-100 rounded-lg p-6 mb-10 border border-slate-200">
              <p className="text-brand-dark font-medium text-sm flex items-start">
                <CheckCircle2 className="h-5 w-5 text-brand-blue mr-3 flex-shrink-0 mt-0.5" />
                {t.specialization}
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start p-4 rounded-lg hover:bg-slate-50 transition-colors duration-300 border border-transparent hover:border-slate-100">
                <div className="flex-shrink-0 bg-brand-blue/10 p-2 rounded-md">
                  <ShieldCheck className="h-6 w-6 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-bold text-brand-dark">ISO Compliance</h4>
                  <p className="text-xs text-slate-500 mt-1">Strict adherence to EU safety standards.</p>
                </div>
              </div>
              <div className="flex items-start p-4 rounded-lg hover:bg-slate-50 transition-colors duration-300 border border-transparent hover:border-slate-100">
                <div className="flex-shrink-0 bg-brand-orange/10 p-2 rounded-md">
                  <Award className="h-6 w-6 text-brand-orange" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-bold text-brand-dark">Premium Materials</h4>
                  <p className="text-xs text-slate-500 mt-1">High-grade heat shrink films & nets.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
                <a href="#contact" className="text-brand-orange font-bold hover:text-brand-orangeDark transition-colors flex items-center group">
                    {language === Language.PT ? "Conheça a nossa equipa" : language === Language.FR ? "Rencontrer l'équipe" : "Meet our team"} 
                    <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

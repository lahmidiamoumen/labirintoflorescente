import React from 'react';
import { Box, Home, HardHat, Biohazard, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface ServicesProps {
  language: Language;
}

const Services: React.FC<ServicesProps> = ({ language }) => {
  const t = TRANSLATIONS[language].services;

  const serviceList = [
    {
      id: 'containment',
      icon: <Box className="h-10 w-10 text-white" />,
      content: t.items.containment,
      gradient: 'from-blue-500 to-blue-700',
      delay: '0'
    },
    {
      id: 'roofing',
      icon: <HardHat className="h-10 w-10 text-white" />,
      content: t.items.roofing,
      gradient: 'from-orange-500 to-orange-700',
      delay: '100'
    },
    {
      id: 'indoorOutdoor',
      icon: <Home className="h-10 w-10 text-white" />,
      content: t.items.indoorOutdoor,
      gradient: 'from-slate-600 to-slate-800',
      delay: '200'
    },
    {
      id: 'decontamination',
      icon: <Biohazard className="h-10 w-10 text-white" />,
      content: t.items.decontamination,
      gradient: 'from-red-600 to-red-800',
      delay: '300'
    }
  ];

  return (
    <section id="services" className="py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-3">
            Technical Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-brand-dark">
            {t.title}
          </h3>
          <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-brand-orange to-brand-orangeDark mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full border border-slate-100"
            >
              {/* Top Gradient Bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${service.gradient}`}></div>
              
              {/* Icon Container */}
              <div className={`p-8 pb-0`}>
                 <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500 rotate-3 group-hover:rotate-0`}>
                    {service.icon}
                 </div>
              </div>

              <div className="p-8 flex-grow">
                <h4 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-orange transition-colors">
                  {service.content.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.content.description}
                </p>
              </div>

              <div className="px-8 pb-8 mt-auto">
                 <div className="w-full h-px bg-slate-100 mb-6"></div>
                 <a href="#contact" className="inline-flex items-center text-sm font-bold text-brand-dark group-hover:text-brand-orange transition-colors uppercase tracking-wide">
                    {language === Language.PT ? "Solicitar" : "Request"}
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                 </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
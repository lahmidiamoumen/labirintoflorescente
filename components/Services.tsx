import React from 'react';
import { Box, Home, HardHat, Flame } from 'lucide-react';
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
      icon: <Box className="h-8 w-8 text-white" />,
      content: t.items.containment,
      color: 'bg-brand-blue'
    },
    {
      id: 'roofing',
      icon: <HardHat className="h-8 w-8 text-white" />,
      content: t.items.roofing,
      color: 'bg-brand-orange'
    },
    {
      id: 'indoorOutdoor',
      icon: <Home className="h-8 w-8 text-white" />,
      content: t.items.indoorOutdoor,
      color: 'bg-slate-600'
    },
    {
      id: 'decontamination',
      icon: <Flame className="h-8 w-8 text-white" />, // Flame as metaphor for hazard/cleaning
      content: t.items.decontamination,
      color: 'bg-emerald-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-bold tracking-wide uppercase text-sm">
            Labirinto Florescente
          </h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t.title}
          </h3>
          <div className="mt-4 max-w-2xl mx-auto h-1 w-24 bg-brand-orange rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`h-24 flex items-center justify-center ${service.color}`}>
                {service.icon}
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {service.content.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.content.description}
                </p>
              </div>
              <div className="px-6 pb-6">
                 <span className="text-brand-blue text-sm font-medium cursor-pointer hover:text-brand-orange transition-colors flex items-center">
                    {language === Language.PT ? "Ver detalhe" : "More info"} &rarr;
                 </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
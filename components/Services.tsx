
import React, { useRef, useState } from 'react';
import { Box, Home, HardHat, Biohazard, ArrowRight } from 'lucide-react';
import { Language, ServiceContent } from '../types';
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
      gradient: 'from-blue-500 to-sky-400',
    },
    {
      id: 'roofing',
      icon: <HardHat className="h-10 w-10 text-white" />,
      content: t.items.roofing,
      gradient: 'from-orange-500 to-amber-400',
    },
    {
      id: 'indoorOutdoor',
      icon: <Home className="h-10 w-10 text-white" />,
      content: t.items.indoorOutdoor,
      gradient: 'from-slate-700 to-slate-500',
    },
    {
      id: 'decontamination',
      icon: <Biohazard className="h-10 w-10 text-white" />,
      content: t.items.decontamination,
      gradient: 'from-emerald-600 to-teal-400',
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-brand-blue font-extrabold tracking-widest uppercase text-sm mb-4">
            Technical Precision
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">
            {t.title}
          </h3>
          <div className="w-24 h-2 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service) => (
             <ServiceCard key={service.id} service={service} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
    service: {
        id: string;
        icon: React.ReactNode;
        content: ServiceContent;
        gradient: string;
    };
    language: Language;
}

// Fix: Use React.FC to handle standard component props like 'key' and children
const ServiceCard: React.FC<ServiceCardProps> = ({ service, language }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div 
            ref={divRef}
            onMouseMove={handleMouseMove}
            className="group relative bg-white rounded-3xl p-8 shadow-sm border border-slate-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden flex flex-col h-full"
        >
            {/* White-themed spotlight */}
            <div 
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-10"
                style={{
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(14,165,233,0.05), transparent 70%)`
                }}
            />

            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg mb-8 relative z-20 transition-transform group-hover:scale-110`}>
                {service.icon}
            </div>

            <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors relative z-20">
                {service.content.title}
            </h4>
            <p className="text-slate-500 text-base leading-relaxed mb-8 relative z-20">
                {service.content.description}
            </p>

            <div className="mt-auto relative z-20">
                <a href="#contact" className="inline-flex items-center text-sm font-black text-slate-900 group-hover:text-brand-orange transition-colors uppercase tracking-widest">
                    {language === Language.PT ? "Saber Mais" : "Learn More"}
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                </a>
            </div>
        </div>
    );
}

export default Services;

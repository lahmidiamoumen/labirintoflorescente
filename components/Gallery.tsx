
import React from 'react';
import { Language } from '../types';
import { Shield, Maximize2, CheckCircle2, Ruler, Warehouse, Building2 } from 'lucide-react';
import { TRANSLATIONS } from '../constants';

interface GalleryProps {
  language: Language;
}

const PROJECTS = [
  {
    id: "BW-2024-01",
    title: { 
      EN: "Exterior Asbestos Confinement", 
      FR: "Confinement Amiante Extérieur", 
      PT: "Confinamento de Amianto Exterior" 
    },
    desc: { 
      EN: "Full-scale building encapsulation using high-density white thermo-retractable film for secure hazardous material removal.", 
      FR: "Encapsulage complet de bâtiment utilisant un film thermorétractable blanc haute densité pour l'enlèvement sécurisé des matières dangereuses.", 
      PT: "Encapsulamento completo de edifício utilizando filme termorretrátil branco de alta densidade para remoção segura de materiais perigosos." 
    },
    category: {
      EN: "Containment",
      FR: "Confinement",
      PT: "Confinamento"
    },
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop", 
    icon: <Building2 className="w-5 h-5" />,
    stats: "2,400 m²",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    id: "WN-2024-05",
    title: { 
      EN: "Industrial Safety Netting", 
      FR: "Filets de Sécurité Industriels", 
      PT: "Redes de Segurança Industrial" 
    },
    desc: { 
      EN: "Installation of high-resistance safety netting for fall protection in a chemical storage warehouse.", 
      FR: "Installation de filets de sécurité haute résistance pour la protection anti-chute dans un entrepôt de stockage de produits chimiques.", 
      PT: "Instalação de redes de segurança de alta resistência para proteção anti-queda em armazém de produtos químicos." 
    },
    category: {
      EN: "Safety Nets",
      FR: "Filets Sécurité",
      PT: "Redes Segurança"
    },
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    icon: <Warehouse className="w-5 h-5" />,
    stats: "EN 1263-1",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: "IS-2024-03",
    title: { 
      EN: "Interior Technical Seal", 
      FR: "Scellage Technique Intérieur", 
      PT: "Selagem Técnica Interior" 
    },
    desc: { 
      EN: "Internal ceiling confinement with thermo-retractable lining for dust and hazardous fiber mitigation.", 
      FR: "Confinement intérieur du plafond avec revêtement thermorétractable pour l'atténuation des poussières et fibres dangereuses.", 
      PT: "Confinamento interior de teto com revestimento termorretrátil para mitigação de poeiras e fibras perigosas." 
    },
    category: {
      EN: "Dust Control",
      FR: "Contrôle Poussière",
      PT: "Controlo Poeira"
    },
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    icon: <Shield className="w-5 h-5" />,
    stats: "100% Hermetic",
    span: "md:col-span-1 md:row-span-1"
  }
];

const Gallery: React.FC<GalleryProps> = ({ language }) => {
  const t = TRANSLATIONS[language].gallery;

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-orange font-black uppercase tracking-[0.3em] text-xs mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-brand-orange"></span>
              {t.label}
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-brand-dark leading-tight">
              {t.title}
            </h3>
            <p className="text-slate-500 mt-6 font-medium text-lg leading-relaxed">
              {t.subtitle}
            </p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="px-6 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 font-bold text-sm flex items-center gap-2">
              <Shield size={16} className="text-brand-blue" />
              ISO 9001 & 14001 Standards
            </div>
            <div className="flex items-center gap-2 text-brand-orange text-xs font-black uppercase tracking-widest">
              <CheckCircle2 size={14} />
              Verified Site Documentation
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className={`group relative rounded-[2rem] overflow-hidden bg-slate-900 ${project.span} cursor-pointer shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-700`}
            >
              <img 
                src={project.image} 
                alt={project.title[language]} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
              
              <div className="absolute top-8 left-8 flex flex-col gap-2">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl flex items-center gap-3 text-white transition-transform group-hover:-translate-y-1">
                   {project.icon}
                   <span className="text-[10px] font-black uppercase tracking-widest">{project.category[language]}</span>
                </div>
              </div>

              <div className="absolute top-8 right-8">
                <div className="bg-brand-orange px-3 py-1.5 rounded-lg shadow-lg shadow-brand-orange/30 text-white flex items-center gap-2">
                   <Ruler size={14} />
                   <span className="text-[10px] font-black">{project.stats}</span>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 translate-y-4 group-hover:translate-y-0 opacity-100 transition-all duration-500">
                <h4 className="text-3xl font-black text-white mb-3 tracking-tighter leading-none">{project.title[language]}</h4>
                <p className="text-slate-300 text-sm mb-8 leading-relaxed font-medium line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                  {project.desc[language]}
                </p>
                
                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Project ID: {project.id}</span>
                    <button className="flex items-center gap-2 text-brand-blue font-black text-xs uppercase tracking-widest hover:text-white transition-colors">
                        <Maximize2 size={16} />
                        {t.viewReport}
                    </button>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-white/5 rounded-tr-[2rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-white/5 rounded-bl-[2rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 py-12 border-y border-slate-100 flex flex-wrap justify-around items-center gap-8">
            <div className="text-center">
                <p className="text-4xl font-black text-brand-dark mb-1">500+</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.stats.completed}</p>
            </div>
            <div className="w-px h-12 bg-slate-200 hidden md:block"></div>
            <div className="text-center">
                <p className="text-4xl font-black text-brand-blue mb-1">100%</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.stats.integrity}</p>
            </div>
            <div className="w-px h-12 bg-slate-200 hidden md:block"></div>
            <div className="text-center">
                <p className="text-4xl font-black text-brand-orange mb-1">0</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.stats.incidents}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;


import React from 'react';
import { ChevronRight, ShieldCheck, Plus, Target, Layers } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { HERO_IMG } from '../assets/images';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = TRANSLATIONS[language].hero;
  
  return (
    <section id="home" className="relative h-screen min-h-[850px] flex items-center justify-center overflow-hidden bg-white">
      
      {/* 1. Background Environment */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMG} 
          alt="Technical Scaffolding Site" 
          className="w-full h-full object-cover opacity-60 mix-blend-multiply" 
        />
        
        {/* Page Load Reveal */}
        <div className="absolute inset-0 flex pointer-events-none z-30">
            {[0, 100, 200, 300, 400].map((delay, i) => (
                <div 
                    key={i} 
                    className="h-full bg-white flex-1 origin-top animate-column-reveal"
                    style={{ animationDelay: `${delay}ms` }}
                ></div>
            ))}
        </div>

        {/* Blueprint Grid Pattern */}
        <div 
          className="absolute inset-0 z-10 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, #cbd5e1 1.5px, transparent 1.5px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        ></div>

        {/* Dynamic Light Flares */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-blue/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-orange/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Fade to Content Mask */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-white via-white/95 to-transparent"></div>
      </div>

      {/* Interface Markers */}
      <div className="absolute inset-0 z-25 pointer-events-none select-none">
        <div className="absolute top-24 left-12 opacity-30"><Target size={32} className="text-slate-400" /></div>
        <div className="absolute top-24 right-12 opacity-30"><Layers size={32} className="text-slate-400" /></div>
        <div className="absolute bottom-24 left-12 opacity-30"><Plus size={32} className="text-slate-400" /></div>
        <div className="absolute bottom-24 right-12 opacity-30"><Plus size={32} className="text-slate-400" /></div>
      </div>

      {/* Hero Layout */}
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Messaging */}
            <div className="max-w-3xl">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-blue/20 bg-white/50 backdrop-blur-sm text-brand-blue text-xs font-black tracking-[0.2em] uppercase mb-10 opacity-0 animate-slide-up shadow-sm" style={{ animationDelay: '800ms' }}>
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  {language === Language.PT ? "Confinamento Hermético Certificado" : language === Language.FR ? "Confinement Hermétique Certifié" : "Certified Hermetic Containment"}
                </div>
                
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-slate-900 tracking-tighter mb-10 leading-none">
                  <div className="flex flex-wrap gap-x-6 overflow-hidden">
                    <span className="inline-block opacity-0 animate-text-reveal drop-shadow-sm" style={{ animationDelay: '900ms' }}>SAFE</span>
                    <span className="inline-block text-brand-blue opacity-0 animate-text-reveal drop-shadow-sm" style={{ animationDelay: '1100ms' }}>SHIELD</span>
                  </div>
                </h1>
                
                <div className="relative opacity-0 animate-slide-up" style={{ animationDelay: '1400ms' }}>
                   <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-orange rounded-full"></div>
                   <p className="text-xl md:text-3xl text-slate-700 font-black pl-8 leading-tight max-w-xl tracking-tight">
                    {t.headline}
                   </p>
                </div>
                
                <p className="text-lg text-slate-500 mt-8 mb-12 max-w-xl font-bold leading-relaxed opacity-0 animate-slide-up" style={{ animationDelay: '1600ms' }}>
                  {t.subheadline}
                </p>

                <div className="flex flex-wrap gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '1800ms' }}>
                  <a href="#contact" className="group relative inline-flex items-center justify-center px-12 py-5 text-base font-black rounded-full text-white bg-brand-orange hover:bg-orange-600 transition-all shadow-2xl shadow-brand-orange/40 uppercase tracking-[0.15em]">
                    <span className="relative z-10 flex items-center">
                        {t.cta}
                        <ChevronRight className="ml-2 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                  <a href="#services" className="inline-flex items-center justify-center px-10 py-5 border-2 border-slate-200 bg-white/50 backdrop-blur-sm text-base font-black rounded-full text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-lg shadow-slate-200/50 uppercase tracking-[0.1em]">
                    {t.learnMore}
                  </a>
                </div>
            </div>

            {/* Right: The Wrapping Scanner Illustration */}
            <div className="relative hidden lg:flex justify-center items-center opacity-0 animate-blur-in" style={{ animationDelay: '1200ms' }}>
                <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
                    
                    {/* Floating Illustration Container */}
                    <div className="w-full h-full animate-[float_8s_ease-in-out_infinite]">
                        <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_45px_45px_rgba(0,0,0,0.1)]">
                            <defs>
                                <clipPath id="scannerClip">
                                    <rect className="animate-[clipScan_6s_linear_infinite]" x="0" y="0" width="500" height="0" />
                                </clipPath>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                                    <feMerge>
                                        <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>

                            <g stroke="#cbd5e1" strokeWidth="1.5">
                                <path d="M120 380 L250 320 L380 380 L250 440 Z" fill="#f8fafc" />
                                <path d="M120 380 V180 L250 120 V320 Z" fill="#f1f5f9" />
                                <path d="M380 380 V180 L250 120 V320 Z" fill="#e2e8f0" />
                                <path d="M120 180 L250 120 L380 180 L250 240 Z" fill="#cbd5e1" />
                                <g fill="#64748b" opacity="0.4">
                                    {[200, 240, 280, 320, 360].map(y => (
                                        <React.Fragment key={y}>
                                            <rect x="145" y={y-15} width="12" height="8" />
                                            <rect x="175" y={y-15} width="12" height="8" />
                                            <rect x="205" y={y-15} width="12" height="8" />
                                            <rect x="280" y={y-15} width="12" height="8" />
                                            <rect x="310" y={y-15} width="12" height="8" />
                                            <rect x="340" y={y-15} width="12" height="8" />
                                        </React.Fragment>
                                    ))}
                                </g>
                            </g>

                            <g clipPath="url(#scannerClip)">
                                <path d="M115 385 V175 L250 110 V320 Z" fill="white" stroke="white" strokeWidth="1" />
                                <path d="M385 385 V175 L250 110 V320 Z" fill="#f8fafc" stroke="white" strokeWidth="1" />
                                <path d="M115 175 L250 110 L385 175 L250 240 Z" fill="white" stroke="#0ea5e9" strokeWidth="2" />
                                <g stroke="#0ea5e9" strokeWidth="2" opacity="0.3">
                                    <path d="M115 220 L250 160 L385 220" fill="none" />
                                    <path d="M115 280 L250 220 L385 280" fill="none" />
                                    <path d="M115 340 L250 280 L385 340" fill="none" />
                                </g>
                                <text x="180" y="260" className="text-[12px] font-black fill-brand-blue/30 tracking-widest select-none" transform="rotate(-25, 180, 260)">SAFE SHIELD</text>
                            </g>

                            <g className="animate-[scanLine_6s_linear_infinite]">
                                <line x1="50" y1="0" x2="450" y2="0" stroke="#0ea5e9" strokeWidth="3" filter="url(#glow)" />
                                <circle cx="50" cy="0" r="4" fill="#0ea5e9" />
                                <circle cx="450" cy="0" r="4" fill="#0ea5e9" />
                                <rect x="248" y="-10" width="4" height="20" fill="#f97316" filter="url(#glow)" />
                            </g>
                        </svg>
                    </div>

                    <div className="absolute top-1/4 -right-8 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-slate-100 animate-[bounce_6s_ease-in-out_infinite]">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                                    <ShieldCheck className="text-brand-blue w-7 h-7" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-orange rounded-full animate-ping"></div>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">Seal Integrity</p>
                                <p className="text-xl font-black text-slate-900 leading-none">HERMETIC</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Bounce Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 animate-bounce opacity-40">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(1deg); }
        }
        @keyframes clipScan {
          0% { height: 0; }
          40% { height: 450px; }
          60% { height: 450px; }
          100% { height: 0; }
        }
        @keyframes scanLine {
          0% { transform: translateY(100px); opacity: 0; }
          5% { opacity: 1; }
          40% { transform: translateY(450px); opacity: 1; }
          60% { transform: translateY(450px); opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateY(100px); opacity: 0; }
        }
      `}} />
    </section>
  );
};

export default Hero;

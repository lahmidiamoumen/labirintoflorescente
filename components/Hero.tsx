
import React from 'react';
import { ChevronRight, ShieldCheck, Plus, Target } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = TRANSLATIONS[language].hero;
  
  return (
    <section id="home" className="relative h-screen min-h-[850px] flex items-center justify-center overflow-hidden bg-white">
      
      {/* 1. Background Layers */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Industrial Project" 
          className="w-full h-full object-cover opacity-60 mix-blend-multiply" 
        />
        
        {/* Entrance Animation */}
        <div className="absolute inset-0 flex pointer-events-none z-30">
            {[0, 100, 200, 300, 400].map((delay, i) => (
                <div 
                    key={i} 
                    className="h-full bg-white flex-1 origin-top animate-column-reveal"
                    style={{ animationDelay: `${delay}ms` }}
                ></div>
            ))}
        </div>

        {/* Architectural Grid Pattern */}
        <div 
          className="absolute inset-0 z-10 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, #cbd5e1 1.5px, transparent 1.5px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        ></div>

        {/* Atmosphere Gradients */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-blue/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-orange/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Fading Mask */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-white via-white/95 to-transparent"></div>
      </div>

      {/* Technical UI Accents */}
      <div className="absolute inset-0 z-25 pointer-events-none select-none">
        <div className="absolute top-24 left-12 opacity-30"><Target size={32} className="text-slate-400" /></div>
        <div className="absolute top-24 right-12 opacity-30"><Target size={32} className="text-slate-400" /></div>
        <div className="absolute bottom-24 left-12 opacity-30"><Plus size={32} className="text-slate-400" /></div>
        <div className="absolute bottom-24 right-12 opacity-30"><Plus size={32} className="text-slate-400" /></div>
      </div>

      {/* Main Container */}
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Messaging */}
            <div className="max-w-3xl">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-blue/20 bg-white/50 backdrop-blur-sm text-brand-blue text-xs font-bold tracking-[0.2em] uppercase mb-10 opacity-0 animate-slide-up shadow-sm" style={{ animationDelay: '800ms' }}>
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  {language === Language.PT ? "Sistemas de Confinamento Premium" : language === Language.FR ? "Systèmes de Confinement Premium" : "Premium Containment Systems"}
                </div>
                
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-slate-900 tracking-tighter mb-10 leading-none">
                  <div className="flex flex-wrap gap-x-6 overflow-hidden">
                    <span className="inline-block opacity-0 animate-text-reveal drop-shadow-sm" style={{ animationDelay: '900ms' }}>SAFE</span>
                    <span className="inline-block text-brand-blue opacity-0 animate-text-reveal drop-shadow-sm" style={{ animationDelay: '1100ms' }}>SHIELD</span>
                  </div>
                </h1>
                
                <div className="relative opacity-0 animate-slide-up" style={{ animationDelay: '1400ms' }}>
                   <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-orange rounded-full"></div>
                   <p className="text-xl md:text-3xl text-slate-700 font-bold pl-8 leading-tight max-w-xl">
                    {t.headline}
                   </p>
                </div>
                
                <p className="text-lg text-slate-500 mt-8 mb-12 max-w-xl font-medium leading-relaxed opacity-0 animate-slide-up" style={{ animationDelay: '1600ms' }}>
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

            {/* Right Column: Advanced SVG Illustration */}
            <div className="relative hidden lg:flex justify-center items-center opacity-0 animate-blur-in" style={{ animationDelay: '1200ms' }}>
                <div className="relative w-full max-w-[550px] aspect-square flex items-center justify-center">
                    
                    {/* Floating Rig Wrapper */}
                    <div className="w-full h-full animate-[float_8s_ease-in-out_infinite]">
                        <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)]">
                            
                            {/* Building Core (Skeleton) */}
                            <g className="opacity-40" stroke="#cbd5e1" strokeWidth="1">
                                <path d="M150 350 L250 300 L350 350 L250 400 Z" fill="#f8fafc" />
                                <path d="M150 350 V200 L250 150 V300 Z" fill="#f1f5f9" />
                                <path d="M350 350 V200 L250 150 V300 Z" fill="#e2e8f0" />
                                
                                {/* Inner Structural Floors */}
                                <path d="M150 300 L250 250 L350 300" fill="none" />
                                <path d="M150 250 L250 200 L350 250" fill="none" />
                            </g>

                            {/* THE WHITE WRAP (Containment Cover) */}
                            <g>
                                {/* The "Cover" Layer - Simulating white table-cover like drape */}
                                <path 
                                    d="M140 340 L250 280 L360 340 L250 410 Z" 
                                    fill="rgba(255, 255, 255, 0.7)" 
                                    className="stroke-white/50 stroke-1"
                                />
                                <path 
                                    d="M140 340 V180 L250 120 V280 Z" 
                                    fill="rgba(255, 255, 255, 0.85)" 
                                    stroke="rgba(255, 255, 255, 1)" 
                                    strokeWidth="1.5"
                                />
                                <path 
                                    d="M360 340 V180 L250 120 V280 Z" 
                                    fill="rgba(255, 255, 255, 0.95)" 
                                    stroke="rgba(255, 255, 255, 1)" 
                                    strokeWidth="1.5"
                                />
                                
                                {/* Top Lid with Glossy Shine */}
                                <path 
                                    d="M140 180 L250 120 L360 180 L250 240 Z" 
                                    fill="white" 
                                    stroke="#0ea5e9" 
                                    strokeWidth="1"
                                    opacity="0.9"
                                />
                                
                                {/* Folds / Texture Lines */}
                                <path d="M140 180 L180 200" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
                                <path d="M360 180 L320 200" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
                                <path d="M250 120 V240" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
                                
                                {/* Tension Points (Orange Grommets) */}
                                <circle cx="140" cy="180" r="3" fill="#f97316" />
                                <circle cx="360" cy="180" r="3" fill="#f97316" />
                                <circle cx="250" cy="120" r="4" fill="#f97316" />
                                <circle cx="250" cy="410" r="3" fill="#f97316" />
                            </g>

                            {/* LASER SCANNING EFFECT */}
                            <g className="animate-[scan_4s_linear_infinite]">
                                <line x1="100" y1="150" x2="400" y2="150" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4 2" opacity="0.4" />
                                <path d="M140 150 L250 90 L360 150" stroke="#0ea5e9" strokeWidth="3" opacity="0.6" fill="none" />
                            </g>

                            {/* Measurement Guidelines */}
                            <g opacity="0.2">
                                <path d="M140 340 L100 360" stroke="#64748b" strokeWidth="1" />
                                <path d="M360 340 L400 360" stroke="#64748b" strokeWidth="1" />
                                <text x="80" y="375" className="text-[10px] fill-slate-500 font-mono">X: 14.5m</text>
                                <text x="370" y="375" className="text-[10px] fill-slate-500 font-mono">Y: 22.1m</text>
                            </g>
                        </svg>
                    </div>

                    {/* Floating Tech Badge */}
                    <div className="absolute top-1/3 -right-6 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-slate-100 animate-[bounce_5s_ease-in-out_infinite]">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                                <ShieldCheck className="text-brand-blue w-7 h-7" />
                            </div>
                            <div className="pr-4">
                                <p className="text-[10px] font-black uppercase text-brand-blue tracking-widest">Seal Integrity</p>
                                <p className="text-xl font-black text-slate-900 leading-none">100%</p>
                            </div>
                        </div>
                    </div>

                    {/* Ground Anchor Lines */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                </div>
            </div>
        </div>
      </div>

      {/* Bounce Scroll Arrow */}
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
        @keyframes scan {
          0% { transform: translateY(-50px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(200px); opacity: 0; }
        }
      `}} />
    </section>
  );
};

export default Hero;

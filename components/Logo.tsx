
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-labelledby="logoTitle"
    >
      <title id="logoTitle">Labirinto Florescente Logo</title>
      
      {/* Hexagon Container (Containment Zone) */}
      <path 
        d="M50 5 L93.3 30 V80 L50 105 L6.7 80 V30 Z" 
        className="stroke-white stroke-[4]"
        strokeLinejoin="round"
      />
      
      {/* Inner Labyrinth (Structural Integrity) */}
      <path 
        d="M30 45 L30 75 L70 75 M70 75 L70 40" 
        className="stroke-slate-400 stroke-[5]" 
        strokeLinecap="square"
      />
      
      {/* Fluorescent Safety Accent (Thermo-Shrink Highlight) */}
      <path 
        d="M93.3 30 L50 5 L6.7 30" 
        className="stroke-brand-orange stroke-[6]"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Center Core */}
      <circle cx="50" cy="55" r="6" className="fill-brand-orange" />
    </svg>
  );
};

export default Logo;

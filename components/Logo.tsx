
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
      
      {/* Isometric Cube (The "Building" / "Containment Unit") */}
      {/* Top Face */}
      <path 
        d="M50 5 L90 25 L50 45 L10 25 Z" 
        className="fill-transparent stroke-white stroke-[3]"
        strokeLinejoin="round"
      />
      
      {/* Right Face */}
      <path 
        d="M90 25 V75 L50 95 V45 Z" 
        className="fill-transparent stroke-slate-300 stroke-[3]"
        strokeLinejoin="round"
      />
      
      {/* Left Face */}
      <path 
        d="M10 25 V75 L50 95 V45 Z" 
        className="fill-transparent stroke-slate-300 stroke-[3]"
        strokeLinejoin="round"
      />

      {/* "Shrink Wrap" Binding Lines (The Containment) */}
      <path 
        d="M10 40 L50 60 L90 40" 
        className="stroke-white stroke-[2] opacity-60"
        fill="none"
      />
      <path 
        d="M10 60 L50 80 L90 60" 
        className="stroke-white stroke-[2] opacity-60"
        fill="none"
      />

      {/* The "Florescente" Safety Strap (Orange Highlight) */}
      <path 
        d="M50 5 V45 L90 25" 
        className="stroke-brand-orange stroke-[4]"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Central Anchor Point */}
      <circle cx="50" cy="45" r="4" className="fill-brand-orange" />
    </svg>
  );
};

export default Logo;

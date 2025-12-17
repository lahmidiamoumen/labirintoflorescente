
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
      <title id="logoTitle">Safe Shield Logo</title>
      
      {/* Isometric Cube (The "Building" / "Containment Unit") */}
      {/* Top Face */}
      <path 
        d="M50 15 L85 32 L50 49 L15 32 Z" 
        className="fill-slate-50 stroke-brand-dark stroke-[3.5]"
        strokeLinejoin="round"
      />
      
      {/* Right Face */}
      <path 
        d="M85 32 V72 L50 89 V49 Z" 
        className="fill-slate-100 stroke-brand-dark stroke-[3.5]"
        strokeLinejoin="round"
      />
      
      {/* Left Face */}
      <path 
        d="M15 32 V72 L50 89 V49 Z" 
        className="fill-slate-200 stroke-brand-dark stroke-[3.5]"
        strokeLinejoin="round"
      />

      {/* The "Safety Wrap" Highlight (Orange Binding Line) */}
      <path 
        d="M15 45 L50 62 L85 45" 
        className="stroke-brand-orange stroke-[4.5]"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Blue Containment Detail */}
      <path 
        d="M50 15 V49" 
        className="stroke-brand-blue stroke-[3.5]"
        strokeLinecap="round"
      />
      
      {/* Central Secure Point */}
      <circle cx="50" cy="49" r="4.5" className="fill-brand-orange" />
    </svg>
  );
};

export default Logo;

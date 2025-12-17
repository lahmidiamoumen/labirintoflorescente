
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
      
      {/* Structural Frame (Now Darker for Contrast) */}
      <path 
        d="M50 8 L92 28 V72 L50 92 L8 72 V28 Z" 
        className="stroke-brand-dark stroke-[5]"
        strokeLinejoin="round"
      />

      {/* Isometric Building Core */}
      <path 
        d="M50 15 L80 30 V60 L50 75 L20 60 V30 Z" 
        className="fill-slate-50 stroke-brand-blue stroke-[3]"
        strokeLinejoin="round"
      />
      
      {/* "The Shield" (The Wrap) */}
      <path 
        d="M50 15 V45 L80 30" 
        className="stroke-brand-orange stroke-[6]"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path 
        d="M20 45 L50 60 L80 45" 
        className="stroke-brand-blue/30 stroke-[2]"
        fill="none"
      />

      {/* Focal Point */}
      <circle cx="50" cy="45" r="5" className="fill-brand-orange shadow-sm" />
    </svg>
  );
};

export default Logo;

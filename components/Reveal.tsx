
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children?: React.ReactNode;
  width?: "fit-content" | "100%";
  mode?: "fade" | "slide" | "blur";
  delay?: number;
}

// Fix: Use React.FC to better support JSX children and resolve 'missing children' type errors in App.tsx
export const Reveal: React.FC<RevealProps> = ({ children, width = "fit-content", mode = "slide", delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getAnimationClass = () => {
    switch (mode) {
      case "fade": return isVisible ? "animate-fade-in" : "opacity-0";
      case "blur": return isVisible ? "animate-blur-in" : "opacity-0 blur-sm";
      case "slide": default: return isVisible ? "animate-slide-up" : "opacity-0 translate-y-10";
    }
  };

  return (
    <div ref={ref} style={{ width, animationDelay: `${delay}ms` }} className={`${getAnimationClass()} transition-all duration-700`}>
      {children}
    </div>
  );
};

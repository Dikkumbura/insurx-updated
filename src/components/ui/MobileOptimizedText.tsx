import React from 'react';
import { useMobileDetection } from '../../hooks/useMobileDetection';

interface MobileOptimizedTextProps {
  children: React.ReactNode;
  variant?: 'hero-title' | 'hero-subtitle' | 'section-title' | 'section-subtitle' | 'body' | 'card-title' | 'card-body';
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const MobileOptimizedText: React.FC<MobileOptimizedTextProps> = ({ 
  children, 
  variant = 'body', 
  className = '', 
  as: Component = 'p' 
}) => {
  const { isMobile, isTablet } = useMobileDetection();

  // Base styles for all variants
  const baseStyles = 'transition-all duration-300 ease-in-out';

  // Variant-specific styles with mobile optimizations
  const variantStyles = {
    'hero-title': isMobile 
      ? `text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight
         text-shadow-lg drop-shadow-2xl
         bg-gradient-to-b from-white to-gray-200 bg-clip-text text-transparent
         [text-shadow:_0_2px_8px_rgba(0,0,0,0.9)]`
      : `text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-heading font-black text-white leading-none
         [text-shadow:_0_0_20px_rgba(0,0,0,0.8),_0_0_40px_rgba(0,0,0,0.6)]`,
    
    'hero-subtitle': isMobile
      ? `text-lg sm:text-xl md:text-2xl font-heading text-gray-200 font-light italic
         bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2 inline-block
         [text-shadow:_0_1px_4px_rgba(0,0,0,0.8)]`
      : `text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading text-gray-200 font-light italic
         [text-shadow:_0_0_15px_rgba(0,0,0,0.8)]`,
    
    'section-title': isMobile
      ? `text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white leading-tight
         [text-shadow:_0_2px_6px_rgba(0,0,0,0.8)]`
      : `text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight
         [text-shadow:_0_2px_8px_rgba(0,0,0,0.6)]`,
    
    'section-subtitle': isMobile
      ? `text-base sm:text-lg font-body text-gray-300 leading-relaxed
         bg-black/30 backdrop-blur-sm rounded-md px-2 py-1 inline-block
         [text-shadow:_0_1px_3px_rgba(0,0,0,0.8)]`
      : `text-lg lg:text-xl font-body text-gray-400 leading-relaxed
         [text-shadow:_0_1px_4px_rgba(0,0,0,0.6)]`,
    
    'body': isMobile
      ? `text-sm sm:text-base font-body text-gray-300 leading-relaxed
         bg-black/20 backdrop-blur-sm rounded px-2 py-1 inline-block
         [text-shadow:_0_1px_2px_rgba(0,0,0,0.7)]`
      : `text-base font-body text-gray-400 leading-relaxed
         [text-shadow:_0_1px_3px_rgba(0,0,0,0.5)]`,
    
    'card-title': isMobile
      ? `text-lg sm:text-xl font-body font-bold text-white leading-tight
         [text-shadow:_0_1px_4px_rgba(0,0,0,0.8)]`
      : `text-xl sm:text-2xl font-body font-bold text-white leading-tight
         [text-shadow:_0_1px_4px_rgba(0,0,0,0.6)]`,
    
    'card-body': isMobile
      ? `text-sm sm:text-base font-body text-gray-300 leading-relaxed
         bg-black/20 backdrop-blur-sm rounded px-2 py-1 inline-block
         [text-shadow:_0_1px_2px_rgba(0,0,0,0.7)]`
      : `text-sm sm:text-base font-body text-gray-400 leading-relaxed
         [text-shadow:_0_1px_3px_rgba(0,0,0,0.5)]`,
  };

  // Combine styles
  const finalClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <Component className={finalClassName}>
      {children}
    </Component>
  );
};

export default MobileOptimizedText; 
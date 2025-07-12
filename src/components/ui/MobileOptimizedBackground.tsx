import React from 'react';
import { ThreeJSHero } from './ThreeJSHero';
import { useMobileDetection } from '../../hooks/useMobileDetection';

interface MobileOptimizedBackgroundProps {
  children?: React.ReactNode;
}

const MobileOptimizedBackground: React.FC<MobileOptimizedBackgroundProps> = ({ children }) => {
  const { isMobile, isLowEndDevice, hasReducedMotion } = useMobileDetection();

  // Use static background only for users who prefer reduced motion or extremely low-end devices
  const useStaticBackground = hasReducedMotion;

  return (
    <>
      {/* Solid Black Background Layer - Always present */}
      <div className="fixed inset-0 w-full h-full bg-black z-[-20]" />
      
      {/* Conditional Background Rendering */}
      {useStaticBackground ? (
        /* Static Background for users with reduced motion preference */
        <div className="fixed inset-0 w-full h-full z-[-15]">
          {/* Static gradient background */}
          <div 
            className="absolute inset-0 w-full h-full opacity-80"
            style={{
              background: `
                linear-gradient(
                  135deg,
                  rgba(0, 0, 0, 0.95) 0%,
                  rgba(13, 13, 13, 0.90) 25%,
                  rgba(26, 26, 26, 0.85) 50%,
                  rgba(13, 13, 13, 0.90) 75%,
                  rgba(0, 0, 0, 0.95) 100%
                )
              `,
            }}
          />
          
          {/* Subtle overlay pattern for texture */}
          <div 
            className="absolute inset-0 w-full h-full opacity-20"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%),
                radial-gradient(circle at 75% 25%, rgba(255,255,255,0.05) 0%, transparent 50%),
                radial-gradient(circle at 25% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)
              `,
              backgroundSize: '60px 60px, 80px 80px, 100px 100px, 120px 120px',
              backgroundPosition: '0 0, 30px 30px, 60px 60px, 90px 90px',
            }}
          />
        </div>
      ) : (
        /* Three.js Background for all devices */
        <ThreeJSHero />
      )}
      
      {/* Global Blurred Overlay - Adjusted for mobile */}
      <div 
        className={`fixed inset-0 z-[-10] ${
          useStaticBackground 
            ? 'bg-black/40 backdrop-blur-sm' 
            : 'bg-black/30 backdrop-blur-sm'
        }`} 
      />
      
      {children}
    </>
  );
};

export default MobileOptimizedBackground; 
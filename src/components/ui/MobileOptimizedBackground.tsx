import React from 'react';
import { ThreeJSHero } from './ThreeJSHero';
import { useMobileDetection } from '../../hooks/useMobileDetection';

interface MobileOptimizedBackgroundProps {
  children?: React.ReactNode;
}

const MobileOptimizedBackground: React.FC<MobileOptimizedBackgroundProps> = ({ children }) => {
  const { isMobile, isLowEndDevice, hasReducedMotion } = useMobileDetection();

  // Use static background for mobile, low-end devices, or users who prefer reduced motion
  const useStaticBackground = isMobile || isLowEndDevice || hasReducedMotion;

  return (
    <>
      {/* Solid Black Background Layer - Always present */}
      <div className="fixed inset-0 w-full h-full bg-black z-[-20]" />
      
      {/* Conditional Background Rendering */}
      {useStaticBackground ? (
        /* Mobile/Low-End Device Background */
        <div className="fixed inset-0 w-full h-full z-[-15]">
          {/* Animated gradient background for mobile */}
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
              backgroundSize: '400% 400%',
              animation: hasReducedMotion ? 'none' : 'mobileGradient 15s ease infinite',
            }}
          />
          
          {/* Subtle overlay pattern for texture */}
          <div 
            className="absolute inset-0 w-full h-full opacity-20"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.08) 0%, transparent 40%),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.04) 0%, transparent 40%)
              `,
              backgroundSize: '80px 80px, 100px 100px', // Adjusted to two sizes
              backgroundPosition: '0 0, 30px 30px', // Adjusted to two positions
              animation: hasReducedMotion ? 'none' : 'mobilePattern 25s linear infinite', // Slightly increased duration
            }}
          />
        </div>
      ) : (
        /* Desktop Three.js Background */
        <ThreeJSHero />
      )}
      
      {/* Global Blurred Overlay - Adjusted for mobile */}
      <div 
        className={`fixed inset-0 z-[-10] ${
          useStaticBackground 
            ? 'bg-black/40 backdrop-blur-sm' 
            : 'bg-black/60 backdrop-blur-sm'
        }`} 
      />
      
      {children}
    </>
  );
};

export default MobileOptimizedBackground; 
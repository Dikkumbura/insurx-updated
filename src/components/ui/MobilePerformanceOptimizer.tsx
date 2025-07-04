import React, { useEffect } from 'react';
import { useMobileDetection } from '../../hooks/useMobileDetection';

interface MobilePerformanceOptimizerProps {
  children: React.ReactNode;
}

const MobilePerformanceOptimizer: React.FC<MobilePerformanceOptimizerProps> = ({ children }) => {
  const { isMobile, isLowEndDevice, hasReducedMotion } = useMobileDetection();

  useEffect(() => {
    // Apply mobile-specific optimizations
    if (isMobile || isLowEndDevice) {
      // Reduce animation duration for mobile devices
      document.documentElement.style.setProperty('--animation-duration', hasReducedMotion ? '0ms' : '200ms');
      
      // Optimize CSS transforms for mobile
      document.documentElement.style.setProperty('--transform-gpu', 'translateZ(0)');
      
      // Reduce backdrop blur on mobile for better performance
      document.documentElement.style.setProperty('--backdrop-blur', hasReducedMotion ? 'none' : 'blur(8px)');
      
      // Optimize scrolling for mobile
      document.documentElement.style.setProperty('--scroll-behavior', hasReducedMotion ? 'auto' : 'smooth');
      
      // Memory optimization: Remove heavy animations on low-end devices
      if (isLowEndDevice) {
        document.documentElement.style.setProperty('--animation-duration', '0ms');
        document.documentElement.style.setProperty('--backdrop-blur', 'none');
        document.documentElement.style.setProperty('--box-shadow', 'none');
        document.documentElement.style.setProperty('--gradient-animation', 'none');
      }
    }

    // Intersection Observer for lazy loading
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          
          // Lazy load images
          if (target.dataset.lazySrc) {
            const img = target as HTMLImageElement;
            img.src = target.dataset.lazySrc;
            img.removeAttribute('data-lazy-src');
            observer.unobserve(target);
          }
          
          // Trigger animations for mobile
          if (target.dataset.animateOnScroll) {
            target.classList.add('animate-in');
            observer.unobserve(target);
          }
        }
      });
    }, observerOptions);

    // Set up lazy loading for images
    const lazyImages = document.querySelectorAll('[data-lazy-src]');
    lazyImages.forEach(img => observer.observe(img));

    // Set up scroll animations
    const animateElements = document.querySelectorAll('[data-animate-on-scroll]');
    animateElements.forEach(element => observer.observe(element));

    return () => {
      observer.disconnect();
      
      // Clean up CSS variables
      document.documentElement.style.removeProperty('--animation-duration');
      document.documentElement.style.removeProperty('--transform-gpu');
      document.documentElement.style.removeProperty('--backdrop-blur');
      document.documentElement.style.removeProperty('--scroll-behavior');
      document.documentElement.style.removeProperty('--box-shadow');
      document.documentElement.style.removeProperty('--gradient-animation');
    };
  }, [isMobile, isLowEndDevice, hasReducedMotion]);

  useEffect(() => {
    // Optimize touch events for mobile
    if (isMobile) {
      // Prevent passive event listeners warning
      const touchOptions = { passive: true };
      
      // Optimize touch scroll
      let ticking = false;
      
      const optimizeScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Throttle scroll events
            ticking = false;
          });
          ticking = true;
        }
      };
      
      document.addEventListener('touchstart', optimizeScroll, touchOptions);
      document.addEventListener('touchmove', optimizeScroll, touchOptions);
      
      return () => {
        document.removeEventListener('touchstart', optimizeScroll);
        document.removeEventListener('touchmove', optimizeScroll);
      };
    }
  }, [isMobile]);

  useEffect(() => {
    // Memory cleanup for mobile devices
    if (isMobile || isLowEndDevice) {
      const cleanupInterval = setInterval(() => {
        // Force garbage collection on mobile (where available)
        if (window.gc) {
          window.gc();
        }
        
        // Clean up unused DOM elements
        const unusedElements = document.querySelectorAll('[data-cleanup="true"]');
        unusedElements.forEach(element => {
          if (!element.getBoundingClientRect().width) {
            element.remove();
          }
        });
      }, 30000); // Clean up every 30 seconds

      return () => {
        clearInterval(cleanupInterval);
      };
    }
  }, [isMobile, isLowEndDevice]);

  return <>{children}</>;
};

export default MobilePerformanceOptimizer; 
import { useState, useEffect } from 'react';

interface MobileDetectionState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenWidth: number;
  screenHeight: number;
  isLandscape: boolean;
  isPortrait: boolean;
  isTouchDevice: boolean;
  hasReducedMotion: boolean;
  isLowEndDevice: boolean;
}

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

export const useMobileDetection = (): MobileDetectionState => {
  const [state, setState] = useState<MobileDetectionState>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    screenWidth: 1920,
    screenHeight: 1080,
    isLandscape: true,
    isPortrait: false,
    isTouchDevice: false,
    hasReducedMotion: false,
    isLowEndDevice: false,
  });

  useEffect(() => {
    const updateMobileState = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const isMobile = screenWidth < MOBILE_BREAKPOINT;
      const isTablet = screenWidth >= MOBILE_BREAKPOINT && screenWidth < TABLET_BREAKPOINT;
      const isDesktop = screenWidth >= TABLET_BREAKPOINT;
      const isLandscape = screenWidth > screenHeight;
      const isPortrait = screenHeight > screenWidth;
      
      // Touch device detection
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // Reduced motion preference
      const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Low-end device detection (only for mobile devices, never flag desktop as low-end)
      const isLowEndDevice = isMobile && (
        (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) ||
        // @ts-ignore - deviceMemory is not in all browsers
        (navigator.deviceMemory && navigator.deviceMemory <= 1) ||
        // Additional heuristics for older mobile devices
        (screenWidth <= 375 && window.devicePixelRatio <= 1)
      );

      setState({
        isMobile,
        isTablet,
        isDesktop,
        screenWidth,
        screenHeight,
        isLandscape,
        isPortrait,
        isTouchDevice,
        hasReducedMotion,
        isLowEndDevice,
      });
    };

    // Initial check
    updateMobileState();

    // Listen for resize events
    window.addEventListener('resize', updateMobileState);
    
    // Listen for orientation changes
    window.addEventListener('orientationchange', updateMobileState);

    // Listen for reduced motion changes
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = () => updateMobileState();
    reducedMotionQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', updateMobileState);
      window.removeEventListener('orientationchange', updateMobileState);
      reducedMotionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return state;
};

// Utility functions for common mobile checks
export const isMobileDevice = (): boolean => {
  return window.innerWidth < MOBILE_BREAKPOINT;
};

export const isTabletDevice = (): boolean => {
  return window.innerWidth >= MOBILE_BREAKPOINT && window.innerWidth < TABLET_BREAKPOINT;
};

export const isDesktopDevice = (): boolean => {
  return window.innerWidth >= TABLET_BREAKPOINT;
};

export const shouldReduceMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const isTouchDevice = (): boolean => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}; 
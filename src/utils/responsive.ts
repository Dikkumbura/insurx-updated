// Responsive utilities for consistent device handling across the app

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  largeTablet: 1200,
  desktop: 1200,
} as const;

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export const getDeviceType = (width: number): DeviceType => {
  if (width < BREAKPOINTS.mobile) return 'mobile';
  if (width < BREAKPOINTS.largeTablet) return 'tablet';
  return 'desktop';
};

export const isMobileWidth = (width: number): boolean => {
  return width < BREAKPOINTS.mobile;
};

export const isTabletWidth = (width: number): boolean => {
  return width >= BREAKPOINTS.mobile && width < BREAKPOINTS.largeTablet;
};

export const isDesktopWidth = (width: number): boolean => {
  return width >= BREAKPOINTS.largeTablet;
};

export const getResponsiveValue = <T>(
  mobile: T,
  tablet: T,
  desktop: T,
  currentWidth: number
): T => {
  const deviceType = getDeviceType(currentWidth);
  switch (deviceType) {
    case 'mobile':
      return mobile;
    case 'tablet':
      return tablet;
    case 'desktop':
      return desktop;
    default:
      return mobile;
  }
};

// Touch device detection utilities
export const isTouchCapable = (): boolean => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Performance utilities
export const shouldReduceAnimations = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const isLowEndDevice = (deviceWidth: number): boolean => {
  // Only consider mobile devices as potentially low-end
  if (!isMobileWidth(deviceWidth)) return false;
  
  return (
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) ||
    // @ts-ignore - deviceMemory is not in all browsers
    (navigator.deviceMemory && navigator.deviceMemory <= 1) ||
    (deviceWidth <= 375 && window.devicePixelRatio <= 1)
  );
};

// Responsive spacing utilities
export const getResponsiveSpacing = (currentWidth: number) => {
  return getResponsiveValue(
    { padding: '1rem', margin: '0.5rem', gap: '0.5rem' }, // mobile
    { padding: '1.5rem', margin: '1rem', gap: '1rem' },   // tablet
    { padding: '2rem', margin: '1.5rem', gap: '1.5rem' }, // desktop
    currentWidth
  );
};

// Font size utilities
export const getResponsiveFontSize = (currentWidth: number) => {
  return getResponsiveValue(
    { 
      heroTitle: 'text-3xl sm:text-4xl',
      sectionTitle: 'text-2xl sm:text-3xl', 
      body: 'text-sm sm:text-base' 
    }, // mobile
    { 
      heroTitle: 'text-4xl md:text-5xl',
      sectionTitle: 'text-3xl md:text-4xl', 
      body: 'text-base md:text-lg' 
    }, // tablet
    { 
      heroTitle: 'text-6xl lg:text-7xl xl:text-8xl',
      sectionTitle: 'text-5xl lg:text-6xl', 
      body: 'text-lg lg:text-xl' 
    }, // desktop
    currentWidth
  );
}; 
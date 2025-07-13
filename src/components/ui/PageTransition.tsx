import React from 'react';
import { useLocation } from 'react-router-dom';
import { useMobileDetection } from '../../hooks/useMobileDetection';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const { isMobile } = useMobileDetection();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Reset visibility and scroll position when route changes
    setIsVisible(false);
    
    // Ensure scroll is at top immediately
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    // For mobile, use immediate visibility to prevent flashing
    if (isMobile) {
      setIsVisible(true);
    } else {
      // For desktop, use a minimal delay for smooth transition
      const timer = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, isMobile]);

  return (
    <div
      className={`min-h-screen transition-opacity duration-200 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ willChange: 'auto' }}
    >
      {children}
    </div>
  );
};

export default PageTransition; 
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use instant instead of smooth to avoid conflicts
    });

    // Also ensure scroll position is reset after a small delay
    // This handles cases where content is still loading
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 100);

    // Cleanup timeout
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop; 
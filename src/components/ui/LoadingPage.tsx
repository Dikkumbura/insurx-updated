import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingPageProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ 
  onLoadingComplete, 
  duration = 3000 
}) => {
  const [progress, setProgress] = useState(0);
  
  // Get responsive logo size
  const getLogoSize = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return '28px'; // Mobile - a bit bigger
      if (window.innerWidth < 768) return '30px'; // Small tablet
      return '32px'; // Desktop
    }
    return '28px'; // Default
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const increment = 100 / (duration / 50);
        const newProgress = Math.min(prev + increment, 100);
        
        if (newProgress >= 100) {
          setTimeout(() => {
            onLoadingComplete?.();
          }, 300);
        }
        
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [duration, onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        
        {/* Logo - Using the actual logo image */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/logo.png" 
            alt="INSURX" 
            className="loading-logo w-auto object-contain mx-auto"
            style={{ 
              height: getLogoSize(),
              maxHeight: getLogoSize() 
            }}
          />
        </motion.div>

        {/* Progress Bar - Thin and professional */}
        <div className="w-48 h-0.5 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          />
        </div>

      </div>
    </div>
  );
};

export default LoadingPage;
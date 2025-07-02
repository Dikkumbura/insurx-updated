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

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const increment = 100 / (duration / 50);
        const newProgress = Math.min(prev + increment, 100);
        
        if (newProgress >= 100) {
          setTimeout(() => {
            onLoadingComplete?.();
          }, 200);
        }
        
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [duration, onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        
        {/* Logo - Smaller and more professional */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/t (1).png" 
            alt="INSURX" 
            className="h-8 w-auto object-contain mx-auto"
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
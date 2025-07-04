import React from 'react';
import { motion } from 'framer-motion';
import { useMobileDetection } from '../../hooks/useMobileDetection';
import MobileOptimizedText from '../ui/MobileOptimizedText';

interface MobileServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  index: number;
  isVisible?: boolean;
}

const MobileServiceCard: React.FC<MobileServiceCardProps> = ({
  title,
  description,
  features,
  icon,
  gradientFrom,
  gradientTo,
  index,
  isVisible = true
}) => {
  const { isMobile, hasReducedMotion } = useMobileDetection();

  // Animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: hasReducedMotion ? 0 : 50,
      scale: hasReducedMotion ? 1 : 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: hasReducedMotion ? 0.1 : 0.6,
        delay: hasReducedMotion ? 0 : index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: hasReducedMotion ? 1 : 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: hasReducedMotion ? 0.1 : 0.4,
        delay: hasReducedMotion ? 0 : index * 0.1 + 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className={`
        relative w-full max-w-lg mx-auto
        ${isMobile 
          ? 'bg-black/50 backdrop-blur-md border border-white/20 rounded-xl p-6 mb-6' 
          : 'bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8'
        }
        touch-target cursor-pointer
        hover:bg-black/60 hover:border-white/30
        transition-all duration-300 ease-in-out
        group
      `}
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      whileHover={hasReducedMotion ? {} : { scale: 1.02 }}
      whileTap={hasReducedMotion ? {} : { scale: 0.98 }}
    >
      {/* Gradient Background Effect */}
      <div 
        className={`
          absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 
          transition-opacity duration-300 ease-in-out
          ${isMobile ? 'rounded-xl' : 'rounded-2xl'}
        `}
        style={{
          background: `linear-gradient(135deg, ${gradientFrom}20, ${gradientTo}20)`
        }}
      />
      
      {/* Card Content */}
      <div className="relative z-10">
        {/* Icon Section */}
        <motion.div
          className="flex items-center justify-center mb-6"
          variants={iconVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div 
            className={`
              ${isMobile ? 'w-16 h-16' : 'w-20 h-20'}
              rounded-full flex items-center justify-center
              border-2 border-white/20
              group-hover:border-white/40
              transition-all duration-300 ease-in-out
            `}
            style={{
              background: `linear-gradient(135deg, ${gradientFrom}30, ${gradientTo}30)`
            }}
          >
            <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} text-white`}>
              {icon}
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <MobileOptimizedText
          variant="card-title"
          as="h3"
          className="text-center mb-4 group-hover:text-gray-100 transition-colors duration-300"
        >
          {title}
        </MobileOptimizedText>

        {/* Description */}
        <MobileOptimizedText
          variant="card-body"
          as="p"
          className="text-center mb-6 group-hover:text-gray-200 transition-colors duration-300"
        >
          {description}
        </MobileOptimizedText>

        {/* Features List */}
        <div className="space-y-3">
          {features.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: hasReducedMotion ? 0 : -20 }}
              animate={isVisible ? { 
                opacity: 1, 
                x: 0,
                transition: {
                  duration: hasReducedMotion ? 0.1 : 0.4,
                  delay: hasReducedMotion ? 0 : index * 0.1 + featureIndex * 0.05 + 0.4,
                  ease: "easeOut"
                }
              } : { opacity: 0, x: hasReducedMotion ? 0 : -20 }}
            >
              <div 
                className={`
                  ${isMobile ? 'w-2 h-2' : 'w-3 h-3'}
                  rounded-full flex-shrink-0
                  group-hover:scale-110 transition-transform duration-300
                `}
                style={{
                  background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`
                }}
              />
              <span className={`
                ${isMobile ? 'text-xs' : 'text-sm'}
                font-body text-gray-300 leading-relaxed
                group-hover:text-gray-200 transition-colors duration-300
              `}>
                {feature}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile-specific Call to Action */}
        {isMobile && (
          <motion.div
            className="mt-6 pt-4 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={isVisible ? { 
              opacity: 1,
              transition: {
                duration: hasReducedMotion ? 0.1 : 0.4,
                delay: hasReducedMotion ? 0 : index * 0.1 + 0.6,
                ease: "easeOut"
              }
            } : { opacity: 0 }}
          >
            <div className="flex items-center justify-center">
              <span className="text-xs font-body text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Tap to learn more
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default MobileServiceCard; 
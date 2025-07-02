import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { SectionProps } from '../../types';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const StyledSection = styled.section<{ $hasBackground?: boolean }>`
  container-type: inline-size;
  background: transparent;
  position: relative;
  
  @container (min-width: 768px) {
    padding: 6rem 0;
  }
  
  @container (min-width: 1024px) {
    padding: 8rem 0;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  
  @container (max-width: 767px) {
    margin-bottom: 3rem;
  }
`;

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.1, 0.25, 1] 
    }
  }
};

const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  title, 
  subtitle 
}) => {
  const { ref, isVisible } = useIntersectionObserver({ 
    triggerOnce: true, 
    threshold: 0.1 
  });

  return (
    <StyledSection
      ref={ref}
      id={id}
      className={`py-24 relative z-10 ${className}`}
      $hasBackground={!!title}
    >
      {/* Semi-transparent background overlay for readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="w-full px-6 lg:px-12">
        {(title || subtitle) && (
          <SectionHeader className="relative z-10">
            {title && (
              <motion.h2
                variants={sectionVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="text-5xl md:text-6xl font-heading font-bold mb-6 text-white"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                variants={sectionVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="text-xl font-body text-gray-400 max-w-5xl mx-auto leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
          </SectionHeader>
        )}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </StyledSection>
  );
};

export default React.memo(Section);
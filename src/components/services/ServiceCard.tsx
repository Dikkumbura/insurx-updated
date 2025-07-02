import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ServiceCardProps } from '../../types';

const Card = styled(motion.div)`
  flex: 1;
  min-width: 250px;
  max-width: 300px;
  background: transparent;
  padding: 2rem 1rem;
  position: relative;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
  
  &:hover {
    border-bottom-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
  
  @media (max-width: 767px) {
    min-width: 100%;
    max-width: 100%;
    flex: none;
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    &:last-child {
      border-bottom: none;
    }
  }
  
  @media (min-width: 768px) {
    border-bottom: none;
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    
    &:last-child {
      border-right: none;
    }
  }
`;

const IconWrapper = styled(motion.div)`
  width: 3rem;
  height: 3rem;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem auto;
  transition: all 0.3s ease;
`;

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: index * 0.1,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -2,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const iconVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

const ServiceCard: React.FC<ServiceCardProps> = React.memo(({ service, index, isVisible = false }) => {
  const IconComponent = service.icon;

  return (
    <Card
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      whileHover="hover"
      custom={index}
      role="article"
      tabIndex={0}
      aria-label={`Service: ${service.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          // Handle card interaction
        }
      }}
    >
      <IconWrapper variants={iconVariants}>
        <IconComponent className="w-6 h-6 text-black" aria-hidden="true" />
      </IconWrapper>
      
      <motion.h3 
        className="text-lg font-heading font-bold text-white mb-3 transition-colors duration-300"
      >
        {service.title}
      </motion.h3>
      
      <motion.p 
        className="font-body text-sm text-gray-400 leading-relaxed"
      >
        {service.description}
      </motion.p>
    </Card>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
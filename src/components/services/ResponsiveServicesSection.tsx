import React from 'react';
import { useMobileDetection } from '../../hooks/useMobileDetection';
import DynamicServicesSection from './DynamicServicesSection';
import MobileOptimizedServicesSection from './MobileOptimizedServicesSection';
import styled from '@emotion/styled';

// Override the desktop section padding for better spacing
const DesktopServicesWrapper = styled.div`
  .services-container {
    /* Reduce excessive padding between hero and services */
    .sticky-header {
      padding-top: 2rem !important;
      padding-bottom: 1rem !important;
      
      @media (min-width: 768px) {
        padding-top: 3rem !important;
        padding-bottom: 1.5rem !important;
      }
      
      @media (min-width: 1024px) {
        padding-top: 4rem !important;
        padding-bottom: 2rem !important;
      }
    }
    
    /* Reduce buffer zone */
    .scroll-buffer {
      height: 5vh !important;
      
      @media (min-width: 768px) {
        height: 8vh !important;
      }
      
      @media (min-width: 1024px) {
        height: 10vh !important;
      }
    }
  }
`;

const ResponsiveServicesSection: React.FC = () => {
  const { isMobile, isTablet } = useMobileDetection();

  // Use mobile version for small screens
  if (isMobile) {
    return <MobileOptimizedServicesSection />;
  }

  // Use desktop version with reduced spacing for tablets and desktop
  return (
    <DesktopServicesWrapper>
      <div className="services-container">
        <DynamicServicesSection />
      </div>
    </DesktopServicesWrapper>
  );
};

export default ResponsiveServicesSection; 
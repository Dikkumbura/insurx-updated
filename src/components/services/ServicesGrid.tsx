import React, { Suspense } from 'react';
import styled from '@emotion/styled';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useServices } from './ServicesContext';
import ServiceCard from './ServiceCard';

const ServicesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  justify-content: center;
  align-items: stretch;
  
  @media (min-width: 768px) {
    gap: 1.5rem;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  
  @media (min-width: 1024px) {
    gap: 2rem;
  }
  
  @media (min-width: 1200px) {
    gap: 2.5rem;
  }
`;

const LoadingSkeleton = styled.div`
  flex: 1;
  min-width: 250px;
  height: 200px;
  background: rgba(255, 255, 255, 0.02);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 1rem;
  
  &::before {
    content: '';
    display: block;
    width: 3rem;
    height: 3rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    margin-bottom: 1rem;
  }
`;

const ServicesGrid: React.FC = () => {
  const { services } = useServices();
  const { ref, isVisible } = useIntersectionObserver({ 
    triggerOnce: true, 
    threshold: 0.1 
  });

  const ServiceCardMemo = React.memo(ServiceCard);

  return (
    <div ref={ref}>
      <Suspense fallback={
        <ServicesList>
          {Array.from({ length: 5 }).map((_, index) => (
            <LoadingSkeleton key={index} />
          ))}
        </ServicesList>
      }>
        <ServicesList role="list" aria-label="AI Services">
          {services.map((service, index) => (
            <ServiceCardMemo
              key={service.id}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </ServicesList>
      </Suspense>
    </div>
  );
};

export default React.memo(ServicesGrid);
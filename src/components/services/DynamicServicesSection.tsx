import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { MessageCircle, Mic, BarChart3, FileCheck, TrendingUp } from 'lucide-react';
import UnderwritingIcon from '../ui/UnderwritingIcon';
import ClaimsProcessingIcon from '../ui/ClaimsProcessingIcon';
import LeadReactivationIcon from '../ui/LeadReactivationIcon';
import ChatAgentIcon from '../ui/ChatAgentIcon';
import VoiceAgentIcon from '../ui/VoiceAgentIcon';

const ServicesContainer = styled.section`
  position: relative;
  z-index: 10;
  background: transparent;
`;

const StickyHeaderContainer = styled.div`
  position: relative;
  z-index: 100;
`;

const StickyHeader = styled.div<{ $isSticky: boolean }>`
  background: transparent;
  backdrop-filter: none;
  padding: 6.5rem 0 2rem 0;
  margin-top: 0;
  border-top: none;
  text-align: center;
  will-change: transform, padding, background;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transition: background 0.4s cubic-bezier(0.4,0,0.2,1),
              padding 0.4s cubic-bezier(0.4,0,0.2,1),
              margin 0.4s cubic-bezier(0.4,0,0.2,1),
              box-shadow 0.4s cubic-bezier(0.4,0,0.2,1);
  box-shadow: ${({ $isSticky }) => $isSticky ? '0 4px 24px 0 rgba(0,0,0,0.25)' : 'none'};
  
  @media (max-width: 768px) {
    padding: 6rem 0 1.5rem 0;
    margin-top: 0;
    border-top: none;
  }
`;

const HeaderTitle = styled.h2`
  font-size: clamp(2rem, 8vw, 5rem);
  font-weight: bold;
  margin-bottom: 0;
  color: white;
  line-height: 1.1;
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  
  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 6vw, 2.5rem);
    line-height: 1.2;
  }
`;

const ScrollBuffer = styled.div`
  height: 20vh;
  background: transparent;
  position: relative;
  z-index: 50;
`;

const ServicesContent = styled.div`
  position: relative;
  z-index: 50;
  background: transparent;
  min-height: 450vh; // Proper height for well-spaced services
`;

const ServiceItem = styled.article`
  position: absolute;
  top: 80vh;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 3rem 0;
  min-height: 80vh;
  opacity: 0;
  transform: translateY(100vh);
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 32px;
  margin: 0 2rem;
  
  @media (max-width: 1024px) {
    min-height: auto;
    padding: 2rem 0;
    flex-direction: column;
    text-align: center;
    margin: 0 1rem;
    border-radius: 24px;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem 0;
    margin: 0 0.5rem;
    border-radius: 20px;
    min-height: auto;
  }
`;

const ServiceContent = styled.div`
  flex: 0 0 45%;
  padding: 0 2rem;
  max-width: 100%;
  opacity: 0;
  transform: translateX(-100px);
  
  @media (max-width: 1024px) {
    padding: 1rem;
    order: 2;
    max-width: none;
    transform: translateX(0) translateY(50px);
    flex: 1;
  }
  
  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
    order: 1;
    width: 100%;
  }
`;

const ServiceTitle = styled.h3`
  font-size: clamp(1.125rem, 5vw, 3.5rem);
  font-weight: bold;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 18px !important;
    line-height: 1.4 !important;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const ServiceDescription = styled.p`
  font-size: clamp(0.875rem, 2.5vw, 1.25rem);
  color: #d1d5db;
  line-height: 1.7;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 14px !important;
    line-height: 1.4 !important;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const ServiceImage = styled.div`
  flex: 0 0 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  opacity: 0;
  transform: translateX(100px);
  height: 100%;
  min-height: 600px;
  
  @media (max-width: 1024px) {
    padding: 1rem;
    order: 1;
    margin-bottom: 2rem;
    max-width: 100%;
    transform: translateX(0) translateY(-50px);
    flex: 1;
    min-height: 400px;
  }
  
  @media (max-width: 768px) {
    display: none; /* Hide complex icons on mobile */
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
  
  @media (max-width: 1024px) {
    max-width: 100%;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    
    svg {
      max-width: 100% !important;
      max-height: 100% !important;
      width: auto !important;
      height: auto !important;
      transform: scale(0.85) !important;
    }
  }
  
  @media (max-width: 480px) {
    svg {
      transform: scale(0.75) !important;
    }
  }
`;

const IconPlaceholder = styled.div`
  width: 120px;
  height: 120px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    margin-top: 1rem;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem;
    gap: 0.5rem;
    
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const FeatureText = styled.span`
  font-size: clamp(0.75rem, 2vw, 1rem);
  color: #e5e7eb;
  
  @media (max-width: 768px) {
    font-size: 14px !important;
  }
`;

const services = [
  {
    id: 'chat-agents',
    title: 'AI Chat Agents',
    description: 'Never lose another customer to poor service. Our AI chat agents handle 95% of inquiries instantly, converting 3x more prospects while your team sleeps. Customers get immediate answers, you get higher satisfaction scores and more closed deals.',
    features: ['Convert 24/7 Even While You Sleep', 'Handle 500+ Conversations Simultaneously', 'Reduce Response Time to Under 30 Seconds', 'Increase Customer Satisfaction by 40%'],
    icon: MessageCircle,
    image: '/Layer 1.png',
    hasImage: false
  },
  {
    id: 'voice-agents',
    title: 'AI Voice Agents',
    description: 'Stop missing sales calls and losing qualified leads. Our AI voice agents make 1000+ outbound calls per day, qualify prospects in real-time, and book appointments automatically. Turn your phone into a 24/7 revenue generating machine.',
    features: ['Make 1000+ Calls Per Day Automatically', 'Qualify Leads in Real-Time', 'Book Appointments While You Focus on Closing', 'Increase Call-to-Sale Conversion by 60%'],
    icon: Mic,
    image: '/Layer 2.png',
    hasImage: false
  },
  {
    id: 'underwriting',
    title: 'AI Underwriting',
    description: 'Cut underwriting time from days to minutes and approve 40% more profitable policies. Our AI analyzes 200+ risk factors instantly, eliminates human error, and identifies opportunities your competitors miss. More approvals, better profits, zero delays.',
    features: ['Approve Policies in Under 5 Minutes', 'Increase Profitable Approvals by 40%', 'Eliminate 99% of Human Underwriting Errors', 'Process 10x More Applications Daily'],
    icon: BarChart3,
    hasImage: false
  },
  {
    id: 'claims-processing',
    title: 'Claims Processing',
    description: 'Transform customer complaints into customer loyalty. Process claims 85% faster, reduce disputes by 70%, and turn claim settlements into retention opportunities. Happy customers refer more business - our AI makes every claim a positive experience.',
    features: ['Process Claims 85% Faster', 'Reduce Claim Disputes by 70%', 'Automate 90% of Paperwork', 'Turn Claimants into Brand Advocates'],
    icon: FileCheck,
    hasImage: false
  },
  {
    id: 'lead-reactivation',
    title: 'Lead Re-activation',
    description: 'Your old leads are sitting on millions in untapped revenue. Our AI resurrects "dead" leads, personalizes re-engagement campaigns, and converts 25% of dormant prospects into paying customers. Stop buying new leads - monetize the ones you already have.',
    features: ['Reactivate 25% of "Dead" Leads', 'Generate Revenue from Existing Database', 'Personalize Outreach at Scale', 'Reduce Lead Acquisition Costs by 60%'],
    icon: TrendingUp,
    hasImage: false
  }
];

const DynamicServicesSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headerContainerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const bufferRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLElement | null)[]>([]);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  return (
    <ServicesContainer ref={containerRef} id="services-section">
      <StickyHeaderContainer ref={headerContainerRef}>
        <StickyHeader ref={headerRef} $isSticky={isHeaderSticky} className="sticky-header">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <HeaderTitle className="font-heading">
              AI-Powered Solutions
            </HeaderTitle>
          </div>
        </StickyHeader>
      </StickyHeaderContainer>

      {/* Buffer zone */}
      <ScrollBuffer ref={bufferRef} className="scroll-buffer" />

      <ServicesContent ref={contentRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <ServiceItem 
                key={service.id}
                ref={el => serviceRefs.current[index] = el}
                style={{ 
                  position: 'relative',
                  top: 'auto',
                  opacity: 1,
                  transform: 'none',
                  marginBottom: '4rem'
                }}
              >
                {/* Content */}
                <ServiceContent 
                  className="service-content"
                  style={{ 
                    order: isEven ? 1 : 2,
                    opacity: 1,
                    transform: 'none'
                  }}
                >
                  <div className="mb-6">
                    <ServiceTitle className="font-heading">
                      {service.id === 'lead-reactivation' ? (
                        <>
                          Lead<br />
                          <span style={{ whiteSpace: 'nowrap' }}>Re-activation</span>
                        </>
                      ) : (
                        service.title
                      )}
                    </ServiceTitle>
                    <ServiceDescription className="font-body">
                      {service.description}
                    </ServiceDescription>
                  </div>
                  
                  <FeaturesGrid>
                    {service.features.map((feature, featureIndex) => (
                      <FeatureItem 
                        key={featureIndex}
                        className="feature-item"
                        style={{
                          opacity: 1,
                          transform: 'none'
                        }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <FeatureText className="font-body">{feature}</FeatureText>
                      </FeatureItem>
                    ))}
                  </FeaturesGrid>
                </ServiceContent>

                {/* Image */}
                <ServiceImage 
                  className="service-image"
                  style={{ 
                    order: isEven ? 2 : 1,
                    opacity: 1,
                    transform: 'none'
                  }}
                >
                  <ImageContainer>
                    {service.id === 'chat-agents' ? (
                      <div className="w-full h-full min-h-[500px] flex items-center justify-center">
                        <ChatAgentIcon />
                      </div>
                    ) : service.id === 'voice-agents' ? (
                      <div className="w-full h-full min-h-[500px] flex items-center justify-center">
                        <VoiceAgentIcon />
                      </div>
                    ) : service.id === 'underwriting' ? (
                      <div className="w-full h-full min-h-[500px] flex items-center justify-center">
                        <UnderwritingIcon />
                      </div>
                    ) : service.id === 'claims-processing' ? (
                      <div className="w-full h-full min-h-[500px] flex items-center justify-center">
                        <ClaimsProcessingIcon />
                      </div>
                    ) : service.id === 'lead-reactivation' ? (
                      <div className="w-full h-full min-h-[500px] flex items-center justify-center">
                        <LeadReactivationIcon />
                      </div>
                    ) : service.hasImage && service.image ? (
                      <img 
                        src={service.image} 
                        alt={service.title}
                        loading="lazy"
                      />
                    ) : (
                      <IconPlaceholder>
                        <IconComponent className="w-16 h-16 text-black" />
                      </IconPlaceholder>
                    )}
                  </ImageContainer>
                </ServiceImage>
              </ServiceItem>
            );
          })}
        </div>
      </ServicesContent>
      
      {/* Additional buffer space */}
      <div className="h-[20vh] bg-transparent relative z-10"></div>
    </ServicesContainer>
  );
};

export default DynamicServicesSection;
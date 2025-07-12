import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mic, BarChart3, FileCheck, TrendingUp } from 'lucide-react';
import { useMobileDetection } from '../../hooks/useMobileDetection';
import DynamicServicesSection from './DynamicServicesSection';
import MobileServiceCard from './MobileServiceCard';
import MobileOptimizedText from '../ui/MobileOptimizedText';

const services = [
  {
    id: 'chat-agents',
    title: 'AI Chat Agents',
    description: 'Never lose another customer to poor service. Our AI chat agents handle 95% of inquiries instantly, converting 3x more prospects while your team sleeps.',
    features: ['Convert 24/7 Even While You Sleep', 'Handle 500+ Conversations Simultaneously', 'Reduce Response Time to Under 30 Seconds', 'Increase Customer Satisfaction by 40%'],
    icon: <MessageCircle className="w-full h-full" />,
    gradientFrom: '#3B82F6',
    gradientTo: '#1D4ED8'
  },
  {
    id: 'voice-agents',
    title: 'AI Voice Agents',
    description: 'Stop missing sales calls and losing qualified leads. Our AI voice agents make 1000+ outbound calls per day, qualifying prospects in real-time.',
    features: ['Make 1000+ Calls Per Day Automatically', 'Qualify Leads in Real-Time', 'Book Appointments While You Focus on Closing', 'Increase Call-to-Sale Conversion by 60%'],
    icon: <Mic className="w-full h-full" />,
    gradientFrom: '#10B981',
    gradientTo: '#059669'
  },
  {
    id: 'underwriting',
    title: 'AI Underwriting',
    description: 'Cut underwriting time from days to minutes and approve 40% more profitable policies. Our AI analyzes 200+ risk factors instantly.',
    features: ['Approve Policies in Under 5 Minutes', 'Increase Profitable Approvals by 40%', 'Eliminate 99% of Human Underwriting Errors', 'Process 10x More Applications Daily'],
    icon: <BarChart3 className="w-full h-full" />,
    gradientFrom: '#F59E0B',
    gradientTo: '#D97706'
  },
  {
    id: 'claims-processing',
    title: 'Claims Processing',
    description: 'Transform customer complaints into customer loyalty. Process claims 85% faster, reduce disputes by 70%, and turn claim settlements into retention opportunities.',
    features: ['Process Claims 85% Faster', 'Reduce Claim Disputes by 70%', 'Automate 90% of Paperwork', 'Turn Claimants into Brand Advocates'],
    icon: <FileCheck className="w-full h-full" />,
    gradientFrom: '#EF4444',
    gradientTo: '#DC2626'
  },
  {
    id: 'lead-reactivation',
    title: 'Lead Re-activation',
    description: 'Your old leads are sitting on millions in untapped revenue. Our AI resurrects "dead" leads, personalizing re-engagement campaigns.',
    features: ['Reactivate 25% of "Dead" Leads', 'Generate Revenue from Existing Database', 'Personalize Outreach at Scale', 'Reduce Lead Acquisition Costs by 60%'],
    icon: <TrendingUp className="w-full h-full" />,
    gradientFrom: '#8B5CF6',
    gradientTo: '#7C3AED'
  }
];

const MobileOptimizedServicesSection: React.FC = () => {
  const { isMobile } = useMobileDetection();

  if (!isMobile) {
    // Use the existing desktop version
    return <DynamicServicesSection />;
  }

  // Mobile-optimized version
  return (
    <section 
      id="services-section"
      className="py-4 sm:py-8 relative z-10"
    >
      {/* Semi-transparent background for readability */}
      <div className="absolute inset-0 bg-white/2 backdrop-blur-sm" />
      
      <div className="relative z-10 px-4 sm:px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <MobileOptimizedText
            variant="section-title"
            as="h2"
            className="mb-4"
          >
            AI-Powered Solutions
          </MobileOptimizedText>
          <MobileOptimizedText
            variant="section-subtitle"
            as="p"
            className="max-w-2xl mx-auto"
          >
            Revolutionary AI tools that transform how insurance agencies operate, 
            letting you focus on growth while technology handles the rest.
          </MobileOptimizedText>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <MobileServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              features={service.features}
              icon={service.icon}
              gradientFrom={service.gradientFrom}
              gradientTo={service.gradientTo}
              index={index}
              isVisible={true}
            />
          ))}
        </div>


      </div>
    </section>
  );
};

export default MobileOptimizedServicesSection; 
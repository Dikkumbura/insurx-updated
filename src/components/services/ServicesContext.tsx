import React, { createContext, useContext, useMemo } from 'react';
import { ServiceFeature } from '../../types';
import { MessageCircle, Mic, BarChart3, FileCheck, TrendingUp } from 'lucide-react';

interface ServicesContextValue {
  services: ServiceFeature[];
  getServiceById: (id: string) => ServiceFeature | undefined;
  getServicesByCategory: (category: string) => ServiceFeature[];
}

const ServicesContext = createContext<ServicesContextValue | undefined>(undefined);

const servicesData: ServiceFeature[] = [
  {
    id: 'chat-agents',
    title: "AI Chat Agents",
    description: "Intelligent conversational AI that handles customer inquiries, policy questions, and claims support 24/7 with human-like understanding and empathy.",
    icon: MessageCircle,
    features: ["24/7 Availability", "Multi-language Support", "Context Awareness"]
  },
  {
    id: 'voice-agents',
    title: "AI Voice Agents",
    description: "Advanced voice AI representatives that conduct sales calls, handle customer service, and manage policy renewals with natural conversation flow.",
    icon: Mic,
    features: ["Natural Speech", "Emotional Intelligence", "Call Analytics"]
  },
  {
    id: 'underwriting',
    title: "AI Underwriting",
    description: "Sophisticated risk assessment AI that analyzes applications, evaluates risk factors, and makes underwriting decisions with unprecedented accuracy.",
    icon: BarChart3,
    features: ["Risk Analysis", "Instant Decisions", "Fraud Detection"]
  },
  {
    id: 'claims-processing',
    title: "Claims Processing",
    description: "Streamlined claims processing AI that automates documentation review, damage assessment, and settlement calculations for faster resolutions.",
    icon: FileCheck,
    features: ["Document Processing", "Damage Assessment", "Quick Settlements"]
  },
  {
    id: 'lead-reactivation',
    title: "Lead Re-activation",
    description: "Intelligent lead nurturing AI that re-engages dormant prospects, personalizes outreach campaigns, and converts cold leads into active customers.",
    icon: TrendingUp,
    features: ["Behavioral Analysis", "Personalized Outreach", "Conversion Optimization"]
  }
];

export const ServicesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const contextValue = useMemo<ServicesContextValue>(() => ({
    services: servicesData,
    getServiceById: (id: string) => servicesData.find(service => service.id === id),
    getServicesByCategory: (category: string) => servicesData.filter(service => 
      service.features?.some(feature => feature.toLowerCase().includes(category.toLowerCase()))
    )
  }), []);

  return (
    <ServicesContext.Provider value={contextValue}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = (): ServicesContextValue => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error('useServices must be used within a ServicesProvider');
  }
  return context;
};
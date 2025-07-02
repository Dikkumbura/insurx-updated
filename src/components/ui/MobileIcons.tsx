import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

// Mobile-optimized icon wrapper with proper touch targets
interface MobileIconProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

export const MobileIcon: React.FC<MobileIconProps> = ({ 
  icon: Icon, 
  size = 'md', 
  className = '',
  label 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4', // 16px
    md: 'w-6 h-6', // 24px  
    lg: 'w-8 h-8'  // 32px
  };

  const containerSizes = {
    sm: 'w-10 h-10', // 40px container (minimum 44px with padding)
    md: 'w-11 h-11', // 44px container
    lg: 'w-12 h-12'  // 48px container
  };

  return (
    <div 
      className={`mobile-icon-container ${containerSizes[size]} flex items-center justify-center p-2 ${className}`}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      <Icon className={`${sizeClasses[size]} text-current`} />
    </div>
  );
};

// Simplified Chat Agent Icon for Mobile
export const MobileChatAgentIcon: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 120 80" 
        className="w-full h-full max-w-[300px] max-h-[200px]"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Simplified Chat Interface */}
        <rect
          x="10"
          y="15"
          width="50"
          height="50"
          rx="8"
          fill="rgba(255, 255, 255, 0.03)"
          stroke="white"
          strokeWidth="1.5"
        />
        
        {/* Chat Header */}
        <rect x="15" y="20" width="40" height="8" rx="2" fill="rgba(255, 255, 255, 0.1)" />
        <text x="35" y="26" fill="white" fontSize="4" fontWeight="600" textAnchor="middle">AI CHAT</text>
        
        {/* Message Bubbles - Simplified */}
        <rect x="20" y="32" width="25" height="6" rx="3" fill="rgba(255, 255, 255, 0.08)" />
        <rect x="18" y="42" width="30" height="6" rx="3" fill="rgba(255, 255, 255, 0.12)" />
        
        {/* AI Processor - Simplified */}
        <circle
          cx="85"
          cy="40"
          r="18"
          fill="rgba(255, 255, 255, 0.03)"
          stroke="white"
          strokeWidth="1.5"
        />
        
        {/* Neural Network - Simplified */}
        <circle cx="80" cy="35" r="1.5" fill="white" />
        <circle cx="90" cy="35" r="1.5" fill="white" />
        <circle cx="85" cy="40" r="2" fill="white" />
        <circle cx="80" cy="45" r="1.5" fill="white" />
        <circle cx="90" cy="45" r="1.5" fill="white" />
        
        {/* Connections */}
        <path d="M80 35 L85 40 M90 35 L85 40 M80 45 L85 40 M90 45 L85 40" 
              stroke="white" strokeWidth="0.5" opacity="0.6" />
        
        <text x="85" y="65" fill="white" fontSize="4" fontWeight="600" textAnchor="middle">AI ENGINE</text>
      </svg>
    </div>
  );
};

// Simplified Voice Agent Icon for Mobile
export const MobileVoiceAgentIcon: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 120 80" 
        className="w-full h-full max-w-[300px] max-h-[200px]"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Phone Interface - Simplified */}
        <rect
          x="10"
          y="15"
          width="40"
          height="50"
          rx="8"
          fill="rgba(255, 255, 255, 0.03)"
          stroke="white"
          strokeWidth="1.5"
        />
        
        {/* Phone Icon */}
        <circle cx="20" cy="25" r="4" fill="rgba(255, 255, 255, 0.1)" stroke="white" strokeWidth="1" />
        <path d="M18 23 L22 27 M18 27 L22 23" stroke="white" strokeWidth="1" strokeLinecap="round" />
        
        {/* Waveform - Simplified */}
        <rect x="15" y="45" width="2" height="8" fill="white" rx="1" />
        <rect x="20" y="42" width="2" height="14" fill="white" rx="1" />
        <rect x="25" y="40" width="2" height="18" fill="white" rx="1" />
        <rect x="30" y="43" width="2" height="12" fill="white" rx="1" />
        <rect x="35" y="46" width="2" height="6" fill="white" rx="1" />
        <rect x="40" y="44" width="2" height="10" fill="white" rx="1" />
        
        {/* Voice Processor */}
        <circle
          cx="85"
          cy="40"
          r="18"
          fill="rgba(255, 255, 255, 0.03)"
          stroke="white"
          strokeWidth="1.5"
        />
        
        {/* Microphone Icon - Simplified */}
        <rect x="82" y="35" width="6" height="8" rx="3" fill="rgba(255, 255, 255, 0.1)" stroke="white" strokeWidth="1" />
        <rect x="84" y="43" width="2" height="2" fill="white" />
        <path d="M80 45 L90 45" stroke="white" strokeWidth="1" strokeLinecap="round" />
        
        {/* Voice Waves */}
        <circle cx="85" cy="40" r="12" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
        <circle cx="85" cy="40" r="15" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.5" />
        
        <text x="85" y="65" fill="white" fontSize="4" fontWeight="600" textAnchor="middle">VOICE AI</text>
      </svg>
    </div>
  );
};

// Simplified Underwriting Icon for Mobile
export const MobileUnderwritingIcon: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 120 80" 
        className="w-full h-full max-w-[300px] max-h-[200px]"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Document - Simplified */}
        <rect
          x="15"
          y="10"
          width="50"
          height="60"
          rx="6"
          fill="rgba(255, 255, 255, 0.03)"
          stroke="white"
          strokeWidth="1.5"
        />
        
        {/* Document Content Lines */}
        <rect x="20" y="18" width="30" height="2" fill="white" rx="1" />
        <rect x="20" y="24" width="25" height="2" fill="white" rx="1" />
        <rect x="20" y="30" width="35" height="2" fill="white" rx="1" />
        
        {/* AI Analysis Circle */}
        <circle
          cx="40"
          cy="45"
          r="12"
          fill="rgba(255, 255, 255, 0.05)"
          stroke="white"
          strokeWidth="1.5"
        />
        
        {/* Checkmark */}
        <path d="M35 45 L38 48 L45 42" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Risk Analysis Bars */}
        <rect x="75" y="25" width="6" height="40" rx="3" fill="rgba(255, 255, 255, 0.03)" stroke="white" strokeWidth="1" />
        
        {/* Risk Bars - Simplified */}
        <rect x="77" y="55" width="2" height="8" fill="white" rx="1" />
        <rect x="81" y="50" width="2" height="13" fill="white" rx="1" />
        <rect x="85" y="52" width="2" height="11" fill="white" rx="1" />
        <rect x="89" y="48" width="2" height="15" fill="white" rx="1" />
        <rect x="93" y="53" width="2" height="10" fill="white" rx="1" />
        
        <text x="40" y="75" fill="white" fontSize="4" fontWeight="600" textAnchor="middle">UNDERWRITING</text>
        <text x="88" y="75" fill="white" fontSize="4" fontWeight="600" textAnchor="middle">ANALYSIS</text>
      </svg>
    </div>
  );
};

// Simplified Claims Processing Icon for Mobile
export const MobileClaimsProcessingIcon: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 120 80" 
        className="w-full h-full max-w-[300px] max-h-[200px]"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Claims Document Stack - Simplified */}
        <rect x="10" y="15" width="45" height="50" rx="6" fill="rgba(255, 255, 255, 0.02)" stroke="white" strokeWidth="1" />
        <rect x="12" y="13" width="45" height="50" rx="6" fill="rgba(255, 255, 255, 0.03)" stroke="white" strokeWidth="1.5" />
        
        {/* Document Header */}
        <text x="35" y="25" fill="white" fontSize="4" fontWeight="600" textAnchor="middle">CLAIM #C2024</text>
        
        {/* Document Lines */}
        <rect x="18" y="30" width="30" height="1.5" fill="white" rx="1" />
        <rect x="18" y="35" width="25" height="1.5" fill="white" rx="1" />
        <rect x="18" y="40" width="32" height="1.5" fill="white" rx="1" />
        
        {/* Damage Assessment Area */}
        <rect x="18" y="45" width="30" height="15" rx="4" fill="rgba(255, 255, 255, 0.02)" stroke="white" strokeWidth="1" strokeDasharray="2,2" />
        
        {/* AI Scanner Line */}
        <rect x="18" y="52" width="30" height="1" fill="rgba(255, 255, 255, 0.4)" rx="1" />
        
        {/* Processing Pipeline - Simplified */}
        <rect x="70" y="20" width="30" height="40" rx="6" fill="rgba(255, 255, 255, 0.02)" stroke="white" strokeWidth="1" />
        
        {/* Pipeline Steps */}
        <rect x="75" y="25" width="20" height="8" rx="2" fill="rgba(255, 255, 255, 0.05)" stroke="white" strokeWidth="1" />
        <text x="85" y="30" fill="white" fontSize="3" fontWeight="600" textAnchor="middle">SCAN</text>
        
        <rect x="75" y="36" width="20" height="8" rx="2" fill="rgba(255, 255, 255, 0.05)" stroke="white" strokeWidth="1" />
        <text x="85" y="41" fill="white" fontSize="3" fontWeight="600" textAnchor="middle">ANALYZE</text>
        
        <rect x="75" y="47" width="20" height="8" rx="2" fill="rgba(255, 255, 255, 0.08)" stroke="white" strokeWidth="1" />
        <text x="85" y="52" fill="white" fontSize="3" fontWeight="600" textAnchor="middle">APPROVE</text>
        
        {/* Connection Arrow */}
        <path d="M55 45 L70 45" stroke="white" strokeWidth="1" strokeDasharray="2,2" />
        <path d="M67 42 L70 45 L67 48" stroke="white" strokeWidth="1" strokeLinecap="round" />
        
        <text x="35" y="75" fill="white" fontSize="4" fontWeight="600" textAnchor="middle">CLAIMS PROCESSING</text>
      </svg>
    </div>
  );
};

// Simplified Lead Reactivation Icon for Mobile
export const MobileLeadReactivationIcon: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 120 80" 
        className="w-full h-full max-w-[300px] max-h-[200px]"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Lead Database - Simplified */}
        <rect
          x="10"
          y="10"
          width="50"
          height="25"
          rx="4"
          fill="rgba(255, 255, 255, 0.02)"
          stroke="white"
          strokeWidth="1.5"
        />
        
        <text x="35" y="18" fill="white" fontSize="3" fontWeight="600" textAnchor="middle">LEAD DATABASE</text>
        
        {/* Lead Entries - Simplified */}
        <rect x="15" y="22" width="18" height="4" rx="1" fill="rgba(255, 255, 255, 0.05)" stroke="white" strokeWidth="0.5" />
        <circle cx="31" cy="24" r="1" fill="rgba(255, 165, 0, 0.8)" />
        
        <rect x="37" y="22" width="18" height="4" rx="1" fill="rgba(255, 255, 255, 0.05)" stroke="white" strokeWidth="0.5" />
        <circle cx="53" cy="24" r="1" fill="rgba(239, 68, 68, 0.8)" />
        
        <rect x="15" y="28" width="18" height="4" rx="1" fill="rgba(255, 255, 255, 0.05)" stroke="white" strokeWidth="0.5" />
        <circle cx="31" cy="30" r="1" fill="rgba(34, 197, 94, 0.8)" />
        
        <rect x="37" y="28" width="18" height="4" rx="1" fill="rgba(255, 255, 255, 0.05)" stroke="white" strokeWidth="0.5" />
        <circle cx="53" cy="30" r="1" fill="rgba(34, 197, 94, 0.8)" />
        
        {/* AI Categorizer - Simplified */}
        <circle
          cx="35"
          cy="50"
          r="12"
          fill="rgba(255, 255, 255, 0.03)"
          stroke="white"
          strokeWidth="1.5"
        />
        
        {/* AI Brain */}
        <circle cx="35" cy="47" r="3" fill="rgba(255, 255, 255, 0.1)" stroke="white" strokeWidth="1" />
        
        {/* Processing Waves */}
        <path d="M30 45 Q35 42 40 45" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1" />
        <path d="M30 50 Q35 53 40 50" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.5" />
        
        <text x="35" y="58" fill="white" fontSize="3" fontWeight="600" textAnchor="middle">AI ENGINE</text>
        
        {/* Outreach Campaigns - Simplified */}
        <rect
          x="70"
          y="15"
          width="40"
          height="50"
          rx="4"
          fill="rgba(255, 255, 255, 0.02)"
          stroke="white"
          strokeWidth="1.5"
        />
        
        <text x="90" y="23" fill="white" fontSize="3" fontWeight="600" textAnchor="middle">CAMPAIGNS</text>
        
        {/* Campaign Types */}
        <rect x="75" y="28" width="15" height="10" rx="2" fill="rgba(255, 255, 255, 0.05)" stroke="white" strokeWidth="1" />
        <text x="82" y="33" fill="white" fontSize="2.5" fontWeight="600" textAnchor="middle">EMAIL</text>
        
        <rect x="92" y="28" width="15" height="10" rx="2" fill="rgba(255, 255, 255, 0.05)" stroke="white" strokeWidth="1" />
        <text x="99" y="33" fill="white" fontSize="2.5" fontWeight="600" textAnchor="middle">PHONE</text>
        
        <rect x="75" y="42" width="15" height="10" rx="2" fill="rgba(255, 255, 255, 0.05)" stroke="white" strokeWidth="1" />
        <text x="82" y="47" fill="white" fontSize="2.5" fontWeight="600" textAnchor="middle">SOCIAL</text>
        
        {/* Results */}
        <rect x="92" y="42" width="15" height="10" rx="2" fill="rgba(255, 255, 255, 0.08)" stroke="white" strokeWidth="1" />
        <text x="99" y="46" fill="white" fontSize="2" fontWeight="500" textAnchor="middle">RESULTS</text>
        <text x="99" y="50" fill="white" fontSize="4" fontWeight="700" textAnchor="middle">67%</text>
        
        {/* Connection Arrows */}
        <path d="M35 35 L35 38" stroke="white" strokeWidth="1" strokeDasharray="1,1" />
        <path d="M47 50 L70 50" stroke="white" strokeWidth="1" strokeDasharray="1,1" />
        
        <text x="90" y="75" fill="white" fontSize="3" fontWeight="600" textAnchor="middle">LEAD REACTIVATION</text>
      </svg>
    </div>
  );
};
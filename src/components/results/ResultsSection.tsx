import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Target, Zap } from 'lucide-react';

const results = [
  {
    id: 'conversion',
    icon: TrendingUp,
    value: '347%',
    label: 'ROI in First Year',
    description: 'Agencies see an average 347% return on investment within 12 months of implementing our AI solutions.',
    color: 'rgba(34, 197, 94, 0.8)' // Green
  },
  {
    id: 'efficiency',
    icon: Zap,
    value: '18hrs',
    label: 'Saved Per Day',
    description: 'Free up 18 hours daily by automating repetitive tasks, allowing focus on high-value activities.',
    color: 'rgba(59, 130, 246, 0.8)' // Blue
  },
  {
    id: 'accuracy',
    icon: Target,
    value: '99.2%',
    label: 'Decision Accuracy',
    description: 'Eliminate costly errors with AI that makes more accurate decisions than human underwriters.',
    color: 'rgba(147, 51, 234, 0.8)' // Purple
  },
  {
    id: 'time-saving',
    icon: Clock,
    value: '2.8x',
    label: 'Faster Growth',
    description: 'Scale your agency 2.8x faster than competitors still relying on manual processes.',
    color: 'rgba(245, 158, 11, 0.8)' // Orange
  }
];

const ResultsSection: React.FC = () => {
  return (
    <section className="results-section py-12 md:py-20 relative z-10">
      {/* Semi-transparent background overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      <div className="w-full px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-5xl font-heading font-bold mb-4 text-white">
            The Numbers Don't Lie
          </h2>
          <p className="text-sm md:text-lg font-body text-gray-400 max-w-4xl mx-auto mobile-text-container">
            While competitors struggle with outdated methods, our clients are achieving breakthrough results
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="mobile-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-7xl mx-auto">
          {results.map((result, index) => {
            const IconComponent = result.icon;
            
            return (
              <motion.div
                key={result.id}
                className="result-card bg-white/3 backdrop-blur-md border border-white/8 rounded-xl p-4 md:p-6 text-center hover:bg-white/5 transition-all duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                {/* Icon */}
                <div 
                  className="result-icon w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${result.color}, ${result.color}60)`
                  }}
                >
                  <IconComponent className="w-5 h-5 md:w-8 md:h-8 text-white" />
                </div>
                
                {/* Value */}
                <div className="stat-value text-lg md:text-2xl font-body font-bold text-white mb-2">
                  {result.value}
                </div>
                
                {/* Label */}
                <h3 className="text-sm md:text-lg font-body font-bold text-white mb-2 md:mb-3">
                  {result.label}
                </h3>
                
                {/* Description */}
                <p className="text-xs md:text-sm font-body text-gray-300 leading-relaxed mobile-text-container">
                  {result.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
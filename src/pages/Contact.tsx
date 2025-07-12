import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThreeJSHero } from '../components/ui/ThreeJSHero';
import MobileOptimizedNavigation from '../components/navigation/MobileOptimizedNavigation';
import MobileOptimizedText from '../components/ui/MobileOptimizedText';

const Contact: React.FC = () => {
  useEffect(() => {
    // Load Calendly script if it's not already loaded
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!existingScript) {
      document.body.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen text-white relative">
      {/* Solid Black Background Layer - Bottommost */}
      <div className="fixed inset-0 w-full h-full bg-black z-[-20]"></div>
      
      {/* Fixed Three.js Background Animation */}
      <ThreeJSHero />
      
      {/* Global Blurred Overlay */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-10]"></div>
      
      <MobileOptimizedNavigation />
      
      <div className="main-content transition-all duration-300 ease-in-out relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <MobileOptimizedText
                variant="hero-title"
                as="h1"
                className="mb-6 font-heading font-bold"
              >
                Ready to Transform Your Agency?
              </MobileOptimizedText>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <MobileOptimizedText
                variant="hero-subtitle"
                as="p"
                className="max-w-4xl mx-auto leading-relaxed mb-8"
              >
                Schedule your personalized AI strategy session and discover exactly how our solutions will increase your revenue, reduce costs, and give you the competitive advantage you need.
              </MobileOptimizedText>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-white mb-2">30 Minutes</div>
                <div className="text-gray-400 font-body">Strategy Session</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-white mb-2">Custom ROI</div>
                <div className="text-gray-400 font-body">Projection Analysis</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-white mb-2">48 Hours</div>
                <div className="text-gray-400 font-body">Implementation Plan</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-20 lg:py-24 relative z-10">
          {/* Semi-transparent background for readability */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          <div className="w-full px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center relative z-10">
              <div>
                <MobileOptimizedText
                  variant="section-title"
                  as="h2"
                  className="mb-6 sm:mb-8 font-heading font-bold leading-tight"
                >
                  Your Competitors Are Already Using AI
                  <span className="font-heading text-gray-300 block">Don't Get Left Behind</span>
                </MobileOptimizedText>
                
                <MobileOptimizedText
                  variant="section-subtitle"
                  as="p"
                  className="leading-relaxed mb-8 sm:mb-12"
                >
                  Every day you wait is revenue lost to agencies already leveraging AI. Schedule your personalized strategy session and discover exactly how our solutions will transform your agency.
                </MobileOptimizedText>
                
                <div className="stats-container grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
                  <div className="text-center touch-target">
                    <div className="stat-value text-lg sm:text-2xl lg:text-3xl font-heading font-bold text-white mb-1 sm:mb-2">
                      $2.3M
                    </div>
                    <div className="stat-label font-body text-xs sm:text-sm lg:text-base text-gray-400 font-semibold">Average Revenue Increase</div>
                  </div>
                  <div className="text-center touch-target">
                    <div className="stat-value text-lg sm:text-2xl lg:text-3xl font-heading font-bold text-white mb-1 sm:mb-2">
                      48hrs
                    </div>
                    <div className="stat-label font-body text-xs sm:text-sm lg:text-base text-gray-400 font-semibold">Setup Time</div>
                  </div>
                  <div className="text-center touch-target">
                    <div className="stat-value text-lg sm:text-2xl lg:text-3xl font-heading font-bold text-white mb-1 sm:mb-2">
                      24/7
                    </div>
                    <div className="stat-label font-body text-xs sm:text-sm lg:text-base text-gray-400 font-semibold">AI Support</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
                {/* Calendly inline widget */}
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/kavindul755/lead-gen-system-break-down" 
                  style={{ minWidth: '320px', height: '700px' }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <MobileOptimizedText
                variant="section-title"
                as="h2"
                className="mb-6 font-heading font-bold"
              >
                What to Expect in Your Call
              </MobileOptimizedText>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Current State Analysis",
                  description: "We'll review your current processes, identify bottlenecks, and calculate how much revenue is being lost to inefficiencies."
                },
                {
                  step: "02", 
                  title: "Custom AI Strategy",
                  description: "Based on your specific needs, we'll design a tailored AI implementation plan with clear ROI projections and timelines."
                },
                {
                  step: "03",
                  title: "Next Steps & Timeline", 
                  description: "We'll provide you with a detailed roadmap, implementation timeline, and immediate action items to get started."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-3xl font-heading font-bold text-gray-600 mb-4">{item.step}</div>
                  <MobileOptimizedText
                    variant="card-title"
                    as="h3"
                    className="mb-4 font-heading font-bold"
                  >
                    {item.title}
                  </MobileOptimizedText>
                  <MobileOptimizedText
                    variant="card-body"
                    as="p"
                    className="leading-relaxed"
                  >
                    {item.description}
                  </MobileOptimizedText>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact; 
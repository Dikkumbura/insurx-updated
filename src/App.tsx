import React from 'react';
import { CheckCircle, Users, TrendingUp, BarChart3, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ErrorBoundary from './components/ui/ErrorBoundary';
import LoadingPage from './components/ui/LoadingPage';
import MobileOptimizedNavigation from './components/navigation/MobileOptimizedNavigation';
import Section from './components/ui/Section';
import MobileOptimizedBackground from './components/ui/MobileOptimizedBackground';
import MobileOptimizedText from './components/ui/MobileOptimizedText';
import MobilePerformanceOptimizer from './components/ui/MobilePerformanceOptimizer';
import { ServicesProvider } from './components/services/ServicesContext';
import ResponsiveServicesSection from './components/services/ResponsiveServicesSection';
import ResultsSection from './components/results/ResultsSection';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
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

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <ErrorBoundary>
        <LoadingPage onLoadingComplete={handleLoadingComplete} duration={3000} />
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <MobilePerformanceOptimizer>
        <ServicesProvider>
          <MobileOptimizedBackground>
            <div className="min-h-screen text-white relative">
          <MobileOptimizedNavigation />
          <div className="main-content transition-all duration-300 ease-in-out">

          {/* Hero Section */}
<section id="home" className="min-h-[60vh] sm:min-h-screen flex items-center justify-center relative z-10 px-4 sm:px-6">
            {/* Content Overlay */}
                          <div className="w-full flex flex-col items-center justify-center text-center relative z-20 px-4 sm:px-6 lg:px-8">
              {/* Hero Text */}
              <div className="text-center">
                <div className="mb-4 sm:mb-8">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    <MobileOptimizedText
                      variant="hero-title"
                      as="h1"
                      className="hero-title mb-3 sm:mb-4 font-brand font-black"
                    >
                      INSURX
                    </MobileOptimizedText>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  >
                    <MobileOptimizedText
                      variant="hero-subtitle"
                      as="p"
                      className="hero-subtitle px-2"
                    >
                      The Future of Insurance
                    </MobileOptimizedText>
                  </motion.div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full px-4">
                  <motion.button
                    className="border-2 border-white/60 px-8 sm:px-10 py-3 sm:py-4 rounded-2xl font-body font-semibold text-base sm:text-lg hover:bg-white/20 hover:border-white transition-all duration-300 transform hover:scale-105 touch-target w-full sm:w-auto max-w-xs min-h-[44px]"
                    style={{
                      boxShadow: '0 0 15px rgba(0,0,0,0.5), 0 5px 20px rgba(0,0,0,0.3)',
                      textShadow: '0 0 8px rgba(0,0,0,0.6)',
                      backdropFilter: 'blur(10px)'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.0, ease: "easeOut" }}
                    onClick={() => navigate('/contact')}
                  >
                    Book a Call
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </section>

          {/* Responsive Services Section */}
          <ResponsiveServicesSection />

          {/* Solutions Section */}
          <section id="solutions" className="py-12 sm:py-20 lg:py-24 relative z-10">
            {/* Semi-transparent background for readability */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div className="w-full px-4 sm:px-6 lg:px-12">
              <motion.div 
                className="text-center mb-12 sm:mb-16 lg:mb-20 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <MobileOptimizedText
                  variant="section-title"
                  as="h2"
                  className="mb-4 sm:mb-6 font-heading font-bold"
                >
                  Why Smart Agencies Choose INSURX
                </MobileOptimizedText>
                <MobileOptimizedText
                  variant="section-subtitle"
                  as="p"
                  className="max-w-5xl mx-auto px-4"
                >
                  While your competitors struggle with manual processes, forward-thinking agencies are closing more deals, reducing costs, and scaling faster than ever before
                </MobileOptimizedText>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-none relative z-10">
                {[
                  {
                    number: "01",
                    icon: CheckCircle,
                    title: "Insurance-Built Compliance",
                    description: "Sleep soundly knowing every AI decision meets NAIC standards, state regulations, and audit requirements. Our insurance-specific compliance framework eliminates regulatory risks while maximizing operational efficiency."
                  },
                  {
                    number: "02",
                    icon: Users,
                    title: "Plug-and-Play Integration",
                    description: "Go live in 48 hours, not 6 months. Our AI integrates seamlessly with Applied Epic, HawkSoft, EZLynx, and 50+ insurance platforms. No IT headaches, no workflow disruption, just immediate results."
                  },
                  {
                    number: "03",
                    icon: TrendingUp,
                    title: "Scale from $1M to $100M+",
                    description: "Our architecture grows with your ambitions. Handle 10x more policies, process 100x more claims, and serve 1000x more customers without hiring additional staff. Your growth has no limits."
                  },
                  {
                    number: "04",
                    icon: BarChart3,
                    title: "ROI-Driven Analytics",
                    description: "See exactly how much money our AI makes you. Real-time dashboards track revenue increases, cost savings, and efficiency gains down to the penny. Prove ROI to stakeholders with concrete numbers."
                  }
                ].map((solution, index) => (
                  <motion.div 
                    key={index} 
                    className="solution-card group flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 bg-white/3 sm:bg-black/40 backdrop-blur-sm border border-white/8 sm:border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/5 sm:hover:bg-black/60 hover:scale-[1.02] transition-all duration-300 ease-in-out touch-target"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0">
                                              <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-gray-600 group-hover:text-gray-400 transition-colors duration-200 ease-out">
                        {solution.number}
                      </div>
                      <div className="icon-wrapper w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg sm:rounded-xl flex items-center justify-center mt-3 sm:mt-4 group-hover:scale-105 transition-transform duration-200 ease-out mx-auto sm:mx-0">
                        <solution.icon className="w-4 h-4 sm:w-6 sm:h-6 text-black" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-body font-bold text-white mb-3 sm:mb-4 group-hover:text-gray-200 transition-colors duration-200 ease-out text-center sm:text-left">
                        {solution.title}
                      </h3>
                      <p className="font-body text-sm sm:text-base text-gray-400 leading-relaxed text-center sm:text-left">
                        {solution.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Results Section */}
          <ResultsSection />

          {/* Testimonial Section */}
          <section id="testimonial" className="py-12 sm:py-20 lg:py-24 relative z-10">
            {/* Semi-transparent background for readability */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
            <div className="w-full px-4 sm:px-6 lg:px-12">
              <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div 
                  className="text-center mb-12 sm:mb-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4 sm:mb-6">
                    Simple Works. So Does She.
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl font-body text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    What happens when you give an insurance agency a secret weapon.
                  </p>
                </motion.div>

                {/* Testimonial Card */}
                <motion.div 
                  className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {/* Quote */}
                  <div className="mb-8 sm:mb-12">
                    <div className="text-4xl sm:text-6xl font-heading text-white/20 mb-4">"</div>
                    <blockquote className="text-base sm:text-lg lg:text-xl font-body text-gray-300 leading-relaxed italic">
                      Stephanie has served as a secret weapon across multiple companies I've built — representing our business models with clarity, confidence, and uncommon instinct. Her professionalism, intelligence, and ability to connect with agency owners set her apart in a very competitive market. She understands how to communicate value — clearly and effectively — and meets people exactly where they are.
                    </blockquote>
                  </div>

                  <div className="mb-8 sm:mb-12">
                    <blockquote className="text-base sm:text-lg lg:text-xl font-body text-gray-300 leading-relaxed italic">
                      Now she's taking it to the next level. By integrating AI into our systems, Stephanie is eliminating the busywork that slows teams down — freeing up time, sharpening execution, and letting us focus on what really matters: growing the business and taking care of customers.
                    </blockquote>
                  </div>

                  <div className="mb-8 sm:mb-12">
                    <blockquote className="text-base sm:text-lg lg:text-xl font-body text-gray-300 leading-relaxed italic">
                      Combining real-world insight, advanced technology, and emotional intelligence, she gives our companies a distinct edge — and the results speak for themselves.
                    </blockquote>
                  </div>

                  {/* Attribution */}
                  <div className="border-t border-white/10 pt-6 sm:pt-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <div className="font-body font-bold text-white text-lg sm:text-xl mb-2">
                          William Arrowood
                        </div>
                        <div className="font-body text-gray-400 text-sm sm:text-base leading-relaxed">
                          Founder & Executive of Invo Underwriting, Accident Insurance Company,<br className="hidden sm:block" />
                          Arrow Brokers, Invo PEO, Madison PEO, and Madison Insurance Group
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-12 sm:py-20 lg:py-24 relative z-10">
            {/* Semi-transparent background for readability */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
            <div className="w-full px-4 sm:px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center relative z-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 sm:mb-8 leading-tight">
                    Your Competitors Are Already Using AI
                    <span className="font-heading text-gray-300 block">Don't Get Left Behind</span>
                  </h2>
                  
                  <p className="text-base sm:text-lg lg:text-xl font-body text-gray-400 leading-relaxed mb-8 sm:mb-12">
                    Every day you wait is revenue lost to agencies already leveraging AI. Schedule your personalized strategy session and discover exactly how our solutions will transform your agency.
                  </p>
                  
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
                </motion.div>
                
                <motion.div 
                  className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {/* Calendly inline widget */}
                  <div 
                    className="calendly-inline-widget" 
                    data-url="https://calendly.com/kavindul755/lead-gen-system-break-down" 
                    style={{ minWidth: '320px', height: '700px' }}
                  ></div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-3 sm:py-8 lg:py-10 pb-6 sm:pb-10 lg:pb-12 relative z-10">
            {/* Semi-transparent background for readability */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            <div className="w-full px-4 sm:px-6 lg:px-12 pb-3 sm:pb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-10 lg:gap-12 mb-3 sm:mb-8 lg:mb-10 relative z-10">
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-3 sm:mb-6">
                    <img 
                      src="/logo.png" 
                      alt="INSURX Logo" 
                      className="h-6 sm:h-12 w-auto object-contain"
                    />
                  </div>
                  <p className="hidden sm:block font-heading text-gray-400 italic text-sm sm:text-lg text-center sm:text-left">The Future of Insurance</p>
                  <p className="hidden sm:block font-body text-gray-500 mt-2 sm:mt-4 leading-relaxed text-sm sm:text-base text-center sm:text-left">
                    Revolutionizing the insurance industry with cutting-edge AI automation solutions.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-body text-white font-bold text-xs sm:text-lg mb-2 sm:mb-6 text-center sm:text-left">Solutions</h4>
                  <ul className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 font-body text-gray-400 justify-center sm:justify-start">
                    <li><a href="#" className="font-body hover:text-white transition-colors duration-300 touch-target text-xs sm:text-sm">Chat AI</a></li>
                    <li><a href="#" className="font-body hover:text-white transition-colors duration-300 touch-target text-xs sm:text-sm">Voice AI</a></li>
                    <li><a href="#" className="font-body hover:text-white transition-colors duration-300 touch-target text-xs sm:text-sm">Underwriting</a></li>
                    <li><a href="#" className="font-body hover:text-white transition-colors duration-300 touch-target text-xs sm:text-sm">Claims</a></li>
                    <li><a href="#" className="font-body hover:text-white transition-colors duration-300 touch-target text-xs sm:text-sm">Lead Re-activation</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-center pt-2 sm:pt-6 relative z-10 gap-1 sm:gap-3">
                <p className="font-body text-gray-500 text-xs sm:text-sm text-center md:text-left">&copy; 2025 INSURX. All rights reserved.</p>
                <div className="flex flex-row gap-3 sm:gap-6 lg:gap-8 mt-0 md:mt-0">
                  <a href="#" className="font-body text-gray-500 hover:text-white text-xs sm:text-sm transition-colors duration-300 touch-target text-center py-0 sm:py-1">Privacy</a>
                  <a href="#" className="font-body text-gray-500 hover:text-white text-xs sm:text-sm transition-colors duration-300 touch-target text-center py-0 sm:py-1">Terms</a>
                  <a href="#" className="font-body text-gray-500 hover:text-white text-xs sm:text-sm transition-colors duration-300 touch-target text-center py-0 sm:py-1">Cookies</a>
                </div>
              </div>
            </div>
          </footer>
          
          {/* Extra padding to ensure no gap at bottom */}
          <div className="h-2 sm:h-4 lg:h-6 bg-black/80 relative z-10"></div>
          </div>
        </div>
        </MobileOptimizedBackground>
      </ServicesProvider>
      </MobilePerformanceOptimizer>
    </ErrorBoundary>
  );
}

export default App;
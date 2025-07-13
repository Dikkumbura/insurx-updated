import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ThreeJSHero } from '../components/ui/ThreeJSHero';
import MobileOptimizedNavigation from '../components/navigation/MobileOptimizedNavigation';
import MobileOptimizedText from '../components/ui/MobileOptimizedText';
import Footer from '../components/ui/Footer';
import SEOHead from '../components/ui/SEOHead';

const TryAgentX: React.FC = () => {
  const navigate = useNavigate();

  const agentXStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AgentX AI Assistant",
    "description": "Live demo of InsurX's AI assistant for insurance agencies. Experience automated lead capture, customer support, and quote generation.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "isAccessibleForFree": true,
    "demo": {
      "@type": "VideoObject",
      "name": "AgentX AI Assistant Demo",
      "description": "Interactive demo showcasing AI capabilities"
    },
    "provider": {
      "@type": "Organization",
      "name": "InsurX"
    }
  };

  useEffect(() => {
    // Load the Voiceflow script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = () => {
      if ((window as any).voiceflow) {
        (window as any).voiceflow.chat.load({
          verify: { projectID: '67dd9e0b39317273e2512a5b' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
                      voice: {
              url: "https://runtime-api.voiceflow.com"
            },
            assistant: {
              stylesheet: "data:text/css;base64,LnZmcmMtd2lkZ2V0IHtjb2xvcjogI2ZmZmZmZjtmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtmb250LXNpemU6IDE2cHg7fQoudmZyYy1oZWFkZXIge2JhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7Y29sb3I6ICNmZmZmZmY7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzMzMzM7fQoudmZyYy1hc3Npc3RhbnQtaW5mby10aXRsZSwgLnZmcmMtYXNzaXN0YW50LWluZm8tLWRlc2NyaXB0aW9uIHtjb2xvcjogI2ZmZmZmZjt9Ci52ZnJjLWNoYXQge2JhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7Ym9yZGVyOiAxcHggc29saWQgIzMzMzMzMztib3gtc2hhZG93OiBub25lO30KLnZmcmMtc3lzdGVtLXJlc3BvbnNlIC52ZnJjLW1lc3NhZ2Uge2JhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7Y29sb3I6ICNmZmZmZmY7fQoudmZyYy11c2VyLXJlc3BvbnNlIC52ZnJjLW1lc3NhZ2Uge2JhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7Y29sb3I6ICNmZmZmZmY7fQoudmZyYy1jaGF0LWlucHV0IHRleHRhcmVhIHtiYWNrZ3JvdW5kLWNvbG9yOiAjMGQwZDBkICFpbXBvcnRhbnQ7Y29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtib3JkZXI6IDFweCBzb2xpZCAjMzMzMzMzO30KLnZmcmMtYnV0dG9uIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO2NvbG9yOiAjMDAwMDAwO3RleHQtY2VudGVyO3RleHQtc2hhZG93OiBub25lO2JvcmRlcjogbm9uZTt9Ci52ZnJjLWlucHV0LWNvbnRhaW5lciwgLnZmcmMtY2hhdC1pbnB1dCB7YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O30KLl82cjl4ZWUzeiB7YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O2NvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7fQouXzFnZHZoOXQ2IHtjb2xvcjogI2ZmZmZmZjt9"
            },
            render: {
            mode: 'embedded',
            target: document.getElementById('voiceflow-container')
          }
        });
      }
    };
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.head.removeChild(script);
    };
  }, []);
  
  return (
    <>
      <SEOHead
        title="Try AgentX AI Demo - Live Insurance AI Assistant | InsurX"
        description="Experience AgentX AI Assistant live demo. See how our AI transforms insurance agencies with automated lead capture, 24/7 customer support, and instant quote generation."
        keywords="AgentX demo, insurance AI demo, AI assistant demo, live insurance automation, try AgentX, insurance chatbot demo"
        url="https://insurx.com/try-agentx"
        structuredData={agentXStructuredData}
      />
    <div className="min-h-screen text-white relative flex flex-col">
      {/* Solid Black Background Layer - Bottommost */}
      <div className="fixed inset-0 w-full h-full bg-black z-[-20]"></div>
      
      {/* Fixed Three.js Background Animation */}
      <ThreeJSHero />
      
      {/* Full page blurred overlay */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[-10]"></div>
      
      <MobileOptimizedNavigation />
      
      <div className="main-content transition-all duration-300 ease-in-out relative z-10 flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <MobileOptimizedText
                variant="hero-title"
                as="h1"
                className="mb-6 font-heading font-bold text-3xl md:text-5xl lg:text-6xl"
              >
                AgentX AI Assistant for Insurance Agencies
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
                className="max-w-4xl mx-auto leading-relaxed mb-8 text-lg md:text-xl lg:text-2xl"
              >
                Try Our Demo and See How It Can Transform Your Agency
              </MobileOptimizedText>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <MobileOptimizedText
                variant="card-body"
                as="p"
                className="max-w-5xl mx-auto leading-relaxed text-gray-300 text-sm md:text-base lg:text-lg"
              >
                AgentX AI Assistant helps insurance agencies eliminate repetitive tasks, streamline operations, and increase profitability through cutting-edge AI technology. Interact with our live demo below to experience how this virtual producer can help your team focus on what matters most—growing relationships and closing deals.
              </MobileOptimizedText>
            </motion.div>
          </div>
        </section>

        {/* AI Agent Demo Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Embedded AI Agent */}
              <div className="lg:col-span-2">
                <motion.div 
                  className="bg-black/40 backdrop-blur-sm border border-white rounded-2xl p-8 shadow-lg"
                  style={{ 
                    boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                    border: '1px solid white'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div 
                    id="voiceflow-container" 
                    className="w-full h-96 bg-white/5 rounded-xl flex items-center justify-center"
                  >
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
                      <p className="text-gray-400">Loading AgentX Demo...</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Demo Note */}
              <div className="lg:col-span-1">
                <motion.div 
                  className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <MobileOptimizedText
                    variant="card-title"
                    as="h3"
                    className="mb-4 font-heading font-bold text-lg md:text-xl lg:text-2xl"
                  >
                    Note: This is a demonstration version of AgentX.
                  </MobileOptimizedText>
                  <MobileOptimizedText
                    variant="card-body"
                    as="p"
                    className="leading-relaxed mb-4 text-sm md:text-base"
                  >
                    Backend functionalities are not available in this demo as it's designed to showcase the UI and conversation flow.
                  </MobileOptimizedText>
                  <MobileOptimizedText
                    variant="card-body"
                    as="p"
                    className="leading-relaxed text-sm md:text-base"
                  >
                    When implemented for your agency, all features can be fully customized to match your specific requirements.
                  </MobileOptimizedText>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* How Our AI Assistant Helps Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <MobileOptimizedText
                variant="section-title"
                as="h2"
                className="mb-6 font-heading font-bold text-2xl md:text-3xl lg:text-4xl"
              >
                How Our AI Assistant Helps Your Agency
              </MobileOptimizedText>
              <MobileOptimizedText
                variant="hero-subtitle"
                as="p"
                className="max-w-4xl mx-auto leading-relaxed text-gray-300 text-base md:text-lg lg:text-xl"
              >
                Comprehensive AI Solutions Designed Specifically For Insurance Agencies
              </MobileOptimizedText>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Automated Lead Capture */}
              <motion.div 
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <MobileOptimizedText
                  variant="card-title"
                  as="h3"
                  className="mb-4 font-heading font-bold text-lg md:text-xl lg:text-2xl"
                >
                  Automated Lead Capture and Qualification
                </MobileOptimizedText>
                <MobileOptimizedText
                  variant="card-body"
                  as="p"
                  className="leading-relaxed mb-6 text-sm md:text-base"
                >
                  Never miss a potential client again. Our AI Assistant proactively engages and captures leads 24/7, instantly qualifying prospects and delivering them directly into your CRM.
                </MobileOptimizedText>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-2 text-xs">•</span>
                    <MobileOptimizedText variant="card-body" as="p" className="text-sm md:text-base">Instant website visitor engagement</MobileOptimizedText>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-2 text-xs">•</span>
                    <MobileOptimizedText variant="card-body" as="p" className="text-sm md:text-base">Intelligent lead scoring and qualification</MobileOptimizedText>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-2 text-xs">•</span>
                    <MobileOptimizedText variant="card-body" as="p" className="text-sm md:text-base">Automated follow-up sequences</MobileOptimizedText>
                  </li>
                </ul>
              </motion.div>

              {/* Real-Time Customer Support */}
              <motion.div 
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <MobileOptimizedText
                  variant="card-title"
                  as="h3"
                  className="mb-4 font-heading font-bold text-lg md:text-xl lg:text-2xl"
                >
                  Real-Time Customer Support
                </MobileOptimizedText>
                <MobileOptimizedText
                  variant="card-body"
                  as="p"
                  className="leading-relaxed mb-6 text-sm md:text-base"
                >
                  Offer seamless, round-the-clock support. Our AI Assistant responds to policyholder inquiries instantly, boosting satisfaction and retention without burdening your team.
                </MobileOptimizedText>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-2 text-xs">•</span>
                    <MobileOptimizedText variant="card-body" as="p" className="text-sm md:text-base">24/7 policy and coverage questions</MobileOptimizedText>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-2 text-xs">•</span>
                    <MobileOptimizedText variant="card-body" as="p" className="text-sm md:text-base">Billing and payment assistance</MobileOptimizedText>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-2 text-xs">•</span>
                    <MobileOptimizedText variant="card-body" as="p" className="text-sm md:text-base">Seamless escalation to human agents when needed</MobileOptimizedText>
                  </li>
                </ul>
              </motion.div>

              {/* Instant Quote Generation */}
              <motion.div 
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <MobileOptimizedText
                  variant="card-title"
                  as="h3"
                  className="mb-4 font-heading font-bold text-lg md:text-xl lg:text-2xl"
                >
                  Instant Quote Generation
                </MobileOptimizedText>
                <MobileOptimizedText
                  variant="card-body"
                  as="p"
                  className="leading-relaxed mb-6 text-sm md:text-base"
                >
                  Reduce wait times dramatically. The AI Assistant automatically generates precise quotes for standard insurance products, empowering your team to close more policies faster.
                </MobileOptimizedText>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-2 text-xs">•</span>
                    <MobileOptimizedText variant="card-body" as="p" className="text-sm md:text-base">Multi-carrier quote comparison</MobileOptimizedText>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-2 text-xs">•</span>
                    <MobileOptimizedText variant="card-body" as="p" className="text-sm md:text-base">Personalized coverage recommendations</MobileOptimizedText>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-2 text-xs">•</span>
                    <MobileOptimizedText variant="card-body" as="p" className="text-sm md:text-base">Automated policy document generation</MobileOptimizedText>
                  </li>
                </ul>
              </motion.div>

              {/* Seamless CRM Integration */}
              <motion.div 
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <MobileOptimizedText
                  variant="card-title"
                  as="h3"
                  className="mb-4 font-heading font-bold text-lg md:text-xl lg:text-2xl"
                >
                  Seamless CRM Integration
                </MobileOptimizedText>
                <MobileOptimizedText
                  variant="card-body"
                  as="p"
                  className="leading-relaxed mb-6 text-sm md:text-base"
                >
                  Our AI Assistant integrates effortlessly with your existing CRM and policy management systems, ensuring zero disruption to your workflow while enhancing productivity and efficiency.
                </MobileOptimizedText>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-2 text-xs">•</span>
                    <MobileOptimizedText variant="card-body" as="p" className="text-sm md:text-base">Works with all major insurance CRMs</MobileOptimizedText>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-2 text-xs">•</span>
                    <MobileOptimizedText variant="card-body" as="p" className="text-sm md:text-base">Automated data entry and synchronization</MobileOptimizedText>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-2 text-xs">•</span>
                    <MobileOptimizedText variant="card-body" as="p" className="text-sm md:text-base">Custom workflow automation</MobileOptimizedText>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose InsurX Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <MobileOptimizedText
                variant="section-title"
                as="h2"
                className="mb-6 font-heading font-bold text-2xl md:text-3xl lg:text-4xl"
              >
                Why Insurance Agencies Choose InsurX AI Assistant
              </MobileOptimizedText>
              <MobileOptimizedText
                variant="hero-subtitle"
                as="p"
                className="max-w-4xl mx-auto leading-relaxed text-gray-300 text-base md:text-lg lg:text-xl"
              >
                Measurable Results That Transform Your Insurance Business.
              </MobileOptimizedText>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Boost Conversion Rates */}
              <motion.div 
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <MobileOptimizedText
                  variant="section-title"
                  as="div"
                  className="mb-4 font-heading font-bold text-3xl md:text-4xl lg:text-5xl"
                >
                  +25%
                </MobileOptimizedText>
                <MobileOptimizedText
                  variant="card-title"
                  as="h3"
                  className="mb-4 font-heading font-bold text-lg md:text-xl lg:text-2xl"
                >
                  Boost Conversion Rates
                </MobileOptimizedText>
                <MobileOptimizedText
                  variant="card-body"
                  as="p"
                  className="leading-relaxed text-sm md:text-base"
                >
                  Industry averages show agencies using automation can increase lead-to-policy conversion by up to 25%.
                </MobileOptimizedText>
              </motion.div>

              {/* Save Valuable Time */}
              <motion.div 
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <MobileOptimizedText
                  variant="section-title"
                  as="div"
                  className="mb-4 font-heading font-bold text-3xl md:text-4xl lg:text-5xl"
                >
                  15+ hrs
                </MobileOptimizedText>
                <MobileOptimizedText
                  variant="card-title"
                  as="h3"
                  className="mb-4 font-heading font-bold text-lg md:text-xl lg:text-2xl"
                >
                  Save Valuable Time
                </MobileOptimizedText>
                <MobileOptimizedText
                  variant="card-body"
                  as="p"
                  className="leading-relaxed text-sm md:text-base"
                >
                  Automation frees up your staff, allowing them to focus more time on high-value client interactions.
                </MobileOptimizedText>
              </motion.div>

              {/* Enhanced Customer Experience */}
              <motion.div 
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <MobileOptimizedText
                  variant="section-title"
                  as="div"
                  className="mb-4 font-heading font-bold text-3xl md:text-4xl lg:text-5xl"
                >
                  +32%
                </MobileOptimizedText>
                <MobileOptimizedText
                  variant="card-title"
                  as="h3"
                  className="mb-4 font-heading font-bold text-lg md:text-xl lg:text-2xl"
                >
                  Enhanced Customer Experience
                </MobileOptimizedText>
                <MobileOptimizedText
                  variant="card-body"
                  as="p"
                  className="leading-relaxed text-sm md:text-base"
                >
                  Instant, accurate responses improve customer satisfaction, loyalty, and overall retention rates.
                </MobileOptimizedText>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <MobileOptimizedText
                variant="section-title"
                as="h2"
                className="mb-6 font-heading font-bold text-2xl md:text-3xl lg:text-4xl"
              >
                Ready to Transform Your Insurance Agency?
              </MobileOptimizedText>
              <MobileOptimizedText
                variant="hero-subtitle"
                as="p"
                className="max-w-4xl mx-auto leading-relaxed mb-12 text-gray-300 text-base md:text-lg lg:text-xl"
              >
                Schedule a personalized AI strategy call with our experts. We'll analyze your current operations and show you exactly how our AI solutions can boost your efficiency and profitability.
              </MobileOptimizedText>

              <div className="mb-8">
                <MobileOptimizedText
                  variant="card-title"
                  as="h3"
                  className="mb-6 font-heading font-bold text-lg md:text-xl lg:text-2xl"
                >
                  What to expect:
                </MobileOptimizedText>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <MobileOptimizedText variant="card-body" as="p" className="text-left text-sm md:text-base">
                      Personalized assessment of your current operations
                    </MobileOptimizedText>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <MobileOptimizedText variant="card-body" as="p" className="text-left text-sm md:text-base">
                      Custom AI implementation strategy tailored to your needs
                    </MobileOptimizedText>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      3
                    </div>
                    <MobileOptimizedText variant="card-body" as="p" className="text-left text-sm md:text-base">
                      Clear ROI projections and implementation timeline
                    </MobileOptimizedText>
                  </div>
                </div>
              </div>

              <motion.button
                className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
              >
                Book Your Strategy Call→
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
    </>
  );
};

export default TryAgentX; 
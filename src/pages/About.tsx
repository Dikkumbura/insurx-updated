import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Eye, Heart, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ThreeJSHero } from '../components/ui/ThreeJSHero';
import Navigation from '../components/navigation/Navigation';

const About: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen text-white relative">
      {/* Solid Black Background Layer - Bottommost */}
      <div className="fixed inset-0 w-full h-full bg-black z-[-20]"></div>
      
      {/* Fixed Three.js Background Animation */}
      <ThreeJSHero />
      
      {/* Full page blurred overlay */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[-10]"></div>
      
      <Navigation />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              The Insurance AI Revolution Starts Here
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl font-body text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              We're not just another tech company. We're insurance professionals who got tired of watching great agencies struggle with outdated systems. So we built the AI platform that's helping agencies across the country dominate their markets.
            </motion.p>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Mission */}
              <motion.div 
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 font-body leading-relaxed">
                  To eliminate the technology gap that's holding insurance agencies back. We empower agents with enterprise-level AI tools that were previously only available to billion-dollar corporations, leveling the playing field for agencies of all sizes.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div 
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">Vision</h3>
                <p className="text-gray-300 font-body leading-relaxed">
                  A future where every insurance agency - from solo agents to large brokerages - can compete with the biggest players in the industry through intelligent automation that amplifies human expertise rather than replacing it.
                </p>
              </motion.div>

              {/* Values */}
              <motion.div 
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">Values</h3>
                <p className="text-gray-300 font-body leading-relaxed">
                  Results over promises. We measure success by our clients' growth, not our technology's complexity. Every feature we build must directly increase revenue, reduce costs, or improve customer satisfaction.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white mb-6">
                Leadership Team
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Stephanie Belote */}
              <motion.div 
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                  <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 border-2 border-white/20">
                    <img 
                      src="/steph-25c6b5f5 (1).jpeg" 
                      alt="Stephanie Belote"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">Stephanie Belote</h3>
                    <p className="text-lg font-body text-gray-400 mb-4">Co-Founder & Chief Visionary Officer</p>
                    <p className="text-gray-300 font-body leading-relaxed">
                      A forward-thinking entrepreneur and AI automation strategist, Stephanie brings a fusion of insurance industry expertise and cutting-edge technology to InsurX. She envisioned an AI-powered solution that revolutionizes risk placement, underwriting, and claims processing.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Kavindu Lakshan */}
              <motion.div 
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center lg:text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                  <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 border-2 border-white/20">
                    <img 
                      src="/WhatsApp Image 2025-04-02 at 14.19.45.jpeg" 
                      alt="Kavindu Lakshan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">Kavindu Lakshan</h3>
                    <p className="text-lg font-body text-gray-400 mb-4">Co-Founder & Chief Technology Officer</p>
                    <p className="text-gray-300 font-body leading-relaxed">
                      As an AI specialist and technology strategist, Kavindu is the architect behind InsurX's intelligent automation platform. His expertise lies in designing and deploying scalable AI systems for underwriting, claims processing, and policy management.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Innovation Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
                Innovation Meets Experience
              </h2>
              <p className="text-lg sm:text-xl font-body text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Built by insurance professionals and powered by next-gen AI, we're not just keeping up with industry changes—we're driving them. InsurX combines deep industry knowledge with cutting-edge technology to deliver solutions that transform how insurance agencies operate.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                  See Exactly How AI Will Transform Your Agency
                </h2>
                <p className="text-lg sm:text-xl font-body text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Don't take our word for it. Get a personalized ROI analysis showing exactly how much revenue our AI will generate for your specific agency. Most clients see their investment back in 90 days.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-6">Your 30-minute call includes:</h3>
                  <div className="space-y-6">
                    {[
                      "Custom ROI projection based on your current metrics",
                      "Personalized AI implementation roadmap for your agency", 
                      "Competitive analysis showing how you'll outperform rivals"
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-black font-bold font-body text-sm">{index + 1}</span>
                        </div>
                        <p className="text-gray-300 font-body text-lg leading-relaxed">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="text-center lg:text-right">
                  <motion.button 
                    className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-body font-bold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/contact')}
                  >
                    Get My Custom ROI Analysis
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer spacing */}
        <div className="h-20"></div>
      </div>
    </div>
  );
};

export default About; 
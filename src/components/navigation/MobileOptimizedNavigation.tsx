import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useMobileDetection } from '../../hooks/useMobileDetection';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'contact', label: 'Contact', href: '/contact' }
];

const MobileOptimizedNavigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isMobile, isTablet, hasReducedMotion } = useMobileDetection();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Check if it's a page navigation (starts with /) or section scroll (starts with #)
    if (href.startsWith('/')) {
      // Page navigation using React Router
      navigate(href);
    } else {
      // Smooth scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, href: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavClick(href);
    }
  };

  // Responsive classes based on device type
  const navClasses = `
    fixed top-0 left-0 right-0 z-50
    bg-black/80 backdrop-blur-lg
    border-b border-white/10
    transition-all duration-300 ease-in-out
  `;

  const containerClasses = `
    w-full px-4 sm:px-6 lg:px-8
    flex items-center justify-between
    ${isMobile ? 'h-16' : isTablet ? 'h-18' : 'h-20'}
  `;

  const logoClasses = `
    flex items-center gap-2
    font-brand font-bold text-white
    cursor-pointer
    ${isMobile ? 'text-lg' : isTablet ? 'text-xl' : 'text-2xl'}
  `;

  const logoImageClasses = `
    object-contain
    ${isMobile ? 'h-8' : isTablet ? 'h-10' : 'h-12'}
    w-auto
  `;

  return (
    <nav className={navClasses} role="navigation" aria-label="Main navigation">
      <div className={containerClasses}>
        {/* Logo */}
        <motion.div
          className={logoClasses}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: hasReducedMotion ? 0.1 : 0.5 }}
          onClick={() => handleNavClick('/')}
        >
          <img 
            src="/logo.png" 
            alt="INSURX Logo" 
            className={logoImageClasses}
          />
        </motion.div>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                onKeyDown={(e) => handleKeyDown(e, item.href)}
                className="
                  text-gray-300 hover:text-white 
                  font-body font-medium text-base
                  transition-colors duration-300
                  py-2 px-1
                  border-b-2 border-transparent
                  hover:border-white/30
                  focus:outline-none focus:border-white/50
                "
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('/contact')}
              className="
                bg-white text-black font-body font-semibold
                px-6 py-2.5 rounded-full
                hover:bg-gray-100 transition-colors duration-300
                focus:outline-none focus:ring-2 focus:ring-white/30
                min-h-[44px]
              "
            >
              Get Started
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={handleMobileMenuToggle}
            className="
              md:hidden flex items-center justify-center
              w-11 h-11 rounded-lg
              bg-white/10 hover:bg-white/20
              transition-colors duration-300
              focus:outline-none focus:ring-2 focus:ring-white/30
            "
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        )}

        {/* Tablet Menu */}
        {isTablet && !isMobile && (
          <div className="hidden sm:flex md:hidden items-center gap-4">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className="
                  text-gray-300 hover:text-white 
                  font-body font-medium text-sm
                  transition-colors duration-300
                  py-2 px-2
                "
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('/contact')}
              className="
                bg-white text-black font-body font-semibold
                px-4 py-2 rounded-full text-sm
                hover:bg-gray-100 transition-colors duration-300
                min-h-[40px]
              "
            >
              Get Started
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && isMobile && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: hasReducedMotion ? 0.1 : 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="
                fixed top-20 left-4 right-4 z-50
                bg-black/95 backdrop-blur-lg
                border border-white/20 rounded-xl
                p-6 shadow-2xl
              "
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ 
                duration: hasReducedMotion ? 0.1 : 0.3,
                ease: "easeOut"
              }}
            >
              <div className="space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.href)}
                    className="
                      w-full text-left py-3 px-4
                      text-white font-body font-medium text-lg
                      hover:bg-white/10 rounded-lg
                      transition-colors duration-300
                      focus:outline-none focus:bg-white/20
                    "
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: hasReducedMotion ? 0.1 : 0.3,
                      delay: hasReducedMotion ? 0 : index * 0.1 
                    }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                <motion.button
                  onClick={() => handleNavClick('/contact')}
                  className="
                    w-full bg-white text-black font-body font-semibold
                    py-3 px-6 rounded-lg text-lg
                    hover:bg-gray-100 transition-colors duration-300
                    focus:outline-none focus:ring-2 focus:ring-white/30
                    mt-6
                  "
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: hasReducedMotion ? 0.1 : 0.4,
                    delay: hasReducedMotion ? 0 : 0.2 
                  }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileOptimizedNavigation; 
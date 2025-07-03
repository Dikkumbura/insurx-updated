import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NavigationItem } from '../../types';
import { useEventHandler } from '../../hooks/useOptimizedCallback';

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavContainer = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  
  @media (min-width: 1024px) {
    height: 5rem;
    padding: 0 3rem;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    gap: 0.5rem;
    
    img {
      max-height: 40px !important;
      width: auto !important;
    }
  }
`;

const DesktopMenu = styled.div`
  display: none;
  align-items: center;
  gap: 2rem;
  
  @media (min-width: 768px) {
    display: flex;
    height: 44px; /* Match button height for perfect alignment */
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  background: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (min-width: 768px) {
    display: none;
  }
  
  /* Mobile text replacement for missing icons */
  @media (max-width: 768px) {
    &::after {
      content: "MENU";
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.5px;
      color: white;
    }
    
    &.is-open::after {
      content: "CLOSE";
    }
    
    svg {
      display: none !important;
    }
  }
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 1.5rem 2rem;
`;

const NavLink = styled(motion.a)`
  color: #9ca3af;
  text-decoration: none;
  font-weight: 500;
  padding: 0;
  display: block;
  transition: color 0.3s ease;
  font-size: 1.125rem;
  height: 44px; /* Match container height */
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover, &:focus {
    color: white;
    outline: none;
  }
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    height: 44px;
    font-size: 1rem;
  }
`;

const CTAButton = styled(motion.button)`
  background: white;
  color: black;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 44px;
  height: 44px; /* Fixed height for consistency */
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #f3f4f6;
    transform: scale(1.05);
  }
  
  &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.3);
    outline-offset: 2px;
  }
  
  @media (max-width: 767px) {
    width: 100%;
    padding: 0.875rem 1.5rem;
    margin-top: 1rem;
    font-size: 1rem;
    min-height: 48px;
    height: 48px;
  }
`;

const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'contact', label: 'Contact', href: '/contact' }
];

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMobileMenuToggle = useEventHandler(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  const handleNavClick = useEventHandler((href: string) => {
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
  }, [navigate]);

  const handleKeyDown = useEventHandler((e: React.KeyboardEvent, href: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavClick(href);
    }
  }, [handleNavClick]);

  return (
    <Nav role="navigation" aria-label="Main navigation">
      <NavContainer>
        <Logo
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => handleNavClick('/')}
          style={{ cursor: 'pointer' }}
        >
          <img 
            src="/logo.png" 
            alt="INSURX Logo" 
            className="h-10 sm:h-12 lg:h-14 w-auto object-contain logo"
          />
        </Logo>

        <DesktopMenu>
          {navigationItems.map((item) => (
            <NavLink
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              onKeyDown={(e) => handleKeyDown(e, item.href)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item.label}
            </NavLink>
          ))}
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('/contact')}
          >
            Get Started
          </CTAButton>
        </DesktopMenu>

        <MobileMenuButton
          onClick={handleMobileMenuToggle}
          className={isMobileMenuOpen ? 'is-open' : ''}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </MobileMenuButton>
      </NavContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navigationItems.map((item) => (
              <NavLink
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                onKeyDown={(e) => handleKeyDown(e, item.href)}
              >
                {item.label}
              </NavLink>
            ))}
            <CTAButton
              onClick={() => handleNavClick('/contact')}
              style={{ marginTop: '1rem', width: '100%' }}
            >
              Get Started
            </CTAButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default React.memo(Navigation);
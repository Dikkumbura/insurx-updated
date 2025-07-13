import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import TryAgentX from './pages/TryAgentX';
import ScrollToTop from './components/ui/ScrollToTop';
import PageTransition from './components/ui/PageTransition';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <PageTransition>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/try-agentx" element={<TryAgentX />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransition>
    </Router>
  );
};

export default AppRouter; 
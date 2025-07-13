import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      {/* Footer */}
      <footer className="py-8 lg:py-12 relative z-10 mt-auto">
        {/* Semi-transparent background for readability */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-10">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-6">
                <img 
                  src="/logo.png" 
                  alt="INSURX Logo" 
                  className="h-8 sm:h-12 w-auto object-contain"
                />
              </div>
              <p className="hidden sm:block font-heading text-gray-400 italic text-lg text-center sm:text-left">The Future of Insurance</p>
              <p className="hidden sm:block font-body text-gray-500 mt-4 leading-relaxed text-base text-center sm:text-left">
                Revolutionizing the insurance industry with cutting-edge AI automation solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-body text-white font-bold text-lg mb-6 text-center sm:text-left">Solutions</h4>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 font-body text-gray-400 justify-center sm:justify-start">
                <li><a href="#" className="font-body hover:text-white transition-colors duration-300 text-sm">Chat AI</a></li>
                <li><a href="#" className="font-body hover:text-white transition-colors duration-300 text-sm">Voice AI</a></li>
                <li><a href="#" className="font-body hover:text-white transition-colors duration-300 text-sm">Underwriting</a></li>
                <li><a href="#" className="font-body hover:text-white transition-colors duration-300 text-sm">Claims</a></li>
                <li><a href="#" className="font-body hover:text-white transition-colors duration-300 text-sm">Lead Re-activation</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-white/10 gap-3">
            <p className="font-body text-gray-500 text-sm text-center md:text-left">&copy; 2025 INSURX. All rights reserved.</p>
            <div className="flex flex-row gap-6 lg:gap-8">
              <a href="#" className="font-body text-gray-500 hover:text-white text-sm transition-colors duration-300">Privacy</a>
              <a href="#" className="font-body text-gray-500 hover:text-white text-sm transition-colors duration-300">Terms</a>
              <a href="#" className="font-body text-gray-500 hover:text-white text-sm transition-colors duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 
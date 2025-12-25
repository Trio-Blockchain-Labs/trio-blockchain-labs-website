
import React from 'react';
import trioLogoOnly from '../assets/trio-only-logo.svg';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center border-b ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-grey-100 shadow-sm' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <img src={trioLogoOnly} alt="Trio Logo" className="h-8 md:h-10" />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {['About', 'Solutions', 'Industries', 'Team'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold text-grey-600 hover:text-purple-600 transition-colors uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="#contact" 
            className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold py-2.5 px-6 rounded-full transition-all duration-300 shadow-md shadow-purple-200 hover:shadow-lg active:scale-95"
          >
            Contact Us
          </a>
        </div>

        <button className="md:hidden text-grey-900">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;

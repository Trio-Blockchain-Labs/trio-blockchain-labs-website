
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Industries from './components/Industries';
import Recognition from './components/Recognition';
import Team from './components/Team';
import Ticker from './components/Ticker';
import Blog from './components/Blog';
import Footer from './components/Footer';
import SectionWrapper from './components/SectionWrapper';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 800], [0, 0.15]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-purple-600 selection:text-white overflow-x-hidden relative">
      {/* Fixed Backgrounds */}
      <div className="fixed inset-0 bg-white -z-20" />
      <motion.div 
        style={{ opacity }}
        className="fixed inset-0 bg-gradient-to-b from-[#60ECFD] to-[#8552F6] -z-10 pointer-events-none"
      />

      <Header scrolled={scrolled} />
      
      <main className="relative z-0">
        <Hero />
        
        <SectionWrapper>
          <About />
        </SectionWrapper>
        
        <SectionWrapper>
          <Industries />
        </SectionWrapper>
        
        <SectionWrapper>
          <Recognition />
        </SectionWrapper>
        
        <SectionWrapper>
          <Team />
        </SectionWrapper>
        
        <SectionWrapper>
          <Ticker />
        </SectionWrapper>
        
        <SectionWrapper>
          <Blog />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
};

export default App;

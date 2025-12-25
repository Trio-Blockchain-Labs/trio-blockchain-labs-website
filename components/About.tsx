
import React from 'react';
import trilemaLogo from '../assets/trilema.svg';
import wpiqLogo from '../assets/wpiq.png';

const About: React.FC = () => {
  return (
    <section className="py-24 px-6" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Introductory Section */}
        <div className="max-w-3xl mx-auto mb-24 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-grey-900 leading-tight mb-8">
            Bridging the gap between institutions and blockchain technology.
          </h3>
          <p className="text-grey-600 leading-relaxed text-lg">
            TriO Blockchain Labs is a technology company dedicated to building secure, scalable, and regulatory-compliant blockchain applications. We empower enterprises to leverage Web3 innovations without compromising on security or efficiency.
          </p>
        </div>

        {/* Products Section */}
        <div id="solutions">
          <div className="mb-12 text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-grey-900 tracking-tight">Our Products</h3>
            <div className="w-20 h-1.5 bg-purple-600 mt-4 rounded-full mx-auto"></div>
          </div>

          <div className="space-y-16">
            {/* Solution 1: Trilema WaaS - Background #A7E789, Logo Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#171717] text-white rounded-[2rem] p-8 lg:p-16 border border-white/10 hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)] transition-all duration-500 overflow-hidden relative group">
              {/* Ambient Background Glows */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-white/10 transition-colors"></div>
              
              <div className="lg:col-span-5 flex justify-center lg:justify-start relative z-10">
                <div className="relative">
                  {/* Stylized Trilema Logo */}
                  <div className="flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-500">
                    <img src={trilemaLogo} alt="Trilema Logo" className="w-40 md:w-60 drop-shadow-2xl" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-8 relative z-10">
                <div>
                  <h4 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
                    Trilema <span className="opacity-60 font-light">WaaS</span>
                  </h4>
                  <p className="text-grey-400 text-xl leading-relaxed font-medium">
                    Next-generation Wallet-as-a-Service infrastructure built on ERC-4337 standards. We provide a robust self-custodial wallet infrastructure that enables secure, user-controlled digital asset management with seamless account abstraction capabilities. 
                  </p>
                </div>
                
                <a 
                  href="https://trilema.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:bg-black font-bold py-4 px-10 rounded-full transition-all shadow-xl hover:shadow-black/20 group active:scale-95"
                  style={{ backgroundColor: 'white', color: 'rgb(116, 170, 78)', fontWeight: 'bold', border: '1px solid rgba(192, 244, 155, 1)' }}
                >
                  Explore trilema.io
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Solution 2: Whitepaper IQ - Background #532C58, Text Left, Logo Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#532C58] text-white rounded-[2rem] p-8 lg:p-16 border border-white/5 hover:shadow-[0_20px_60px_-15px_rgba(83,44,88,0.4)] transition-all duration-500 overflow-hidden relative group">
              {/* Ambient Background Glows */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-400/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-purple-400/20 transition-colors"></div>

              <div className="lg:col-span-8 order-2 lg:order-1 space-y-8 relative z-10">
                <div>
                  <h4 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Whitepaper IQ</h4>
                  <p className="text-purple-100/80 text-xl leading-relaxed">
                    The industry's first AI-driven due diligence platform. We transform complex technical whitepapers and tokenomics data into actionable intelligence for institutional investors and protocol builders.
                  </p>
                </div>
                
                <a 
                  href="https://whitepaperiq.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-[#532C58] hover:bg-purple-50 font-bold py-4 px-10 rounded-full transition-all shadow-lg shadow-black/20 group active:scale-95"
                >
                  Explore Whitepaper IQ
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
              
              <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end relative z-10">
                <div className="flex items-center justify-center transform group-hover:-rotate-3 transition-transform duration-500">
                  <img src={wpiqLogo} alt="Whitepaper IQ Logo" className="w-40 md:w-64 drop-shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

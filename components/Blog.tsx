
import React from 'react';
import trioLogoOnly from '../assets/trio-only-logo.svg';
import researchReport from '../assets/research.jpg';

const Blog: React.FC = () => {
  return (
    <section className="py-24 px-6" id="blog">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#171717] rounded-[3rem] p-8 md:p-16 overflow-hidden relative border border-white/10">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            {/* Text Content */}
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Follow our Blog</h3>
                <div className="w-20 h-1.5 bg-purple-600 mt-4 rounded-full"></div>
              </div>
              
              <div className="flex-1 flex flex-col justify-center space-y-8">
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                  Exploring the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Future of Web3</span>
                </h3>
                <p className="text-grey-400 text-lg leading-relaxed max-w-xl">
                  Stay ahead of the curve with our latest thoughts on blockchain technology, decentralized finance, and the evolving digital asset landscape. We share in-depth analysis and industry trends.
                </p>
                
                <div>
                  <button className="bg-white text-grey-900 hover:bg-purple-50 font-bold py-4 px-10 rounded-full transition-all shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1 active:scale-95 flex items-center gap-3 group">
                    Read Our Blog
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-end perspective-1000">
              <div className="relative w-[280px] h-[560px] bg-black rounded-[3rem] border-[8px] border-[#2a2a2a] shadow-2xl transform rotate-y-12 rotate-z-2 hover:rotate-0 transition-all duration-700 ease-out group">
                {/* Screen Content */}
                <div className="absolute inset-0 bg-gradient-to-br from-grey-900 to-black rounded-[2.5rem] overflow-hidden flex flex-col">
                  {/* Status Bar */}
                  <div className="h-14 w-full flex justify-between items-center px-6 pt-2">
                    <span className="text-xs text-white/60">9:41</span>
                    <div className="flex gap-1.5">
                      <div className="w-4 h-2.5 bg-white/60 rounded-[1px]"></div>
                      <div className="w-0.5 h-2.5 bg-white/30 rounded-[1px]"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="flex-1 relative flex flex-col bg-white group/screen cursor-pointer overflow-hidden">
                    <div className="h-[70%] relative overflow-hidden">
                      <img 
                        src={researchReport} 
                        alt="Research Report" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/screen:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                    <div className="h-[30%] bg-white p-6 flex flex-col justify-center relative z-10">
                      <span className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-2">Annual Review</span>
                      <div className="flex items-center justify-between">
                        <h4 className="text-grey-900 font-black text-2xl tracking-tight">Report 2025</h4>
                        <div className="size-10 rounded-full bg-grey-100 flex items-center justify-center group-hover/screen:bg-purple-600 group-hover/screen:text-white transition-colors">
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1 w-12 bg-grey-200 rounded-full z-20"></div>
                  </div>
                </div>
                
                {/* Dynamic Reflection */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

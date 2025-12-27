
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import trioLogoOnly from '../assets/trio-only-logo.svg';
import researchReport from '../assets/research.jpg';

const Blog: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'reports'>('blog');

  return (
    <section className="py-24 px-6" id="blog">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#171717] rounded-[3rem] p-8 md:p-16 overflow-hidden relative border border-white/10">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>

          {/* Tab Navigation */}
          <div className="relative z-10 mb-12 flex justify-center -mt-8 md:-mt-12">
            <div className="inline-flex bg-grey-900/50 p-1.5 rounded-2xl border border-white/10">
              <button
                onClick={() => setActiveTab('blog')}
                className={`px-6 py-2 rounded-xl font-bold text-sm transition-all duration-300 ${
                  activeTab === 'blog'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : 'text-grey-400 hover:text-white'
                }`}
              >
                Blog
              </button>
              <button
                onClick={() => setActiveTab('reports')}
                className={`px-6 py-2 rounded-xl font-bold text-sm transition-all duration-300 ${
                  activeTab === 'reports'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : 'text-grey-400 hover:text-white'
                }`}
              >
                Reports
              </button>
            </div>
          </div>

          {/* Content Container - Fixed Height */}
          <div className="relative z-10 h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {activeTab === 'blog' && (
                <motion.div 
                  key="blog"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full"
                >
              {/* Text Content */}
              <div className="flex flex-col h-full">
                <div className="mb-6 text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Follow our Blog</h3>
                  <div className="w-20 h-1.5 bg-purple-600 mt-4 rounded-full mx-auto lg:mx-0"></div>
                </div>
                
                <div className="flex-1 flex flex-col justify-center space-y-8">
                  <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    Exploring the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Future of Web3</span>
                  </h3>
                  <p className="text-grey-400 text-lg leading-relaxed max-w-xl">
                    Stay ahead of the curve with our latest thoughts on blockchain technology, decentralized finance, and the evolving digital asset landscape. We share in-depth analysis and industry trends.
                  </p>
                  
                  <div>
                    <a 
                      href="https://www.linkedin.com/company/trioblockchainlabs/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-white text-grey-900 hover:bg-purple-50 font-bold py-4 px-10 rounded-full transition-all shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1 active:scale-95 group"
                    >
                      Read Our Blog
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Blog Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center p-8">
                        <span className="material-symbols-outlined text-white/40 text-8xl mb-4">article</span>
                        <p className="text-white/60 text-lg">Blog Image Placeholder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </motion.div>
              )}

              {activeTab === 'reports' && (
                <motion.div 
                  key="reports"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full"
                >
                  {/* Text Content */}
                  <div className="flex flex-col h-full order-2 lg:order-1 justify-center">
                    <div className="mb-8 text-center lg:text-left">
                      <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Research Reports</h3>
                      <div className="w-20 h-1.5 bg-purple-600 mt-4 rounded-full mx-auto lg:mx-0"></div>
                    </div>
                    
                    <div className="flex flex-col space-y-6">
                      <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        In-Depth <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Analysis</span>
                      </h3>
                      <p className="text-grey-400 text-lg leading-relaxed max-w-xl">
                        Explore our comprehensive research reports on tokenized assets, blockchain regulations, and Web3 ecosystem development. Gain insights from detailed case studies and technical analyses.
                      </p>
                      
                      <div>
                        <button className="bg-white text-grey-900 hover:bg-purple-50 font-bold py-4 px-10 rounded-full transition-all shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1 active:scale-95 flex items-center gap-3 group">
                          View Reports
                          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                      </div>
                    </div>
              </div>

                  {/* Phone Mockup */}
                  <div className="flex justify-center lg:justify-end order-1 lg:order-2 perspective-1000">
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

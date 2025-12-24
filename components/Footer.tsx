
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-grey-950 text-white pt-24 pb-12 px-6 border-t border-grey-900" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div className="space-y-10">
            <div className="bg-white/5 p-4 inline-block rounded-2xl backdrop-blur-sm border border-white/10">
              <Logo className="h-10 md:h-12" />
            </div>
            
            <p className="text-grey-400 max-w-md text-lg leading-relaxed">
              Leading the institutional shift towards decentralized finance with secure, scalable, and intelligent blockchain infrastructure.
            </p>
            
            <div className="space-y-6 text-grey-300">
              <div className="flex items-center gap-4 group cursor-pointer">
                <span className="material-symbols-outlined text-purple-500 bg-grey-900 p-2 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-all">location_on</span>
                <span className="hover:text-white transition-colors">Levent, Istanbul, Turkey</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <span className="material-symbols-outlined text-purple-500 bg-grey-900 p-2 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-all">mail</span>
                <span className="hover:text-white transition-colors">contact@trioblockchain.com</span>
              </div>
            </div>
          </div>
          
          <div className="bg-grey-900/50 backdrop-blur-sm p-10 rounded-3xl border border-grey-800 shadow-2xl">
            <h4 className="text-xl font-bold mb-8">Get in Touch</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-grey-500 uppercase tracking-wider">Full Name</label>
                  <input 
                    className="w-full bg-grey-950/50 border border-grey-800 rounded-xl px-4 py-4 text-sm text-white focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-all" 
                    placeholder="Alex Smith" 
                    type="text" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-grey-500 uppercase tracking-wider">Email Address</label>
                  <input 
                    className="w-full bg-grey-950/50 border border-grey-800 rounded-xl px-4 py-4 text-sm text-white focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-all" 
                    placeholder="alex@company.com" 
                    type="email" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-grey-500 uppercase tracking-wider">Your Message</label>
                <textarea 
                  className="w-full bg-grey-950/50 border border-grey-800 rounded-xl px-4 py-4 text-sm text-white focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-all min-h-[140px] resize-none" 
                  placeholder="How can we help your business?" 
                />
              </div>
              <button 
                className="bg-purple-600 text-white font-bold px-8 py-4 rounded-xl text-md hover:bg-purple-700 transition-all w-full shadow-lg shadow-purple-900/40 transform active:scale-[0.98]" 
                type="button"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-grey-800/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-grey-500">
          <p>© 2024 Trio Blockchain Labs. All rights reserved.</p>
          <div className="flex gap-10">
            <a className="hover:text-purple-400 transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-purple-400 transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import Logo from '../assets/trio-only-logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-grey-950 text-white pt-24 pb-12 px-6 border-t border-grey-900" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div className="space-y-10">
            <div className="bg-white/5 p-4 inline-flex items-center gap-2 rounded-2xl backdrop-blur-sm border border-white/10 w-fit">
              <img src={Logo} alt="TriO Logo" className="h-10 md:h-12" />
              <div className="text-white font-bold font-sans font-size-lg text-sm">TriO Blockchain Labs</div>
            </div>
            
            <p className="text-grey-400 max-w-md text-lg leading-relaxed">
              Leading the institutional shift towards decentralized finance with secure, scalable, and intelligent blockchain infrastructure.
            </p>
            
            <div className="space-y-6 text-grey-300">
              <div className="flex items-center gap-4 group cursor-pointer">
                <span className="material-symbols-outlined text-purple-500 bg-grey-900 p-2 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-all">location_on</span>
                <span className="hover:text-white transition-colors">İTÜ Arı Teknokent - ARI Teknokent Proje
Geliştirme PlanlamaA.Ş.
Reşitpaşa Mah. Katar Cad.
Sarıyer / İstanbul</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <span className="material-symbols-outlined text-purple-500 bg-grey-900 p-2 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-all">mail</span>
                <span className="hover:text-white transition-colors">contact@trioblockchainlabs.com</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="space-y-6 text-grey-300">
              <p className="text-white font-semibold text-lg">Want to get in touch?</p>
              <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/company/trioblockchainlabs/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-grey-900 hover:bg-purple-600 rounded-xl flex items-center justify-center transition-all group"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 text-grey-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/Trioblockchain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-grey-900 hover:bg-purple-600 rounded-xl flex items-center justify-center transition-all group"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6 text-grey-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/trioblockchainlabs?igsh=MWc3ZjA2ZDlnc2FjbA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-grey-900 hover:bg-purple-600 rounded-xl flex items-center justify-center transition-all group"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 text-grey-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                </svg>
              </a>
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
          <p>© 2025 TriO Blockchain Labs. All rights reserved.</p>
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

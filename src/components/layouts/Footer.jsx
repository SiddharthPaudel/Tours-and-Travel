import React from 'react';
import { 
  Instagram, Facebook, Twitter, Youtube, 
  Mail, Phone, MapPin, ArrowUpRight, Send,
  Map, Globe, Mountain, Footprints, Waves
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const destinations = [
    { name: 'Domestic', icon: <Map size={14} /> },
    { name: 'International', icon: <Globe size={14} /> },
  ];

  const activities = [
    { name: 'Trek', icon: <Mountain size={14} /> },
    { name: 'Hiking', icon: <Footprints size={14} /> },
    { name: 'Rafting', icon: <Waves size={14} /> },
  ];

  return (
    <footer className="bg-slate-900 pt-12 md:pt-20 pb-10 px-4 md:px-6 font-montserrat text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* --- TOP SECTION: BRAND & NEWSLETTER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12 md:mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <a href="/" className="flex flex-col group w-full sm:w-fit">
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-white leading-tight md:leading-none uppercase">
                Tomo GlobeWise
              </h2>
              <span className="text-[8px] md:text-[9px] font-extrabold uppercase tracking-[0.2em] md:tracking-[0.3em] text-emerald-500 mt-2 leading-none">
                Consult and travel pvt ltd
              </span>
            </a>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-sm">
              Your premier gateway to global exploration and expert travel consultancy. We curate extraordinary journeys from the highest peaks to the wildest rivers.
            </p>
            <div className="flex gap-3 md:gap-4">
              {[<Instagram />, <Facebook />, <Twitter />, <Youtube />].map((icon, i) => (
                <a key={i} href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300">
                  {React.cloneElement(icon, { size: 16 })}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-7 bg-slate-800/30 p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-700/50">
            <h4 className="text-lg md:text-xl font-black uppercase tracking-tighter mb-2">Join the Expedition</h4>
            <p className="text-slate-400 text-[10px] md:text-[11px] uppercase tracking-widest font-bold mb-6">Get secret travel guides</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-slate-900 border border-slate-700 px-5 py-3.5 md:px-6 md:py-4 rounded-xl text-sm focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-600"
              />
              <button className="bg-emerald-600 hover:bg-white hover:text-slate-900 text-white px-8 py-3.5 md:py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-900/20">
                Subscribe <Send size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* --- MIDDLE SECTION: LINKS --- */}
        {/* Changed to 1 col on tiny mobile, 2 cols on small tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-20 border-t border-slate-800/50 pt-12 md:pt-16">
          
          <FooterGroup title="Company">
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-3.5">
              <FooterLink label="Home" />
              <FooterLink label="About Us" />
              <FooterLink label="Visa Info" />
              <FooterLink label="Blogs" />
              <FooterLink label="Gallery" />
              <FooterLink label="Contact" />
            </div>
          </FooterGroup>

          <FooterGroup title="Destinations">
            {destinations.map(item => (
              <FooterLink key={item.name} label={item.name} />
            ))}
          </FooterGroup>

          <FooterGroup title="Activities">
            {activities.map(item => (
              <FooterLink key={item.name} label={item.name} />
            ))}
          </FooterGroup>

          <FooterGroup title="Get In Touch">
            <div className="space-y-4 pt-1">
              <a href="tel:+1800TOMOGW" className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors">
                <Phone size={14} className="text-emerald-500 shrink-0" /> +1 800-TOMO-GW
              </a>
              <a href="mailto:info@tomoglobewise.com" className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors">
                <Mail size={14} className="text-emerald-500 shrink-0" /> info@tomoglobewise.com
              </a>
              <div className="flex items-start gap-3 text-slate-400 text-sm font-medium leading-tight">
                <MapPin size={14} className="text-emerald-500 shrink-0" /> Thamel, Kathmandu, NP
              </div>
            </div>
          </FooterGroup>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-slate-500 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] leading-relaxed">
            © {currentYear} Tomo GlobeWise Consult and Travel Pvt Ltd.
          </p>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="text-slate-500 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] hover:text-emerald-500 transition-colors">Privacy</a>
            <a href="#" className="text-slate-500 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] hover:text-emerald-500 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- FOOTER HELPER COMPONENTS ---

const FooterGroup = ({ title, children }) => (
  <div className="space-y-5 md:space-y-6">
    <h4 className="text-[9px] md:text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] md:tracking-[0.35em] border-l-2 border-emerald-500 pl-3">
      {title}
    </h4>
    <div className="flex flex-col space-y-3 md:space-y-3.5">
      {children}
    </div>
  </div>
);

const FooterLink = ({ label }) => (
  <a href="#" className="group flex items-center text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-all w-fit">
    <span className="group-hover:translate-x-1 transition-transform">{label}</span>
    <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-emerald-500" />
  </a>
);

export default Footer;
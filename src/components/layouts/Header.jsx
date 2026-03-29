import React, { useState } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Phone, Mail, MapPin, 
  Mountain, Waves, Footprints, Globe, Map, Binoculars, User
} from 'lucide-react';

// Replace this with your actual logo path
import logoImg from "../../icon/logo1.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const destinations = [
    { name: 'Domestic', to: '/destinations/domestic', icon: <Map size={16} />, desc: 'Explore local beauty' },
    { name: 'International', to: '/destinations/international', icon: <Globe size={16} />, desc: 'Global expeditions' },
  ];

  const activities = [
    { name: 'Trek', to: '/activities/trek', icon: <Mountain size={16} />, desc: 'High altitude climbs' },
    { name: 'Hiking', to: '/activities/hiking', icon: <Footprints size={16} />, desc: 'Scenic nature walks' },
    { name: 'Rafting', to: '/activities/rafting', icon: <Waves size={16} />, desc: 'River adventures' },
    { name: 'Sight seeing', to: '/activities/sightseeing', icon: <Binoculars size={16} />, desc: 'Cultural heritage tours' }
  ];

  const handleNavClick = (destination) => {
    setIsOpen(false);
    if (destination.startsWith('/')) {
      navigate(destination);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const scrollConfig = {
      duration: 1200,
      delay: 0,
      smooth: 'easeInOutQuint',
      offset: -100,
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(destination, scrollConfig);
      }, 300);
    } else {
      scroller.scrollTo(destination, scrollConfig);
    }
  };

  const handleHomeClick = () => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full font-montserrat sticky top-0 z-[100] shadow-sm bg-white">
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-slate-900 text-white text-[10px] py-2.5 px-6 flex justify-between items-center tracking-wider font-semibold">
        <div className="flex items-center gap-6 mx-auto md:mx-0">
          <span className="flex items-center gap-2"><Phone size={12} className="text-emerald-500" /> +1 800-TOMO-GW</span>
          <span className="hidden md:flex items-center gap-2"><Mail size={12} className="text-emerald-500" /> info@tomoglobewise.com</span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-slate-400 italic">
          <MapPin size={10} className="text-emerald-500" /> Your Gateway to Adventure
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <nav className="border-b border-gray-100 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between h-20 md:h-24 items-center">
            
            {/* BRANDING SECTION WITH LOGO */}
            <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={handleHomeClick}>
              <img src={logoImg} alt="Logo" className="h-10 md:h-14 w-auto object-contain" />
              <div className="flex flex-col">
                <h1 className="text-sm md:text-2xl font-black tracking-tighter text-slate-800 leading-none uppercase">
                  Tomo GlobeWise
                </h1>
                <span className="text-[6px] md:text-[9px] font-extrabold uppercase tracking-[0.1em] md:tracking-[0.3em] text-emerald-600 mt-1 block leading-none whitespace-nowrap">
                  Consult and travel pvt ltd
                </span>
              </div>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex space-x-1 items-center">
              <button onClick={handleHomeClick} className="px-3 py-2 text-[11px] font-bold text-slate-600 hover:text-emerald-600 uppercase transition-colors">Home</button>
              <button onClick={() => handleNavClick('about')} className="px-3 py-2 text-[11px] font-bold text-slate-600 hover:text-emerald-600 uppercase transition-colors">About Us</button>
              
              <DesktopDropdown label="Destinations" items={destinations} onAction={handleNavClick} />
              <DesktopDropdown label="Activities" items={activities} onAction={handleNavClick} />

              <RouterLink to="/gallery" className="px-3 py-2 text-[11px] font-bold text-slate-600 hover:text-emerald-600 uppercase transition-colors">Gallery</RouterLink>
              <RouterLink to="/visa-info" className="px-3 py-2 text-[11px] font-bold text-slate-600 hover:text-emerald-600 uppercase transition-colors">Visa Info</RouterLink>
              <button onClick={() => handleNavClick('blogs')} className="px-3 py-2 text-[11px] font-bold text-slate-600 hover:text-emerald-600 uppercase transition-colors">Blogs</button>
              
              <div className="ml-4 pl-4 border-l border-gray-200 flex items-center gap-2">
                <RouterLink to="/login" className="flex items-center gap-2 px-4 py-2 text-[11px] font-bold text-slate-700 hover:bg-slate-50 rounded-lg transition-all uppercase">
                  <User size={14} className="text-emerald-600" /> Login
                </RouterLink>
                <RouterLink to="/signup" className="px-5 py-2.5 bg-emerald-600 text-white text-[11px] font-bold rounded-lg hover:bg-emerald-700 shadow-md transition-all uppercase">
                  Sign Up
                </RouterLink>
              </div>
            </div>

            {/* MOBILE TOGGLE */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-slate-800 p-2 transition-transform active:scale-90"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={32} className="text-emerald-600" /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* 3. MOBILE MENU OVERLAY - Fixed Height & Scrollable */}
        {isOpen && (
          <div className="lg:hidden fixed inset-x-0 bottom-0 top-[115px] bg-white z-[150] overflow-y-auto shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-6 space-y-1 pb-24">
              <button onClick={handleHomeClick} className="text-left py-4 border-b border-gray-50 text-sm font-bold text-slate-700 uppercase">Home</button>
              
              {/* Destinations Collapsible */}
              <details className="group border-b border-gray-50">
                <summary className="list-none py-4 flex justify-between items-center cursor-pointer">
                  <span className="text-sm font-bold text-slate-700 uppercase">Destinations</span>
                  <ChevronDown size={18} className="group-open:rotate-180 transition-transform text-emerald-600" />
                </summary>
                <div className="grid grid-cols-1 gap-2 pb-4 animate-in fade-in zoom-in-95 duration-200">
                  {destinations.map(item => (
                    <button key={item.name} onClick={() => handleNavClick(item.to)} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl w-full text-left active:bg-emerald-50">
                      <div className="text-emerald-600 bg-white p-2 rounded-lg shadow-sm">{item.icon}</div>
                      <span className="text-xs font-bold text-slate-800 uppercase">{item.name}</span>
                    </button>
                  ))}
                </div>
              </details>

              {/* Activities Collapsible */}
              <details className="group border-b border-gray-50">
                <summary className="list-none py-4 flex justify-between items-center cursor-pointer">
                  <span className="text-sm font-bold text-slate-700 uppercase">Activities</span>
                  <ChevronDown size={18} className="group-open:rotate-180 transition-transform text-emerald-600" />
                </summary>
                <div className="grid grid-cols-1 gap-2 pb-4 animate-in fade-in zoom-in-95 duration-200">
                  {activities.map(item => (
                    <button key={item.name} onClick={() => handleNavClick(item.to)} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl w-full text-left active:bg-emerald-50">
                      <div className="text-emerald-600 bg-white p-2 rounded-lg shadow-sm">{item.icon}</div>
                      <span className="text-xs font-bold text-slate-800 uppercase">{item.name}</span>
                    </button>
                  ))}
                </div>
              </details>

              <RouterLink to="/gallery" onClick={() => setIsOpen(false)} className="py-4 border-b border-gray-50 text-sm font-bold text-slate-700 uppercase block">Gallery</RouterLink>
              <RouterLink to="/visa-info" onClick={() => setIsOpen(false)} className="py-4 border-b border-gray-50 text-sm font-bold text-slate-700 uppercase block">Visa Info</RouterLink>
              <button onClick={() => handleNavClick('about')} className="text-left py-4 border-b border-gray-50 text-sm font-bold text-slate-700 uppercase">About Us</button>
              <button onClick={() => handleNavClick('blogs')} className="text-left py-4 border-b border-gray-50 text-sm font-bold text-slate-700 uppercase">Blogs</button>

              {/* Auth Buttons */}
              <div className="pt-8 flex flex-col gap-4">
                <RouterLink 
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex justify-center items-center gap-3 py-4 bg-slate-50 text-slate-800 text-sm font-black rounded-xl uppercase border border-slate-100"
                >
                  <User size={18} className="text-emerald-600" /> Login to Account
                </RouterLink>
                <RouterLink 
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-emerald-600 text-white text-center text-sm font-black rounded-xl uppercase shadow-lg shadow-emerald-200"
                >
                  Join the Club
                </RouterLink>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const DesktopDropdown = ({ label, items, onAction }) => (
  <div className="relative group px-3 py-2">
    <button className="flex items-center gap-1 text-[11px] font-bold text-slate-600 group-hover:text-emerald-600 uppercase transition-colors">
      {label} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
    </button>
    <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl mt-2 border border-gray-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-3 transform origin-top duration-300">
      {items.map((item) => (
        <button key={item.name} onClick={() => onAction(item.to)} className="flex items-start gap-4 p-3 hover:bg-emerald-50 rounded-xl w-full text-left transition-colors mb-1 last:mb-0">
          <div className="text-emerald-600 bg-emerald-100 p-2.5 rounded-lg flex-shrink-0">{item.icon}</div>
          <div>
            <p className="text-[10px] font-black text-slate-800 uppercase leading-none">{item.name}</p>
            <p className="text-[9px] font-bold text-emerald-600 mt-1 uppercase tracking-tighter">{item.desc}</p>
          </div>
        </button>
      ))}
    </div>
  </div>
);

export default Navbar;
import React from 'react';
import { Compass, Zap, Map, Heart, ArrowRight } from 'lucide-react';
import hero1 from "../../images/hero2.jpg";
import hero2 from "../../images/hero7.jpg";
import hero3 from "../../images/hero5.jpg";

const AboutUs = () => {
  const values = [
    { icon: <Compass size={20} />, title: "Custom Itineraries", desc: "Your pace, your story." },
    { icon: <Zap size={20} />, title: "Adrenaline Focused", desc: "Peaks and thrills." },
    { icon: <Map size={20} />, title: "Beyond The Map", desc: "Hidden discoveries." },
    { icon: <Heart size={20} />, title: "Sustainable Travel", desc: "Respecting the wild." },
  ];

  return (
    <section className="py-24 px-6 bg-[#fcfcfc] font-montserrat overflow-hidden relative " id='about'>
      
      {/* Background Decorative Circles */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-slate-100 rounded-full blur-3xl -z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT SIDE: VISUAL COLLAGE */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            {/* Main Image */}
            <div className="relative w-[85%] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={hero3} 
                alt="Main trek" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Circular Floating Image 1 (Rafting) */}
            <div className="absolute -left-4 top-1/4 w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 md:border-8 border-white shadow-xl">
              <img 
                src={hero1} 
                alt="Rafting" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Circular Floating Image 2 (Camping) */}
            <div className="absolute -right-4 bottom-10 w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 md:border-8 border-white shadow-xl">
              <img 
                src={hero2} 
                alt="Camping" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE: CLEAN TYPOGRAPHY */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="inline-block px-4 py-1.5 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-md mb-6">
              The Torno Difference
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-slate-800 uppercase tracking-tighter leading-[0.9] mb-8">
              Your Adventure, <br/>
              <span className="text-emerald-500 italic">Elevated.</span>
            </h2>

            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-lg mb-12">
              Torno curates journeys that capture the raw beauty of our planet. 
              We handle the complexities, so you can immerse yourself in the discovery.
            </p>

            {/* ICON LIST (2-Column Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
              {values.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="bg-emerald-500 text-white p-2.5 rounded-full shadow-lg shadow-emerald-100 transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black text-slate-800 uppercase tracking-wider leading-none mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:bg-emerald-600 transition-all shadow-xl active:scale-95">
              Meet Our Guides
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
import React, { useState, useEffect } from 'react';
import { 
  Map, Navigation, ArrowRight, Camera,
  Hotel, Users, LayoutGrid, Calendar,
  ChevronLeft, CheckCircle, Shield, Mountain
} from 'lucide-react';
import chitwan from "../../images/ChitwanSafari.jpg";
import pokhara from "../../images/Pokhara.png";

const DomesticActivity = () => {
  const [selectedDest, setSelectedDest] = useState(null);

  const domesticDestinations = [
    {
      id: "pokhara",
      title: "Pokhara: The Lake City",
      desc: "Nestled under the shadow of the Annapurna range, Pokhara is the ultimate destination for relaxation and adventure. From paragliding over Fewa Lake to exploring deep caves, it's Nepal's tourism jewel.",
      duration: "3-5 Days",
      type: "Leisure & Adventure",
      price: "Rs. 15,000",
      image: pokhara,
      tag: "Top Rated",
      highlights: ["Boating on Fewa Lake", "Sunrise at Sarangkot", "World Peace Pagoda visit"],
    },
    {
      id: "chitwan",
      title: "Chitwan Jungle Safari",
      desc: "Experience the wild heart of Nepal. Chitwan National Park offers a chance to see One-horned Rhinos, Royal Bengal Tigers, and diverse bird species in their natural habitat.",
      duration: "3 Days",
      type: "Wildlife Safari",
      price: "Rs. 12,500",
      image: chitwan,
      tag: "Wildlife",
      highlights: ["Jeep Safari", "Canoe Ride on Rapti River", "Tharu Cultural Program"],
    }
  ];

  if (selectedDest) {
    return (
      <div className="min-h-screen bg-white font-montserrat pb-20 animate-in fade-in duration-500">
        <div className="relative h-[60vh] w-full">
          <button onClick={() => setSelectedDest(null)} className="absolute top-8 left-8 z-20 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-slate-900 transition-all shadow-xl"><ChevronLeft size={24} /></button>
          <img src={selectedDest.image} alt={selectedDest.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/20"></div>
          <div className="absolute bottom-12 left-8 md:left-20 text-white">
            <span className="bg-emerald-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block">Explore Nepal</span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">{selectedDest.title}</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter mb-4">Experience Detail</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-12">{selectedDest.desc}</p>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter mb-6">Tour Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedDest.highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <CheckCircle size={20} className="text-emerald-600 flex-shrink-0" />
                  <span className="text-xs font-black text-slate-700 uppercase">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl">
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block mb-2">Local Package</span>
              <span className="text-5xl font-black tracking-tighter mb-8 block">{selectedDest.price}</span>
              <button className="w-full bg-emerald-600 hover:bg-emerald-500 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all">Book Local Tour</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-montserrat pb-20">
      <section className="bg-emerald-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-emerald-400 font-black uppercase tracking-[0.3em] text-[10px]">Domestic Getaways</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6 tracking-tighter uppercase">Nepal <br/>Adventures</h1>
        </div>
        <Map size={400} className="absolute -bottom-20 -right-20 text-emerald-800 opacity-20" />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {domesticDestinations.map((dest) => (
            <div key={dest.id} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <img src={dest.image} alt={dest.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6"><span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black uppercase text-emerald-900 tracking-widest">{dest.tag}</span></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-slate-800 tracking-tighter uppercase mb-6">{dest.title}</h3>
                <button onClick={() => setSelectedDest(dest)} className="w-full bg-slate-50 group-hover:bg-emerald-600 group-hover:text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2">View Domestic Tour <ArrowRight size={14} /></button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DomesticActivity;
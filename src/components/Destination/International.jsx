import React, { useState } from 'react';
import { 
  Globe, Plane, ArrowRight, ShieldCheck, 
  Palmtree, Landmark, Users, LayoutGrid,
  ChevronLeft, CheckCircle, Briefcase, Star
} from 'lucide-react';

const InternationalActivity = () => {
  const [selectedIntl, setSelectedIntl] = useState(null);

  const internationalDestinations = [
    {
      id: "dubai",
      title: "Luxury Dubai Tour",
      desc: "A futuristic oasis in the desert. From the Burj Khalifa to high-end desert safaris, experience the peak of modern architecture and luxury hospitality.",
      duration: "5 Days",
      type: "Premium City Tour",
      price: "$1,200",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200",
      tag: "Visa Assistance",
      highlights: ["Burj Khalifa Top Access", "Desert Dune Bashing", "Dubai Mall Shopping"],
    },
    {
      id: "bali",
      title: "Bali: Tropical Escape",
      desc: "Island of the Gods. Explore the spiritual heart of Ubud, the crystal blue waters of Nusa Penida, and the vibrant culture of Indonesia.",
      duration: "7 Days",
      type: "Tropical Leisure",
      price: "$950",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200",
      tag: "Couple Special",
      highlights: ["Uluwatu Sunset Temple", "Ubud Monkey Forest", "Nusa Penida Boat Trip"],
    }
  ];

  if (selectedIntl) {
    return (
      <div className="min-h-screen bg-white font-montserrat pb-20 animate-in fade-in duration-500">
        <div className="relative h-[60vh] w-full">
          <button onClick={() => setSelectedIntl(null)} className="absolute top-8 left-8 z-20 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-indigo-900 transition-all shadow-xl"><ChevronLeft size={24} /></button>
          <img src={selectedIntl.image} alt={selectedIntl.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-transparent to-black/20"></div>
          <div className="absolute bottom-12 left-8 md:left-20 text-white">
            <span className="bg-indigo-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block">Global Expedition</span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">{selectedIntl.title}</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter mb-4">Global Itinerary</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-12">{selectedIntl.desc}</p>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter mb-6">International Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedIntl.highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-5 bg-indigo-50 rounded-2xl border border-indigo-100">
                  <Star size={20} className="text-indigo-600 flex-shrink-0" />
                  <span className="text-xs font-black text-slate-700 uppercase">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-indigo-950 rounded-[2.5rem] p-10 text-white shadow-2xl">
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest block mb-2">Global Package</span>
              <span className="text-5xl font-black tracking-tighter mb-8 block">{selectedIntl.price}</span>
              <div className="space-y-4 mb-10 pt-6 border-t border-indigo-900">
                <p className="flex items-center gap-2 text-[10px] font-bold text-indigo-300 uppercase"><ShieldCheck size={14}/> Visa Processing Included</p>
                <p className="flex items-center gap-2 text-[10px] font-bold text-indigo-300 uppercase"><Plane size={14}/> Round Trip Flights</p>
              </div>
              <button className="w-full bg-white text-indigo-950 hover:bg-indigo-100 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all">Book Global Tour</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-montserrat pb-20">
      <section className="bg-indigo-950 text-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-indigo-400 font-black uppercase tracking-[0.3em] text-[10px]">Worldwide Travels</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6 tracking-tighter uppercase">International <br/>Gateways</h1>
        </div>
        <Globe size={400} className="absolute -bottom-20 -right-20 text-indigo-900 opacity-20" />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {internationalDestinations.map((dest) => (
            <div key={dest.id} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <img src={dest.image} alt={dest.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6"><span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black uppercase text-indigo-900 tracking-widest">{dest.tag}</span></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-slate-800 tracking-tighter uppercase mb-6">{dest.title}</h3>
                <button onClick={() => setSelectedIntl(dest)} className="w-full bg-slate-50 group-hover:bg-indigo-950 group-hover:text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2">View Global Tour <ArrowRight size={14} /></button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InternationalActivity;
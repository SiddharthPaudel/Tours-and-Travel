import React, { useState, useEffect } from 'react';
import { 
  Footprints, Clock, Gauge, ArrowRight, 
  Trees, Sun, Timer, LayoutGrid, Mountain,
  ChevronLeft, CheckCircle, Shield, Wind, MapPin
} from 'lucide-react';

const HikingActivity = () => {
  // 1. STATE MANAGEMENT
  const [selectedHike, setSelectedHike] = useState(null); // null = show list, {hike} = show detail
  const [activeFilter, setActiveFilter] = useState('all');

  // 2. DATA
  const allHikes = [
    {
      id: "nagarkot",
      title: "Nagarkot Sunrise Hike",
      desc: "Experience the magic of the Himalayas as the first light of day hits the snow-capped peaks. This hike is perfect for photography enthusiasts and nature lovers who want a quick escape from the city.",
      duration: "1 Day",
      difficulty: "Easy",
      elevation: "2,175m",
      price: "$85",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=1200",
      tag: "Day Trip",
      category: "day-hike",
      highlights: ["360-degree mountain views", "Traditional Newari villages", "Lush pine forests"],
      itinerary: [
        { time: "4:30 AM", activity: "Hotel Pickup" },
        { time: "5:45 AM", activity: "Sunrise at View Tower" },
        { time: "9:30 AM", activity: "Nature Walk to Changunarayan" }
      ]
    },
    {
      id: "chisapani",
      title: "Chisapani - Nagarkot",
      desc: "A classic multi-day trail through Shivapuri National Park. It offers a mix of deep wilderness and cultural encounters as you traverse the ridge overlooking the Kathmandu Valley.",
      duration: "3 Days",
      difficulty: "Moderate",
      elevation: "2,215m",
      price: "$280",
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=1200",
      tag: "Village Life",
      category: "multi-day",
      highlights: ["National Park exploration", "Chisapani village stay", "Stunning panoramic ridge walk"],
      itinerary: [
        { time: "Day 1", activity: "Drive to Sundarijal & Hike to Chisapani" },
        { time: "Day 2", activity: "Trek from Chisapani to Nagarkot" },
        { time: "Day 3", activity: "Sunrise view and return to Kathmandu" }
      ]
    }
  ];

  const filteredHikes = activeFilter === 'all' ? allHikes : allHikes.filter(h => h.category === activeFilter);

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedHike]);

  // 3. RENDER DETAIL VIEW
  if (selectedHike) {
    return (
      <div className="min-h-screen bg-white font-montserrat pb-20 animate-in fade-in duration-500">
        {/* HERO AREA */}
        <div className="relative h-[60vh] w-full">
          <button 
            onClick={() => setSelectedHike(null)}
            className="absolute top-8 left-8 z-20 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-slate-900 transition-all shadow-xl"
          >
            <ChevronLeft size={24} />
          </button>
          <img src={selectedHike.image} alt={selectedHike.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/20"></div>
          <div className="absolute bottom-12 left-8 md:left-20">
            <span className="bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block">Hiking Activity</span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">{selectedHike.title}</h1>
          </div>
        </div>

        {/* DETAILS CONTENT */}
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter mb-4">Overview</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-12">{selectedHike.desc}</p>
            
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter mb-6">Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {selectedHike.highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <CheckCircle size={20} className="text-emerald-500 flex-shrink-0" />
                  <span className="text-xs font-black text-slate-700 uppercase">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl">
              <div className="mb-8">
                <span className="text-[10px] font-black text-emerald-400 uppercase mb-2 block">Starting From</span>
                <span className="text-5xl font-black tracking-tighter">{selectedHike.price}</span>
              </div>
              <div className="space-y-4 mb-10">
                <div className="flex justify-between text-xs font-bold uppercase text-slate-400">
                   <span className="flex items-center gap-2"><Clock size={16}/> Duration</span>
                   <span className="text-white">{selectedHike.duration}</span>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase text-slate-400">
                   <span className="flex items-center gap-2"><Gauge size={16}/> Level</span>
                   <span className="text-white">{selectedHike.difficulty}</span>
                </div>
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-500 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all">
                Book This Hike
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. RENDER GALLERY VIEW (DEFAULT)
  return (
    <div className="min-h-screen bg-white font-montserrat pb-20">
      <section className="bg-emerald-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-emerald-400 font-black uppercase tracking-[0.3em] text-[10px]">Expeditions</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6 tracking-tighter uppercase">Scenic <br/>Hiking</h1>
        </div>
        <Footprints size={400} className="absolute -bottom-20 -right-20 text-emerald-800 opacity-20" />
      </section>

      {/* FILTER BUTTONS */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-30">
        <div className="bg-white shadow-2xl rounded-3xl p-3 flex flex-wrap gap-2 items-center justify-center border border-gray-100">
           {['all', 'day-hike', 'forest', 'multi-day'].map(cat => (
             <button 
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeFilter === cat ? "bg-emerald-600 text-white shadow-lg" : "text-slate-500 hover:bg-slate-50"
                }`}
             >
               {cat.replace('-', ' ')}
             </button>
           ))}
        </div>
      </div>

      {/* HIKE GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredHikes.map((hike) => (
            <div key={hike.id} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <img src={hike.image} alt={hike.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black uppercase text-slate-800 tracking-widest">{hike.tag}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-slate-800 tracking-tighter uppercase mb-6">{hike.title}</h3>
                <div className="grid grid-cols-3 gap-2 py-6 border-y border-gray-50 mb-6">
                  <div className="text-center"><Clock size={14} className="mx-auto text-slate-400 mb-1"/><p className="text-[9px] font-black text-slate-400 uppercase">{hike.duration}</p></div>
                  <div className="text-center border-x border-gray-50"><Gauge size={14} className="mx-auto text-slate-400 mb-1"/><p className="text-[9px] font-black text-slate-400 uppercase">{hike.difficulty}</p></div>
                  <div className="text-center"><Mountain size={14} className="mx-auto text-slate-400 mb-1"/><p className="text-[9px] font-black text-slate-400 uppercase">{hike.elevation}</p></div>
                </div>
                <button 
                  onClick={() => setSelectedHike(hike)}
                  className="w-full bg-slate-50 group-hover:bg-emerald-600 group-hover:text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
                >
                  View Hike Details <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HikingActivity;
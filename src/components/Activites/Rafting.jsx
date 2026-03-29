import React, { useState, useEffect } from 'react';
import { 
  Waves, Clock, Zap, ArrowRight, 
  Droplets, Flame, Anchor, LayoutGrid, Info,
  ChevronLeft, CheckCircle, Shield, LifeBuoy
} from 'lucide-react';
import hero6 from "../../images/hero6.jpg";
const RaftingActivity = () => {
  // 1. STATE MANAGEMENT
  const [selectedTrip, setSelectedTrip] = useState(null); // null = list, {trip} = detail
  const [activeFilter, setActiveFilter] = useState('all');

  // 2. DATA
  const allTrips = [
    {
      id: "trishuli",
      title: "Trishuli River Rafting",
      desc: "Nepal's most popular rafting river. It offers impressive gorges, moderate rapids, and easy access from Kathmandu and Pokhara. Perfect for first-timers and families looking for a day of adventure.",
      duration: "1 Day",
      grade: "Class III",
      price: "$60",
      image: hero6,
      tag: "Top Rated",
      category: "whitewater",
      highlights: ["Exciting 'Ladies Delight' rapids", "Riverside lunch break", "Easy highway access"],
      itinerary: [
        { time: "7:00 AM", activity: "Drive to Charaudi (Starting Point)" },
        { time: "10:30 AM", activity: "Safety Briefing & Launch" },
        { time: "1:00 PM", activity: "Riverside Picnic Lunch" },
        { time: "3:30 PM", activity: "Take-out and Drive to Destination" }
      ]
    },
    {
      id: "bhote-koshi",
      title: "Bhote Koshi Extreme",
      desc: "One of the steepest rivers in Nepal. This is a technical, high-adrenaline river that requires power paddling and a taste for adventure. It's short, sharp, and incredibly exciting.",
      duration: "2 Days",
      grade: "Class IV-V",
      price: "$150",
      image: hero6,
      tag: "Extreme",
      category: "adventure",
      highlights: ["Continuous Class IV rapids", "Steepest river in Nepal", "Riverside luxury camping"],
      itinerary: [
        { time: "Day 1", activity: "Drive to Upper Bhote Koshi & Technical Run" },
        { time: "Day 2", activity: "The 'Main Event' rapids & Return" }
      ]
    }
  ];

  const filteredTrips = activeFilter === 'all' ? allTrips : allTrips.filter(t => t.category === activeFilter);

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedTrip]);

  // 3. RENDER DETAIL VIEW
  if (selectedTrip) {
    return (
      <div className="min-h-screen bg-white font-montserrat pb-20 animate-in fade-in zoom-in-95 duration-500">
        {/* HERO AREA */}
        <div className="relative h-[60vh] w-full">
          <button 
            onClick={() => setSelectedTrip(null)}
            className="absolute top-8 left-8 z-20 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-blue-900 transition-all shadow-xl"
          >
            <ChevronLeft size={24} />
          </button>
          <img src={selectedTrip.image} alt={selectedTrip.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-black/20"></div>
          <div className="absolute bottom-12 left-8 md:left-20">
            <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block shadow-lg">River Expedition</span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">{selectedTrip.title}</h1>
          </div>
        </div>

        {/* DETAILS CONTENT */}
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter mb-4">The Experience</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-12">{selectedTrip.desc}</p>
            
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter mb-6">River Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {selectedTrip.highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-5 bg-blue-50/50 rounded-2xl border border-blue-100">
                  <CheckCircle size={20} className="text-blue-600 flex-shrink-0" />
                  <span className="text-xs font-black text-slate-700 uppercase">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-blue-950 rounded-[2.5rem] p-10 text-white shadow-2xl">
              <div className="mb-8">
                <span className="text-[10px] font-black text-blue-400 uppercase mb-2 block tracking-widest">Total Cost</span>
                <span className="text-5xl font-black tracking-tighter">{selectedTrip.price}</span>
              </div>
              <div className="space-y-4 mb-10">
                <div className="flex justify-between text-xs font-bold uppercase text-blue-300">
                   <span className="flex items-center gap-2"><Clock size={16}/> Duration</span>
                   <span className="text-white">{selectedTrip.duration}</span>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase text-blue-300">
                   <span className="flex items-center gap-2"><Zap size={16}/> Rapids</span>
                   <span className="text-white">{selectedTrip.grade}</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-500 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all shadow-lg shadow-blue-900/40">
                Book My Seat
              </button>
              <div className="mt-8 pt-8 border-t border-blue-900 space-y-3">
                <p className="flex items-center gap-2 text-[10px] font-bold text-blue-400 uppercase"><LifeBuoy size={14} className="text-blue-500" /> High-End Safety Gear</p>
                <p className="flex items-center gap-2 text-[10px] font-bold text-blue-400 uppercase"><Shield size={14} className="text-blue-500" /> Licensed River Guides</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. RENDER GALLERY VIEW
  return (
    <div className="min-h-screen bg-white font-montserrat pb-20">
      <section className="bg-blue-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px]">Water Adventures</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6 tracking-tighter uppercase">Whitewater <br/>Rafting</h1>
        </div>
        <Waves size={400} className="absolute -bottom-20 -right-20 text-blue-800 opacity-20" />
      </section>

      {/* FILTER BUTTONS */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-30">
        <div className="bg-white shadow-2xl rounded-3xl p-3 flex flex-wrap gap-2 items-center justify-center border border-gray-100">
           {[
             { id: 'all', label: 'All Rivers', icon: <LayoutGrid size={16}/> },
             { id: 'whitewater', label: 'Whitewater', icon: <Droplets size={16}/> },
             { id: 'adventure', label: 'Extreme', icon: <Flame size={16}/> }
           ].map(cat => (
             <button 
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeFilter === cat.id ? "bg-blue-600 text-white shadow-lg" : "text-slate-500 hover:bg-slate-50"
                }`}
             >
               {cat.icon} {cat.label}
             </button>
           ))}
        </div>
      </div>

      {/* TRIP GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredTrips.map((trip) => (
            <div key={trip.id} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <img src={trip.image} alt={trip.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black uppercase text-blue-900 tracking-widest">{trip.tag}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-slate-800 tracking-tighter uppercase mb-6">{trip.title}</h3>
                <div className="grid grid-cols-2 gap-2 py-6 border-y border-gray-50 mb-6">
                  <div className="text-center"><Clock size={14} className="mx-auto text-slate-400 mb-1"/><p className="text-[9px] font-black text-slate-400 uppercase">{trip.duration}</p></div>
                  <div className="text-center border-l border-gray-50"><Zap size={14} className="mx-auto text-slate-400 mb-1"/><p className="text-[9px] font-black text-slate-400 uppercase">{trip.grade}</p></div>
                </div>
                <button 
                  onClick={() => setSelectedTrip(trip)}
                  className="w-full bg-slate-50 group-hover:bg-blue-600 group-hover:text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
                >
                  Launch Expedition <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RaftingActivity;
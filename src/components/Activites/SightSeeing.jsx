import React, { useState, useEffect } from 'react';
import { 
  MapPin, Binoculars, Clock, Map, ArrowRight, 
  Building2, Landmark, Globe, LayoutGrid,
  ChevronLeft, CheckCircle, Shield, History
} from 'lucide-react';

const SightSeeingActivity = () => {
  const [selectedTour, setSelectedTour] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const allTours = [
    {
      id: "kathmandu-durbar",
      title: "Kathmandu Heritage Tour",
      desc: "Explore the ancient heart of Nepal. This tour takes you through centuries-old palaces, courtyards, and temples. You'll witness the living goddess Kumari and the stunning Newari architecture of the Malla era.",
      duration: "6 Hours",
      type: "Cultural",
      price: "$50",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1200",
      tag: "UNESCO Site",
      category: "history",
      highlights: ["Living Goddess Kumari House", "Kal Bhairav Temple", "Freak Street History"],
      itinerary: [
        { time: "10:00 AM", activity: "Meet at Durbar Square Gate" },
        { time: "11:30 AM", activity: "Temple exploration & History talk" },
        { time: "1:00 PM", activity: "Traditional Newari Lunch" }
      ]
    },
    {
      id: "pashupatinath",
      title: "Spiritual Kathmandu",
      desc: "A deep dive into the spiritual side of Nepal. Visit the sacred Hindu temple of Pashupatinath and the Great Stupa of Boudhanath, the center of Tibetan Buddhism in Nepal.",
      duration: "5 Hours",
      type: "Religious",
      price: "$45",
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&q=80&w=1200",
      tag: "Deep Culture",
      category: "spiritual",
      highlights: ["Evening Aarti Ceremony", "Boudhanath Circumambulation", "Monastery visit"],
      itinerary: [
        { time: "2:00 PM", activity: "Pashupatinath Temple Exploration" },
        { time: "4:00 PM", activity: "Boudhanath Stupa Walk" },
        { time: "6:00 PM", activity: "Witness Evening Prayer (Aarti)" }
      ]
    }
  ];

  const filteredTours = activeFilter === 'all' ? allTours : allTours.filter(t => t.category === activeFilter);

  useEffect(() => { window.scrollTo(0, 0); }, [selectedTour]);

  if (selectedTour) {
    return (
      <div className="min-h-screen bg-white font-montserrat pb-20 animate-in fade-in duration-500">
        <div className="relative h-[60vh] w-full">
          <button onClick={() => setSelectedTour(null)} className="absolute top-8 left-8 z-20 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-amber-900 transition-all shadow-xl"><ChevronLeft size={24} /></button>
          <img src={selectedTour.image} alt={selectedTour.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-transparent to-black/20"></div>
          <div className="absolute bottom-12 left-8 md:left-20">
            <span className="bg-amber-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block">Cultural Discovery</span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">{selectedTour.title}</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter mb-4">Tour Narrative</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-12">{selectedTour.desc}</p>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter mb-6">Experience Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {selectedTour.highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-5 bg-amber-50 rounded-2xl border border-amber-100">
                  <CheckCircle size={20} className="text-amber-600 flex-shrink-0" />
                  <span className="text-xs font-black text-slate-700 uppercase">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl">
              <div className="mb-8">
                <span className="text-[10px] font-black text-amber-400 uppercase mb-2 block tracking-widest">Tour Price</span>
                <span className="text-5xl font-black tracking-tighter">{selectedTour.price}</span>
              </div>
              <div className="space-y-4 mb-10 border-y border-slate-800 py-6">
                <div className="flex justify-between text-xs font-bold uppercase">
                  <span className="text-slate-400 flex items-center gap-2"><Clock size={16}/> Duration</span>
                  <span>{selectedTour.duration}</span>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase">
                  <span className="text-slate-400 flex items-center gap-2"><Landmark size={16}/> Type</span>
                  <span>{selectedTour.type}</span>
                </div>
              </div>
              <button className="w-full bg-amber-600 hover:bg-amber-500 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all shadow-lg shadow-amber-900/40">
                Book This Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-montserrat pb-20">
      <section className="bg-amber-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-amber-400 font-black uppercase tracking-[0.3em] text-[10px]">Heritage & Culture</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6 tracking-tighter uppercase">City <br/>Sightseeing</h1>
        </div>
        <Binoculars size={400} className="absolute -bottom-20 -right-20 text-amber-800 opacity-20" />
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-30">
        <div className="bg-white shadow-2xl rounded-3xl p-3 flex flex-wrap gap-2 items-center justify-center border border-gray-100">
           {[{id:'all', label:'All Tours', icon:<LayoutGrid size={16}/>}, {id:'history', label:'Historical', icon:<History size={16}/>}, {id:'spiritual', label:'Spiritual', icon:<Globe size={16}/>}].map(cat => (
             <button key={cat.id} onClick={() => setActiveFilter(cat.id)} className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeFilter === cat.id ? "bg-amber-600 text-white shadow-lg" : "text-slate-500 hover:bg-slate-50"}`}>
               {cat.icon} {cat.label}
             </button>
           ))}
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredTours.map((tour) => (
            <div key={tour.id} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6"><span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black uppercase text-amber-900 tracking-widest">{tour.tag}</span></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-slate-800 tracking-tighter uppercase mb-6">{tour.title}</h3>
                <div className="flex gap-4 py-6 border-y border-gray-50 mb-6">
                  <div className="flex-1 text-center border-r border-gray-100">
                    <Clock size={14} className="mx-auto text-slate-400 mb-1"/>
                    <p className="text-[9px] font-black text-slate-400 uppercase">{tour.duration}</p>
                  </div>
                  <div className="flex-1 text-center">
                    <MapPin size={14} className="mx-auto text-slate-400 mb-1"/>
                    <p className="text-[9px] font-black text-slate-400 uppercase">{tour.type}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedTour(tour)} className="w-full bg-slate-50 group-hover:bg-amber-600 group-hover:text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2">
                  Explore Tour <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SightSeeingActivity;
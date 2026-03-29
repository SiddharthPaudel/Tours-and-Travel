import React, { useState, useEffect } from 'react';
import { 
  Mountain, Clock, Gauge, ArrowRight, 
  Compass, Trophy, Timer, LayoutGrid, Info,
  ChevronLeft, CheckCircle, Shield, MapPin, Wind
} from 'lucide-react';
import hero5 from "../../images/hero5.jpg";
const TrekActivity = () => {
  // 1. STATE MANAGEMENT
  const [selectedTrek, setSelectedTrek] = useState(null); // null = gallery, {trek} = detail
  const [activeFilter, setActiveFilter] = useState('all');

  // 2. DATA WITH EXTENDED DETAILS
  const allTreks = [
    {
      id: "ebc",
      title: "Everest Base Camp",
      desc: "The ultimate pilgrimage for trekkers. Walk in the footsteps of legends as you journey through Sherpa villages to the foot of the world's highest peak. This trek offers breathtaking views of Everest, Lhotse, and Ama Dablam.",
      duration: "14 Days",
      difficulty: "Hard",
      maxAlt: "5,364m",
      price: "$1,450",
      image: hero5,
      tag: "Most Popular",
      category: "high-pass",
      highlights: ["Base Camp of Mt. Everest", "Kala Patthar Viewpoint", "Tengboche Monastery"],
      itinerary: [
        { day: "Day 1-2", activity: "Flight to Lukla & Trek to Phakding" },
        { day: "Day 3-5", activity: "Namche Bazaar Acclimatization" },
        { day: "Day 9", activity: "Reaching Everest Base Camp" },
        { day: "Day 14", activity: "Return Flight to Kathmandu" }
      ]
    },
    {
      id: "abc",
      title: "Annapurna Base Camp",
      desc: "A natural amphitheater of mountains. This trek takes you deep into the Annapurna Massif, surrounded by ten peaks over 6,000m. It's a culturally rich journey through Gurung villages and rhododendron forests.",
      duration: "10 Days",
      difficulty: "Moderate",
      maxAlt: "4,130m",
      price: "$980",
      image: hero5,
      tag: "Best Scenery",
      category: "beginner",
      highlights: ["Machhapuchhre (Fishtail) View", "Natural Hot Springs", "Annapurna Sanctuary"],
      itinerary: [
        { day: "Day 1", activity: "Drive to Nayapul & Trek to Ulleri" },
        { day: "Day 4", activity: "Poon Hill Sunrise Hike" },
        { day: "Day 7", activity: "Arrival at Annapurna Base Camp" }
      ]
    },
    {
      id: "ghorepani",
      title: "Poon Hill Trek",
      duration: "5 Days",
      difficulty: "Easy",
      maxAlt: "3,210m",
      price: "$450",
      image: hero5,
      tag: "Short & Sweet",
      category: "short",
      desc: "A perfect introduction to Himalayan trekking. Famous for its sunrise view over the Dhaulagiri and Annapurna ranges.",
      highlights: ["Panoramic Sunrise Views", "Rhododendron Forests", "Gurung Culture"],
      itinerary: [
        { day: "Day 1", activity: "Pokhara to Tikhedhunga" },
        { day: "Day 2", activity: "Ulleri to Ghorepani" },
        { day: "Day 3", activity: "Poon Hill Sunrise & Tadapani" }
      ]
    }
  ];

  const filteredTreks = activeFilter === 'all' ? allTreks : allTreks.filter(trek => trek.category === activeFilter);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedTrek]);

  // 3. RENDER DETAIL VIEW
  if (selectedTrek) {
    return (
      <div className="min-h-screen bg-white font-montserrat pb-20 animate-in fade-in duration-500">
        <div className="relative h-[65vh] w-full">
          <button 
            onClick={() => setSelectedTrek(null)}
            className="absolute top-8 left-8 z-20 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-slate-900 transition-all shadow-xl border border-white/30"
          >
            <ChevronLeft size={24} />
          </button>
          <img src={selectedTrek.image} alt={selectedTrek.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
          <div className="absolute bottom-12 left-8 md:left-20">
            <span className="bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-4 inline-block shadow-lg">Mountain Expedition</span>
            <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">{selectedTrek.title}</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter mb-4">The Journey</h2>
              <p className="text-slate-600 font-medium leading-relaxed">{selectedTrek.desc}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter mb-6">Route Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedTrek.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-5 bg-slate-50 rounded-3xl border border-slate-100">
                    <CheckCircle size={20} className="text-emerald-500 flex-shrink-0" />
                    <span className="text-xs font-black text-slate-700 uppercase">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
                <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter mb-8">Itinerary Overview</h2>
                <div className="space-y-8">
                  {selectedTrek.itinerary.map((step, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 mt-1"></div>
                        <div className="w-0.5 h-full bg-slate-100 mt-2"></div>
                      </div>
                      <div className="pb-4">
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">{step.day}</span>
                        <h4 className="text-sm font-bold text-slate-800 uppercase mt-1">{step.activity}</h4>
                      </div>
                    </div>
                  ))}
                </div>
            </section>
          </div>

          {/* BOOKING SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl">
              <div className="mb-8">
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block mb-2">Package Cost</span>
                <span className="text-5xl font-black tracking-tighter">{selectedTrek.price}</span>
              </div>
              
              <div className="space-y-5 mb-10 border-y border-slate-800 py-8">
                <div className="flex justify-between items-center text-xs font-bold uppercase">
                  <span className="text-slate-500 flex items-center gap-2"><Clock size={16}/> Time</span>
                  <span>{selectedTrek.duration}</span>
                </div>
                <div className="flex justify-between items-center text-xs font-bold uppercase">
                  <span className="text-slate-500 flex items-center gap-2"><Gauge size={16}/> Grade</span>
                  <span>{selectedTrek.difficulty}</span>
                </div>
                <div className="flex justify-between items-center text-xs font-bold uppercase">
                  <span className="text-slate-500 flex items-center gap-2"><Mountain size={16}/> Peak</span>
                  <span>{selectedTrek.maxAlt}</span>
                </div>
              </div>

              <button className="w-full bg-emerald-600 hover:bg-emerald-500 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all shadow-xl shadow-emerald-900/20">
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. RENDER GALLERY VIEW
  return (
    <div className="min-h-screen bg-white font-montserrat pb-20">
      <section className="bg-slate-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-emerald-500 font-black uppercase tracking-[0.3em] text-[10px]">Nepal Himalayas</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6 tracking-tighter uppercase">Iconic <br/>Trekking</h1>
        </div>
        <Mountain size={400} className="absolute -bottom-20 -right-20 text-slate-800 opacity-20" />
      </section>

      {/* FILTER BAR */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-30">
        <div className="bg-white shadow-2xl rounded-3xl p-3 flex flex-wrap gap-2 items-center justify-center border border-gray-100">
          {[
            { id: 'all', label: 'All Treks', icon: <LayoutGrid size={16} /> },
            { id: 'beginner', label: 'Beginner', icon: <Compass size={16} /> },
            { id: 'high-pass', label: 'High Pass', icon: <Trophy size={16} /> },
            { id: 'short', label: 'Short', icon: <Timer size={16} /> },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                activeFilter === cat.id ? "bg-emerald-600 text-white shadow-lg" : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredTreks.map((trek) => (
            <div key={trek.id} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <img src={trek.image} alt={trek.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black uppercase text-slate-800 tracking-widest">{trek.tag}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-slate-800 tracking-tighter uppercase mb-6">{trek.title}</h3>
                <div className="grid grid-cols-3 gap-2 py-6 border-y border-gray-50 mb-6">
                  <div className="text-center"><Clock size={14} className="mx-auto text-slate-400 mb-1"/><p className="text-[9px] font-black text-slate-400 uppercase">{trek.duration}</p></div>
                  <div className="text-center border-x border-gray-50"><Gauge size={14} className="mx-auto text-slate-400 mb-1"/><p className="text-[9px] font-black text-slate-400 uppercase">{trek.difficulty}</p></div>
                  <div className="text-center"><Mountain size={14} className="mx-auto text-slate-400 mb-1"/><p className="text-[9px] font-black text-slate-400 uppercase">{trek.maxAlt}</p></div>
                </div>
                <button 
                  onClick={() => setSelectedTrek(trek)}
                  className="w-full bg-slate-50 group-hover:bg-emerald-600 group-hover:text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
                >
                  View Expedition <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrekActivity;
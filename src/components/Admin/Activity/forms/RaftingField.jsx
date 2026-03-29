import React from 'react';
import { Waves, Shield, Thermometer, Map } from 'lucide-react';

const RaftingFields = () => (
  <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
    <div className="flex items-center gap-2 px-1 text-[10px] font-black text-cyan-600 uppercase tracking-widest mb-2">
      <Waves size={14} /> River & Safety Logistics
    </div>

    <div className="grid grid-cols-2 gap-4">
      {/* River Selection */}
      <div className="col-span-2 md:col-span-1">
        <label className="text-[9px] font-bold text-slate-400 uppercase ml-1 mb-1 block">River Name</label>
        <input 
          type="text" 
          placeholder="e.g. Trishuli or Bhote Koshi" 
          className="w-full p-4 bg-slate-50 rounded-xl text-xs font-bold border-2 border-transparent focus:border-cyan-500/10 outline-none" 
        />
      </div>

      {/* Rapid Class/Grade */}
      <div className="col-span-2 md:col-span-1">
        <label className="text-[9px] font-bold text-slate-400 uppercase ml-1 mb-1 block">River Grade</label>
        <select className="w-full p-4 bg-slate-50 rounded-xl text-xs font-bold border-2 border-transparent focus:border-cyan-500/10 outline-none appearance-none">
          <option>Class II (Easy)</option>
          <option>Class III (Moderate)</option>
          <option>Class IV (Difficult)</option>
          <option>Class V (Extreme)</option>
        </select>
      </div>

      {/* Distance/Length */}
      <div>
        <label className="text-[9px] font-bold text-slate-400 uppercase ml-1 mb-1 block">Rafting Distance</label>
        <input 
          type="text" 
          placeholder="e.g. 15 km" 
          className="w-full p-4 bg-slate-50 rounded-xl text-xs font-bold border-2 border-transparent focus:border-cyan-500/10 outline-none" 
        />
      </div>

      {/* Best Season */}
      <div>
        <label className="text-[9px] font-bold text-slate-400 uppercase ml-1 mb-1 block">Water Temperature</label>
        <input 
          type="text" 
          placeholder="e.g. 12°C - 18°C" 
          className="w-full p-4 bg-slate-50 rounded-xl text-xs font-bold border-2 border-transparent focus:border-cyan-500/10 outline-none" 
        />
      </div>

      {/* Equipment Checkboxes */}
      <div className="col-span-2 p-4 bg-cyan-50/50 rounded-2xl border border-cyan-100/50">
        <p className="text-[9px] font-black text-cyan-700 uppercase mb-3">Safety Gear Provided</p>
        <div className="grid grid-cols-2 gap-2">
          {['Life Jacket', 'Helmet', 'Dry Bag', 'Paddle', 'First Aid'].map((item) => (
            <label key={item} className="flex items-center gap-2 text-[10px] font-bold text-slate-600 cursor-pointer">
              <input type="checkbox" className="rounded border-cyan-200 text-cyan-600 focus:ring-cyan-500" />
              {item}
            </label>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default RaftingFields;
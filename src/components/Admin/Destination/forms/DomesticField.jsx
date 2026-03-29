import React from 'react';
import { MapPin, Truck, Calendar } from 'lucide-react';

const DomesticFields = ({ formData, onChange }) => (
  <div className="grid grid-cols-2 gap-4 animate-in slide-in-from-top-2">
    <div className="col-span-2 text-[10px] font-black text-emerald-600 uppercase mb-2 px-1 tracking-widest">
      Local Travel Logistics
    </div>
    
    {/* Province/State */}
    <div className="col-span-2">
      <label className="text-[9px] font-bold text-slate-400 uppercase ml-1 mb-1 block">Province / Region</label>
      <input 
        type="text" 
        name="province"
        placeholder="e.g. Koshi Province or Bagmati"
        className="w-full p-4 bg-slate-50 rounded-xl text-xs font-bold outline-none border-2 border-transparent focus:border-emerald-500/10"
        value={formData.province || ''} 
        onChange={onChange}
      />
    </div>

    {/* Local Transport */}
    <div>
      <label className="text-[9px] font-bold text-slate-400 uppercase ml-1 mb-1 block">Best Way to Reach</label>
      <select 
        name="transport"
        className="w-full p-4 bg-slate-50 rounded-xl text-xs font-bold outline-none appearance-none"
        value={formData.transport || ''} 
        onChange={onChange}
      >
        <option value="">Select Option</option>
        <option value="flight">Local Flight</option>
        <option value="bus">Tourist Bus</option>
        <option value="jeep">Private Jeep</option>
        <option value="trek">On Foot / Trekking</option>
      </select>
    </div>

    {/* Nearest City/Hub */}
    <div>
      <label className="text-[9px] font-bold text-slate-400 uppercase ml-1 mb-1 block">Nearest Major Hub</label>
      <input 
        type="text" 
        name="nearestHub"
        placeholder="e.g. Kathmandu or Pokhara"
        className="w-full p-4 bg-slate-50 rounded-xl text-xs font-bold outline-none"
        value={formData.nearestHub || ''} 
        onChange={onChange}
      />
    </div>

    {/* Local Highlights Checkboxes */}
    <div className="col-span-2 p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100/50">
      <p className="text-[9px] font-black text-emerald-700 uppercase mb-3 px-1">Destination Vibe</p>
      <div className="grid grid-cols-2 gap-2">
        {['Cultural Site', 'National Park', 'Mountain View', 'Waterfalls'].map((vibe) => (
          <label key={vibe} className="flex items-center gap-2 text-[10px] font-bold text-slate-600 cursor-pointer">
            <input 
              type="checkbox" 
              name="vibe"
              className="rounded border-emerald-200 text-emerald-600 focus:ring-emerald-500" 
            />
            {vibe}
          </label>
        ))}
      </div>
    </div>
  </div>
);

export default DomesticFields;
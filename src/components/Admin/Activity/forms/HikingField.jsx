const HikingFields = () => (
  <div className="grid grid-cols-2 gap-4 animate-in slide-in-from-top-2">
    <div className="col-span-2 text-[10px] font-black text-emerald-600 uppercase mb-2">Hiking Details</div>
    <input type="text" placeholder="Sunrise/Sunset Time" className="p-4 bg-slate-50 rounded-xl text-xs font-bold" />
    <input type="text" placeholder="Max Elevation (m)" className="p-4 bg-slate-50 rounded-xl text-xs font-bold" />
    <input type="text" placeholder="Pickup Point" className="col-span-2 p-4 bg-slate-50 rounded-xl text-xs font-bold" />
  </div>
);
export default HikingFields;
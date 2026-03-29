const SightseeingFields = () => (
  <div className="space-y-4 animate-in fade-in duration-300">
    <div className="text-[10px] font-black text-purple-600 uppercase tracking-[0.2em] mb-2">Sightseeing Logistics</div>
    <div className="grid grid-cols-2 gap-4">
      <input type="text" placeholder="Vehicle Type (e.g. Private Jeep)" className="p-4 bg-slate-50 rounded-xl text-xs font-bold" />
      <input type="text" placeholder="Total Monument Fees ($)" className="p-4 bg-slate-50 rounded-xl text-xs font-bold" />
      <input type="text" placeholder="Pickup Location" className="col-span-2 p-4 bg-slate-50 rounded-xl text-xs font-bold" />
      <label className="flex items-center gap-2 text-[10px] font-bold text-slate-500 col-span-2">
        <input type="checkbox" /> Includes Professional Tour Guide?
      </label>
    </div>
  </div>
);
export default SightseeingFields;
const TrekkingFields = () => (
  <div className="grid grid-cols-2 gap-4 animate-in slide-in-from-top-2">
    <div className="col-span-2 text-[10px] font-black text-blue-600 uppercase mb-2">Trekking Logistics</div>
    <input type="text" placeholder="Permit Required (TIMS/ACAP)" className="col-span-2 p-4 bg-slate-50 rounded-xl text-xs font-bold" />
    <input type="text" placeholder="Accommodation (Tea House/Camping)" className="p-4 bg-slate-50 rounded-xl text-xs font-bold" />
    <input type="text" placeholder="Difficulty Level" className="p-4 bg-slate-50 rounded-xl text-xs font-bold" />
  </div>
);
export default TrekkingFields;
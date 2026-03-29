const InternationalFields = ({ formData, onChange }) => (
  <div className="grid grid-cols-2 gap-4 animate-in slide-in-from-top-2">
    <div className="col-span-2 text-[10px] font-black text-blue-600 uppercase mb-2 px-1 tracking-widest">Global Travel Requirements</div>
    
    <input 
      type="text" name="visa" placeholder="Visa Policy (e.g. On Arrival)"
      className="p-4 bg-slate-50 rounded-xl text-xs font-bold outline-none"
      value={formData.visa || ''} onChange={onChange}
    />
    <input 
      type="text" name="currency" placeholder="Local Currency (e.g. IDR, USD)"
      className="p-4 bg-slate-50 rounded-xl text-xs font-bold outline-none"
      value={formData.currency || ''} onChange={onChange}
    />
    <input 
      type="text" name="language" placeholder="Main Language Spoken"
      className="col-span-2 p-4 bg-slate-50 rounded-xl text-xs font-bold outline-none"
      value={formData.language || ''} onChange={onChange}
    />
  </div>
);
export default InternationalFields;
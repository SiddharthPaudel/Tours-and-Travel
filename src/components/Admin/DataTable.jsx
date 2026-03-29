import React from 'react';
import { Edit2, Trash2, MapPin } from 'lucide-react';

const DataTable = ({ data, type, onDelete, onEdit }) => {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white rounded-[2rem] p-12 text-center border border-dashed border-slate-200 mt-6">
        <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">No records found</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      {/* 1. DESKTOP TABLE VIEW - Visible on md and up */}
      <div className="hidden md:block bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50/50 border-b border-slate-100">
            <tr>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {type === 'activities' ? 'Package Details' : 'Destination Info'}
              </th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Type</th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/30 transition-all group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 flex-shrink-0">
                      <img src={item.image || 'https://via.placeholder.com/150'} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 uppercase tracking-tight">{item.title || item.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold flex items-center gap-1">
                        <MapPin size={10} className="text-emerald-500" /> {item.details?.province || item.details?.pickup || 'Global'}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[9px] font-black rounded-lg uppercase tracking-widest">
                    {item.category || item.type}
                  </span>
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex justify-end gap-2">
                    <button 
                      onClick={() => onEdit(item)}
                      className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-500 hover:text-white transition-all border border-emerald-100"
                    >
                      <Edit2 size={14} />
                    </button>
                    <button 
                      onClick={() => onDelete(item.id)}
                      className="p-2.5 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-500 hover:text-white transition-all border border-rose-100"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 2. MOBILE CARD VIEW - Visible on small screens only */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {data.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 flex-shrink-0">
                <img src={item.image || 'https://via.placeholder.com/150'} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="flex-grow">
                <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-500 text-[8px] font-black rounded uppercase tracking-widest mb-1">
                  {item.category || item.type}
                </span>
                <p className="text-sm font-bold text-slate-900 uppercase tracking-tight leading-tight">
                  {item.title || item.name}
                </p>
                <p className="text-[10px] text-slate-400 font-bold flex items-center gap-1 mt-1">
                  <MapPin size={10} className="text-emerald-500" /> {item.details?.province || item.details?.pickup || 'Global'}
                </p>
              </div>
            </div>

            <div className="flex gap-2 pt-2 border-t border-slate-50">
              <button 
                onClick={() => onEdit(item)}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-emerald-50 text-emerald-600 rounded-xl font-black text-[9px] uppercase tracking-widest border border-emerald-100"
              >
                <Edit2 size={14} /> Edit
              </button>
              <button 
                onClick={() => onDelete(item.id)}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-rose-50 text-rose-600 rounded-xl font-black text-[9px] uppercase tracking-widest border border-rose-100"
              >
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTable;
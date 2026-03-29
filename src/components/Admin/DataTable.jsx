import React from 'react';
import { Edit2, Trash2, MapPin } from 'lucide-react';

const DataTable = ({ data, type, onDelete, onEdit }) => {
  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden mt-6">
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-50/50 border-b border-slate-100">
          <tr>
            <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              {type === 'activities' ? 'Package Details' : 'Destination Info'}
            </th>
            <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Type</th>
            <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right px-12">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-slate-50/30 transition-all">
              <td className="px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 overflow-hidden border border-slate-200">
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
              {/* ACTIONS - NOW PERMANENTLY VISIBLE */}
              <td className="px-8 py-6 text-right">
                <div className="flex justify-end gap-3 px-4">
                  <button 
                    onClick={() => onEdit(item)}
                    className="p-3 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-500 hover:text-white transition-all shadow-sm border border-emerald-100"
                    title="Edit Item"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button 
                    onClick={() => onDelete(item.id)}
                    className="p-3 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-500 hover:text-white transition-all shadow-sm border border-rose-100"
                    title="Delete Item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
import React, { useState } from 'react';
import { Search, ShieldAlert, MapPin, Calendar } from 'lucide-react';

const UserManager = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const [users] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Customer', status: 'Verified', initial: 'JD', joinDate: 'Jan 2024' },
    { id: 2, name: 'Sarah Chen', email: 'sarah.guide@tomo.com', role: 'Guide', status: 'Pending', initial: 'SC', joinDate: 'Feb 2024' },
    { id: 3, name: 'Mike Ross', email: 'mike@tomo.admin', role: 'Admin', status: 'Verified', initial: 'MR', joinDate: 'Dec 2023' },
    { id: 4, name: 'Emma Wilson', email: 'emma@traveler.com', role: 'Customer', status: 'Verified', initial: 'EW', joinDate: 'Mar 2024' },
    { id: 5, name: 'Liam Neeson', email: 'liam@action.com', role: 'Customer', status: 'Suspended', initial: 'LN', joinDate: 'Jan 2024' },
  ]);

  const filteredUsers = users
    .filter(user => user.role === 'Customer')
    .filter(user => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      
      {/* HEADER SECTION - Stacked on Mobile */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter uppercase">Traveler Directory</h2>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
            Total Verified Customers: {filteredUsers.filter(u => u.status === 'Verified').length}
          </p>
        </div>
        
        {/* SEARCH BAR - Full width on Mobile */}
        <div className="relative w-full md:w-72">
          <Search 
            className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
              searchQuery ? 'text-emerald-500' : 'text-slate-300'
            }`} 
            size={16} 
          />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search travelers..."
            className="w-full pl-12 pr-6 py-3.5 bg-slate-100/50 border-2 border-transparent focus:border-emerald-500/10 focus:bg-white rounded-2xl text-xs font-bold outline-none transition-all shadow-sm"
          />
        </div>
      </div>

      {/* DESKTOP TABLE VIEW - Hidden on small screens */}
      <div className="hidden lg:block bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50/50 border-b border-slate-100">
            <tr>
              <th className="px-10 py-5 text-[9px] font-black text-slate-400 uppercase tracking-widest">Traveler</th>
              <th className="px-10 py-5 text-[9px] font-black text-slate-400 uppercase tracking-widest">Email Address</th>
              <th className="px-10 py-5 text-[9px] font-black text-slate-400 uppercase tracking-widest text-center">Joined</th>
              <th className="px-10 py-5 text-[9px] font-black text-slate-400 uppercase tracking-widest text-right">Status</th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-slate-50">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/30 transition-all">
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-[10px] tracking-tighter shadow-lg">
                        {user.initial}
                      </div>
                      <span className="text-sm font-bold text-slate-800 uppercase tracking-tight">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <span className="text-xs font-semibold text-slate-500">{user.email}</span>
                  </td>
                  <td className="px-10 py-6 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {user.joinDate}
                  </td>
                  <td className="px-10 py-6 text-right">
                    <span className={`text-[9px] font-black uppercase px-3 py-1.5 rounded-xl border ${
                      user.status === 'Verified' 
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                        : 'bg-rose-50 text-rose-600 border-rose-100'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <EmptyState />
            )}
          </tbody>
        </table>
      </div>

      {/* MOBILE/TABLET LIST VIEW - Hidden on Large screens */}
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-[10px]">
                    {user.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 uppercase tracking-tight leading-none">{user.name}</p>
                    <p className="text-[10px] font-medium text-slate-400 mt-1">{user.email}</p>
                  </div>
                </div>
                <span className={`text-[8px] font-black uppercase px-2 py-1 rounded-lg border ${
                  user.status === 'Verified' 
                    ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                    : 'bg-rose-50 text-rose-600 border-rose-100'
                }`}>
                  {user.status}
                </span>
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-slate-300" />
                  <span className="text-[9px] font-bold text-slate-400 uppercase">Joined {user.joinDate}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full">
            <EmptyState />
          </div>
        )}
      </div>
    </div>
  );
};

// Reusable Empty State Component
const EmptyState = () => (
  <div className="py-24 text-center bg-white rounded-[2rem] border border-slate-100">
    <div className="flex flex-col items-center opacity-20">
      <ShieldAlert size={40} className="mb-2" />
      <p className="text-xs font-black uppercase tracking-widest">No matching travelers</p>
    </div>
  </div>
);

export default UserManager;
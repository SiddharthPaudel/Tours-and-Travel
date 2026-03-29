import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import DashboardOverview from './DashboardOverview';
import UserManager from './UserManager';
import ActivityCRUD from './Activity/ActivityManager';
import { Search, Bell } from 'lucide-react';
import DestinationManager from './Destination/DestinationManager';
import InquiryManager from './InquiryManager';

const AdminMain = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-[#F8FAFB] flex font-['Montserrat']">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow lg:ml-64 flex flex-col">
        {/* TOPBAR */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input type="text" placeholder="Global search..." className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-xs font-semibold outline-none" />
          </div>
          <div className="flex items-center gap-5 border-l border-slate-100 pl-5">
            <div className="text-right">
              <p className="text-[10px] font-black text-slate-900 uppercase">Alex Thompson</p>
              <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-wider">Super Admin</p>
            </div>
            <img src="https://i.pravatar.cc/150?u=admin" className="w-10 h-10 rounded-xl shadow-sm" alt="Admin" />
          </div>
        </header>

        {/* DYNAMIC CONTENT SWITCHER */}
        <div className="p-8">
          {activeTab === 'dashboard' && <DashboardOverview />}
          {activeTab === 'users' && <UserManager />}
          {activeTab === 'activities' && <ActivityCRUD />}
          {activeTab === 'destinations' && <DestinationManager />}
          {activeTab === 'messages' && <InquiryManager />}
        </div>
      </main>
    </div>
  );
};

export default AdminMain;
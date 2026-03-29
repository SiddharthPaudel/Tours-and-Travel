import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import DashboardOverview from './DashboardOverview';
import UserManager from './UserManager';
import ActivityCRUD from './Activity/ActivityManager';
import { Search, Menu, X } from 'lucide-react'; // Added Menu and X icons
import DestinationManager from './Destination/DestinationManager';
import InquiryManager from './InquiryManager';

const AdminMain = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Helper to close sidebar when a tab is clicked (on mobile)
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFB] flex font-['Montserrat'] overflow-x-hidden">
      {/* SIDEBAR OVERLAY (Mobile only) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR - Added conditional translation classes */}
      <div className={`fixed inset-y-0 left-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <AdminSidebar activeTab={activeTab} setActiveTab={handleTabChange} />
      </div>

      <main className="flex-grow lg:ml-64 flex flex-col min-w-0">
        {/* TOPBAR */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-4 md:px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            {/* MOBILE MENU BUTTON */}
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 bg-slate-50 rounded-lg lg:hidden text-slate-600"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* SEARCH - Hidden on very small screens to save space, or use a toggle */}
            <div className="relative w-40 md:w-72 hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-xs font-semibold outline-none focus:ring-1 focus:ring-emerald-500" 
              />
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-5 border-l border-slate-100 pl-3 md:pl-5">
            <div className="text-right hidden xs:block">
              <p className="text-[10px] font-black text-slate-900 uppercase">Alex Thompson</p>
              <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-wider">Super Admin</p>
            </div>
            <img 
              src="https://i.pravatar.cc/150?u=admin" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-xl shadow-sm" 
              alt="Admin" 
            />
          </div>
        </header>

        {/* DYNAMIC CONTENT SWITCHER */}
        <div className="p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'dashboard' && <DashboardOverview />}
            {activeTab === 'users' && <UserManager />}
            {activeTab === 'activities' && <ActivityCRUD />}
            {activeTab === 'destinations' && <DestinationManager />}
            {activeTab === 'messages' && <InquiryManager />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminMain;
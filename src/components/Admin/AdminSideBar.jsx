import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Map, 
  Globe, 
  LogOut,
  Settings,
  ChevronRight,
  Mail,
  X // Added X icon for a close button on mobile
} from 'lucide-react';

const AdminSidebar = ({ activeTab, setActiveTab, setIsSidebarOpen }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'activities', label: 'Activities', icon: Map },
    { id: 'destinations', label: 'Destinations', icon: Globe },
    { id: 'users', label: 'Travelers', icon: Users },
    { id: 'messages', label: 'Inquiries', icon: Mail },
  ];

  return (
    /* Removed 'fixed' and 'h-full' here because the Parent wrapper now controls positioning */
    <aside className="w-64 bg-[#0f172a] text-slate-400 flex flex-col h-screen border-r border-slate-800/50">
      
      {/* 1. BRANDING SECTION */}
      <div className="h-24 flex items-center justify-between px-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
          </div>
          <h1 className="text-lg font-black text-white tracking-tighter">
            TOMO<span className="text-emerald-500">.</span>
          </h1>
        </div>

        {/* MOBILE CLOSE BUTTON - Only visible on small screens */}
        <button 
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden p-2 text-slate-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* 2. NAVIGATION SECTION */}
      <nav className="flex-grow px-3 mt-4 space-y-1 overflow-y-auto custom-scrollbar">
        <p className="px-5 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 opacity-50">
          Management
        </p>
        
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'bg-emerald-500/10 text-emerald-400' 
                  : 'hover:bg-slate-800/50 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} className={isActive ? 'text-emerald-400' : 'text-slate-500 group-hover:text-slate-200'} />
                <span className={`text-sm font-semibold tracking-tight ${isActive ? 'text-white' : ''}`}>
                  {item.label}
                </span>
              </div>
              
              {isActive && (
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
              )}
              {!isActive && (
                <ChevronRight size={14} className="opacity-0 group-hover:opacity-40 transition-opacity" />
              )}
            </button>
          );
        })}
      </nav>

      {/* 3. FOOTER SECTION */}
      <div className="p-4 mt-auto border-t border-slate-800/50">
        <div className="bg-slate-800/30 rounded-2xl p-2 space-y-1">
          <button className="flex items-center gap-3 w-full px-4 py-2.5 text-xs font-bold hover:text-white transition-colors text-left">
            <Settings size={16} className="text-slate-500" />
            <span>Settings</span>
          </button>
          
          <button className="flex items-center gap-3 w-full px-4 py-2.5 text-xs font-bold text-rose-400/80 hover:text-rose-400 hover:bg-rose-400/5 rounded-lg transition-all text-left">
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
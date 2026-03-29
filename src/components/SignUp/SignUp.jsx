import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, ShieldCheck, ArrowRight, Eye, EyeOff } from 'lucide-react';
import pic from "../../images/hero5.jpg";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFB] flex items-start justify-center pt-[5vh] md:pt-[7vh] p-6 font-['Montserrat'] overflow-x-hidden">
      
      <div className="max-w-5xl w-full bg-white rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.04)] flex flex-col md:flex-row border border-slate-100 overflow-hidden h-fit mb-10">
        
        {/* LEFT SIDE */}
        <div className="md:w-[42%] relative hidden md:block self-stretch min-h-[480px]">
          <img 
            src={pic}
            alt="Adventure Exploration" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/30" />
          <div className="absolute top-8 left-8 text-white z-10">
            <h1 className="text-2xl font-black tracking-tighter uppercase">
              TOMO<span className="text-emerald-400">.</span>
            </h1>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-[58%] p-6 md:p-10 bg-white flex flex-col items-center">
          
          <div className="max-w-sm w-full relative">
            
            <header className="mb-6 text-center">
              <h3 className="text-3xl  text-emerald-600 font-bold tracking-tight">
                Join TOMO
              </h3>
              <p className="text-slate-400 text-[10px] font-bold mt-2 uppercase tracking-[0.2em]">
                Start your verified journey
              </p>
            </header>

            <form className="space-y-4">
              
              {/* Full Name */}
              <div className="group">
                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1 mb-1 block">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border-2 border-transparent rounded-xl text-sm font-semibold focus:bg-white focus:border-emerald-500/10 outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="group">
                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1 mb-1 block">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                  <input
                    type="email"
                    placeholder="explorer@tomo.com"
                    className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border-2 border-transparent rounded-xl text-sm font-semibold focus:bg-white focus:border-emerald-500/10 outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="group">
                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1 mb-1 block">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-11 py-2.5 bg-slate-50 border-2 border-transparent rounded-xl text-sm font-semibold focus:bg-white focus:border-emerald-500/10 outline-none transition-all shadow-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="group">
                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1 mb-1 block">
                  Confirm Password
                </label>
                <div className="relative">
                  <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-11 py-2.5 bg-slate-50 border-2 border-transparent rounded-xl text-sm font-semibold focus:bg-white focus:border-emerald-500/10 outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 mt-2 shadow-lg shadow-slate-100">
                Get Started <ArrowRight size={18} />
              </button>
            </form>

            <footer className="mt-6 text-center pt-5 border-t border-slate-50">
              <p className="text-[11px] font-medium text-slate-500">
                Already a member?
                <Link to="/login" className="text-emerald-600 font-bold ml-1 hover:underline">
                  Log In
                </Link>
              </p>
            </footer>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminGuard({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  // Check if already logged in
  useEffect(() => {
    const session = localStorage.getItem("sindhu_admin_session");
    if (session === "authorized") {
      setIsAuthenticated(true);
    }
    setChecking(false);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setChecking(true);
    
    // We'll call a server action to check the password securely
    const { verifyAdminPassword } = await import("../actions");
    const isCorrect = await verifyAdminPassword(password.trim());
    
    if (isCorrect) {
      localStorage.setItem("sindhu_admin_session", "authorized");
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
    setChecking(false);
  };

  if (checking) return null;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-surface p-12 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 text-center mb-12">
            <span className="material-symbols-outlined text-5xl text-primary mb-6">lock</span>
            <h2 className="text-3xl font-headline font-black uppercase text-white tracking-widest">Authorize Entry</h2>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mt-2">Sindhu Exports Management</p>
          </div>

          <form onSubmit={handleLogin} className="relative z-10 space-y-8">
            <div className="group">
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="ENTER ACCESS KEY" 
                className={`w-full bg-transparent border-b ${error ? 'border-red-500' : 'border-white/10'} py-4 text-center text-white font-black uppercase tracking-[0.5em] text-xs focus:border-primary transition-colors outline-none`} 
              />
              {error && <p className="text-red-500 text-[8px] font-black uppercase tracking-widest mt-4">Invalid Access Key. Identity Rejected.</p>}
            </div>
            
            <button className="w-full bg-white text-background font-black uppercase tracking-[1em] py-6 rounded-2xl hover:bg-primary transition-all shadow-xl">
              Unlock Portal
            </button>
          </form>

          <p className="text-[8px] font-mono text-center mt-12 text-white/10 uppercase tracking-[0.3em]">
            Warning: Unauthorized access is monitored & logged.
          </p>
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
}

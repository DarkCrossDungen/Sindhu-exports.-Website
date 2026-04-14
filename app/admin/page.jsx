"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getInquiries } from "../../lib/db"; // We'll make this work via a server action or API

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // For now we'll use a simple fetch or direct call if allowed in client
      // Better to use an API route for this.
      const res = await fetch('/api/inquiries');
      const data = await res.json();
      setInquiries(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("sindhu_admin_session");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-background text-white p-6 md:p-12 pt-32">

      <div className="container mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h3 className="text-secondary-blue text-[10px] tracking-[0.8em] font-black uppercase mb-4">Management Portal</h3>
            <h1 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter">
              Wholesale <span className="text-primary italic">Inquiries</span>
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <button onClick={handleLogout} className="text-[10px] font-black uppercase tracking-widest text-red-500/50 hover:text-red-500 border border-red-500/20 px-6 py-4 rounded-2xl transition-all">
              Terminate Session
            </button>
            <div className="bg-surface border border-white/5 p-6 rounded-3xl min-w-[150px]">
              <span className="text-white/30 text-[10px] font-black uppercase tracking-widest block mb-2">Total Leads</span>
              <span className="text-3xl font-black text-primary">{inquiries.length}</span>
            </div>
            <div className="bg-surface border border-white/5 p-6 rounded-3xl min-w-[150px]">
              <span className="text-white/30 text-[10px] font-black uppercase tracking-widest block mb-2">Unread</span>
              <span className="text-3xl font-black text-secondary-blue">{inquiries.length}</span>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-surface rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5 bg-white/5">
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Company</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Contact Email</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Specifications</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Date</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="5" className="px-8 py-20 text-center text-white/20 font-black uppercase tracking-widest italic animate-pulse">
                      Encrypting Data Streams...
                    </td>
                  </tr>
                ) : inquiries.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-8 py-20 text-center text-white/20 font-black uppercase tracking-widest italic">
                      Zero Inbound Leads Found.
                    </td>
                  </tr>
                ) : (
                  inquiries.map((iq) => (
                    <motion.tr 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }}
                      key={iq.id} 
                      className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                    >
                      <td className="px-8 py-6">
                        <span className="text-white font-black uppercase tracking-widest text-sm">{iq.company_name}</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-secondary-blue font-bold text-xs">{iq.email}</span>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-on-surface-variant text-[10px] font-medium uppercase tracking-wider max-w-xs line-clamp-2">
                          {iq.project_specs || "No details provided"}
                        </p>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-white/30 text-[10px] font-mono">
                          {new Date(iq.created_at).toLocaleDateString()}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <button className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all">
                          Respond
                        </button>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

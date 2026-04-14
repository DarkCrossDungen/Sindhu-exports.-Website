"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const [items, setItems] = useState([
    { id: 1, name: "Oversized Industrial Tee", color: "Black", size: "L", priceIn: 2998, priceUs: 36, qty: 2, photoNum: "PHOTO #6" },
    { id: 2, name: "Elite Pullover Hoodie", color: "Olive", size: "M", priceIn: 6998, priceUs: 84, qty: 2, photoNum: "PHOTO #7" }
  ]);

  const updateQty = (id, change) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQty = item.qty + change;
        return { ...item, qty: newQty > 0 ? newQty : 1 };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const totalIn = items.reduce((sum, item) => sum + (item.priceIn * item.qty), 0);
  const totalUs = items.reduce((sum, item) => sum + (item.priceUs * item.qty), 0);

  return (
    <div className="bg-background min-h-[calc(100vh-100px)] text-on-surface py-12 md:py-24 relative pt-24">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-secondary-blue/5 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-outline/20 pb-10">
          <div>
            <h1 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter text-white">
              Shopping <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary-blue italic">Atelier</span>
            </h1>
            <p className="text-xs text-on-surface-variant mt-4 font-black tracking-[0.4em] uppercase">Selection Managed by Sindhu Exports</p>
          </div>
          <div className="bg-surface border-2 border-primary/20 rounded-2xl px-8 py-4 flex items-center gap-4 shadow-xl shadow-primary/5">
             <span className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Units</span>
             <span className="text-3xl font-black text-white">{items.length}</span>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-40 border-2 border-dashed border-outline/20 rounded-[3rem] bg-surface/30 backdrop-blur-xl">
            <span className="material-symbols-outlined text-9xl text-outline/10 mb-8 block">shopping_cart_off</span>
            <h2 className="text-3xl font-headline font-black uppercase tracking-[0.2em] text-white/50 mb-4">Empty Roster</h2>
            <Link href="/shop" className="bg-gradient-to-r from-primary to-secondary-blue text-white font-black uppercase tracking-widest px-12 py-5 rounded-2xl hover:scale-105 transition-all inline-block shadow-2xl">
              Acquire Inventory
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Cart Items */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={item.id} 
                    className="flex flex-col sm:flex-row gap-8 bg-surface/50 backdrop-blur-xl p-8 border border-outline/20 rounded-[2.5rem] relative group hover:border-secondary-blue/30 transition-all duration-500 shadow-2xl"
                  >
                    <div className="w-full sm:w-44 aspect-square bg-surface-container-low rounded-3xl grayscale group-hover:grayscale-0 transition-all duration-1000 overflow-hidden relative flex items-center justify-center border border-white/5">
                      <span className="text-white/10 group-hover:text-primary/20 font-black text-xl tracking-[0.3em] absolute uppercase z-10 transition-colors">{item.photoNum}</span>
                      <span className="material-symbols-outlined text-outline/5 text-8xl transition-all group-hover:scale-125 opacity-20">inventory</span>
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between py-2">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <Link href={`/shop/${item.id}`} className="font-black text-white uppercase text-2xl hover:text-primary transition-colors leading-tight tracking-tight">{item.name}</Link>
                          <button onClick={() => removeItem(item.id)} className="text-on-surface-variant hover:text-error transition-all p-2 bg-background/50 rounded-xl hover:bg-error/10 group/btn">
                            <span className="material-symbols-outlined text-xl">close</span>
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                           <span className="text-[10px] uppercase tracking-[0.3em] font-black text-secondary-blue px-3 py-1 bg-secondary-blue/10 rounded-full">{item.color}</span>
                           <div className="w-1 h-1 bg-outline/20 rounded-full" />
                           <span className="text-[10px] uppercase tracking-[0.3em] font-black text-primary px-3 py-1 bg-primary/10 rounded-full">SIZE {item.size}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap justify-between items-end mt-10 gap-6">
                        {/* Custom Industrial Stepper */}
                        <div className="flex items-center border border-outline/30 rounded-2xl bg-background/50 backdrop-blur p-1">
                          <button onClick={() => updateQty(item.id, -1)} className="w-12 h-12 flex items-center justify-center text-white hover:bg-surface-container transition-all rounded-xl disabled:opacity-20 translate-y-0 active:translate-y-1" disabled={item.qty <= 1}>
                            <span className="material-symbols-outlined">remove</span>
                          </button>
                          <span className="w-16 flex items-center justify-center font-black text-xl text-white font-mono">{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="w-12 h-12 flex items-center justify-center text-white hover:bg-surface-container transition-all rounded-xl translate-y-0 active:-translate-y-1">
                            <span className="material-symbols-outlined">add</span>
                          </button>
                        </div>

                        <div className="text-right">
                          <div className="font-black text-3xl text-white group-hover:text-secondary-blue transition-colors">₹{(item.priceIn * item.qty).toLocaleString()}</div>
                          <div className="text-xs text-on-surface-variant font-mono mt-1 uppercase tracking-widest opacity-60 font-bold">${(item.priceUs * item.qty)} USD</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary Card - Gold/Blue Aesthetic */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-surface to-surface-container-high rounded-[3rem] border border-white/5 p-10 sticky top-32 shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden relative group">
                {/* Background Glows for the Mixed Look */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary-blue/20 blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-1000" />

                <h3 className="font-headline font-black uppercase text-2xl text-white mb-8 border-b border-outline/20 pb-6 flex items-center justify-between">
                  Tally
                  <span className="material-symbols-outlined text-secondary-blue">local_activity</span>
                </h3>
                
                <div className="flex flex-col gap-6 text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant mb-10">
                  <div className="flex justify-between border-b border-outline/10 pb-4">
                    <span>Gross Value</span>
                    <span className="text-white font-mono text-base">₹{totalIn.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>logistics</span>
                    <span className="text-secondary-blue group-hover:text-primary transition-colors">Complimentary</span>
                  </div>
                </div>

                <div className="flex justify-between items-end mb-10 overflow-hidden">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-white mb-2">Grand Total</span>
                  <div className="text-right">
                    <span className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-blue">₹{totalIn.toLocaleString()}</span>
                    <span className="text-xs font-mono text-on-surface-variant mt-2 block opacity-50 font-bold">${totalUs} USD</span>
                  </div>
                </div>

                <Link href="#" className="w-full bg-white hover:bg-secondary-blue text-background hover:text-white font-black uppercase tracking-widest py-6 rounded-[2rem] flex items-center justify-center gap-4 transition-all duration-500 scale-100 hover:scale-[1.02] shadow-[0_20px_40px_rgba(43,108,176,0.3)] mb-8 group/btn">
                  <span className="material-symbols-outlined text-xl group-hover/btn:rotate-12 transition-transform">shield_with_heart</span>
                  Finalize Order
                </Link>

                <div className="text-center p-6 bg-background/50 rounded-2xl border border-outline/20">
                  <p className="text-[10px] uppercase tracking-[0.5em] font-black text-on-surface-variant mb-3">Enterprise Needs?</p>
                  <Link href="/wholesale" className="text-[10px] uppercase tracking-widest font-black text-primary hover:text-white transition-all border-b border-primary hover:border-white pb-1 inline-block">
                    Request Wholesale Docket
                  </Link>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

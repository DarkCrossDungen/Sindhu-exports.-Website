"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

import { submitWholesaleForm } from "../actions";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.1 } }
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function AnimatedNumber({ value }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (isNaN(end)) return setCount(value);
    
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start) + (value.includes('+') ? '+' : value.includes('%') ? '%' : ''));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
}

export default function LandingPage() {


  const [formStatus, setFormStatus] = useState(null); // 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("loading");
    
    const formData = new FormData(e.target);
    const result = await submitWholesaleForm(formData);
    
    if (result.success) {
      setFormStatus("success");
      e.target.reset();
    } else {
      setFormStatus("error");
      setErrorMessage(result.error || "Something went wrong.");
    }
  };

  return (
    <div className="bg-background min-h-screen text-white">

      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative min-h-[110vh] w-full flex items-center overflow-hidden bg-black z-10 -mt-24 pb-24">
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-secondary-blue/10 rounded-full blur-[150px] translate-x-1/2 translate-y-1/4 pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-20 w-full pt-24">
          <motion.div variants={fadeIn} initial="hidden" animate="visible" className="flex flex-col justify-center">
            <motion.h1 variants={itemAnim} className="text-5xl md:text-6xl lg:text-[7rem] font-headline font-black leading-[0.8] uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-white/80 to-secondary-blue">
              Crafted In <span className="text-secondary-blue">INDIA</span>.<br />
              Worn By The <span className="text-primary">WORLD</span>.
            </motion.h1>
          </motion.div>
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="w-[80%] h-[800px] relative [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]">
              <img 
                src="/assets/hero_hoodie.png" 
                alt="Sindhu Exports Showpiece" 
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(212,175,55,0.2)]"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20">
          <span className="text-[10px] font-black tracking-[1em] uppercase">Scroll to reveal</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary via-secondary-blue to-transparent" />
        </div>
      </section>

      {/* ─── SCROLLING MARQUEE (Now at top level for max visibility) ─── */}
      <div className="relative z-30 bg-black/90 backdrop-blur-xl border-y border-white/5 py-8 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[1, 2, 3].map((set) => (
            <div key={set} className="flex gap-12 items-center px-6">
              <span className="text-primary font-black text-2xl md:text-3xl uppercase tracking-tighter italic">· SINCE 2007</span>
              <span className="text-secondary-blue font-black text-2xl md:text-3xl uppercase tracking-tighter">· 50+ SHIPMENTS DONE</span>
              <span className="text-white font-black text-2xl md:text-3xl uppercase tracking-tighter italic">· WORLDWIDE EXPORTS</span>
              <span className="text-primary font-black text-2xl md:text-3xl uppercase tracking-tighter">· SINDHU EXPORT</span>
              <span className="text-secondary-blue font-black text-2xl md:text-3xl uppercase tracking-tighter italic">· MADE IN INDIA</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-20 bg-background pt-12 shadow-[0_-50px_100px_rgba(0,0,0,1)]">
        
        {/* ─── SECTION: THE INDUSTRIAL ATELIER (NEW) ─── */}
        <section className="px-6 md:px-12 py-32 border-b border-white/5">
           <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                 <p className="text-secondary-blue text-[10px] font-black tracking-[0.8em] uppercase mb-12">OUR LEGACY</p>
                 <h2 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter mb-12 leading-[0.85]">
                    THE INDUSTRIAL ATELIER OF <br/> <span className="text-primary italic">TAMIL NADU.</span>
                 </h2>
                 <p className="text-white/60 font-medium text-lg leading-relaxed mb-12 max-w-xl">
                    Since 2007, Sindhu Export has been at the forefront of textile excellence. We don't just manufacture; we engineer garments that define the bond of the Industrial Hub. We control every thread from spinning to final stitch, ensuring that "Made in India" stands for uncompromising luxury.
                 </p>
                 <Link href="/about" className="group flex items-center gap-6">
                    <div className="w-16 h-px bg-primary group-hover:w-24 transition-all" />
                    <span className="text-primary font-black uppercase tracking-widest text-xs">Read Full Story</span>
                 </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/5">
                 <img src="/assets/industrial_atelier.png" alt="Industrial Atelier" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
              </motion.div>
           </div>
        </section>


        
        {/* ─── SECTION 2: BENTO CATEGORY GRID ─── */}
        <section className="px-6 md:px-12 py-24">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
              <div className="md:col-span-7 md:row-span-2 bg-surface rounded-[3rem] border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-1000">
                  <span className="text-white/5 font-black text-6xl tracking-[0.5em] uppercase">Photo #1</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black p-12">
                   <h2 className="text-white text-5xl font-black uppercase mb-4">Industrial Men</h2>
                   <Link href="/shop/men" className="text-primary text-sm font-black uppercase tracking-widest border-b border-primary pb-1">Enter Atelier</Link>
                </div>
              </div>
              <div className="md:col-span-5 md:row-span-1 bg-surface rounded-[3rem] border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                  <span className="text-white/5 font-black text-3xl tracking-[0.3em] uppercase">Photo #2</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black p-8">
                   <h2 className="text-white text-3xl font-black uppercase">Women's Elite</h2>
                </div>
              </div>
              <div className="md:col-span-5 md:row-span-1 bg-surface rounded-[3rem] border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                  <span className="text-white/5 font-black text-3xl tracking-[0.3em] uppercase">Photo #3</span>
                </div>
                 <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black p-8">
                   <h2 className="text-white text-3xl font-black uppercase">Kids Series</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: NEW ARRIVALS ─── */}
        <section className="px-6 md:px-12 py-32 bg-surface/20">
           <div className="container mx-auto">
              <div className="flex justify-between items-end mb-16 border-b border-white/5 pb-8">
                 <div>
                    <h3 className="text-secondary-blue text-[10px] tracking-[0.8em] font-black uppercase mb-4">Latest Inbound</h3>
                    <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter">New <span className="text-primary italic">Arrivals</span></h2>
                 </div>
                 <span className="text-xs font-mono text-white/30 tracking-widest">/ 2024 DROP</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                 {[
                   { name: "Core Tank", price: "₹999", num: "01", p: "PHOTO #4" },
                   { name: "Industrial Hoodie", price: "₹2499", num: "02", p: "PHOTO #5" },
                   { name: "Elite Sweatpants", price: "₹1899", num: "03", p: "PHOTO #6" }
                 ].map((prod) => (
                   <div key={prod.num} className="group">
                      <div className="aspect-[3/4] rounded-[2.5rem] bg-surface border border-white/5 overflow-hidden relative mb-6">
                         <div className="absolute inset-0 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700">
                           <span className="text-white/5 font-black text-xl uppercase tracking-widest">{prod.p}</span>
                         </div>
                         <div className="absolute top-6 left-6 text-[10px] font-black uppercase text-primary tracking-widest">/ {prod.num}</div>
                      </div>
                      <div className="flex justify-between items-center px-2">
                         <h4 className="text-white font-black uppercase text-lg group-hover:text-secondary-blue transition-colors">{prod.name}</h4>
                         <span className="text-primary font-black">{prod.price}</span>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ─── SECTION 4: FULL BANNER MEN ─── */}
        <section className="h-screen relative flex items-center justify-center overflow-hidden border-y border-white/5 grayscale hover:grayscale-0 transition-all duration-1000 group">
           <div className="absolute inset-0 bg-surface flex items-center justify-center">
              <span className="text-white/5 font-black text-[10rem] tracking-[0.5em] uppercase">Photo #7</span>
           </div>
           <div className="relative z-10 text-center">
              <h2 className="text-[12rem] md:text-[20rem] font-headline font-black text-transparent bg-clip-text bg-gradient-to-b from-primary to-transparent opacity-20 group-hover:opacity-40 transition-opacity">MEN</h2>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                 <h2 className="text-8xl md:text-[12rem] font-headline font-black uppercase tracking-tighter text-white">MEN</h2>
                 <Link href="/shop" className="text-sm font-black uppercase tracking-[1em] text-primary mt-4 block">View Division</Link>
              </div>
           </div>
        </section>

        {/* ─── SECTION 5: FULL BANNER WOMEN ─── */}
        <section className="h-screen relative flex items-center justify-center overflow-hidden border-b border-white/5 grayscale hover:grayscale-0 transition-all duration-1000 group">
           <div className="absolute inset-0 bg-surface-container-lowest flex items-center justify-center">
              <span className="text-white/5 font-black text-[10rem] tracking-[0.5em] uppercase">Photo #8</span>
           </div>
           <div className="relative z-10 text-center">
              <h2 className="text-[12rem] md:text-[20rem] font-headline font-black text-transparent bg-clip-text bg-gradient-to-b from-secondary-blue to-transparent opacity-20 group-hover:opacity-40 transition-opacity">WOMEN</h2>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                 <h2 className="text-8xl md:text-[12rem] font-headline font-black uppercase tracking-tighter text-white">WOMEN</h2>
                 <Link href="/shop" className="text-sm font-black uppercase tracking-[1em] text-secondary-blue mt-4 block">View Division</Link>
              </div>
           </div>
        </section>

        {/* ─── SECTION 6: WHOLESALE INQUIRIES ─── */}
        <section id="wholesale" className="px-6 md:px-12 py-32 bg-black">
           <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row gap-20 items-start">
                 <div className="lg:w-1/2">
                    <h2 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter mb-12 leading-[0.85]">
                       WHOLESALE <br/> <span className="text-primary italic">INQUIRIES</span>
                    </h2>
                    <div className="space-y-10">
                       <div className="flex gap-8 group">
                          <span className="material-symbols-outlined text-4xl text-primary/30 group-hover:text-primary transition-colors">location_on</span>
                          <div>
                             <h4 className="text-white font-black uppercase text-lg mb-2 underline decoration-primary/30">Headquarters</h4>
                             <p className="text-on-surface-variant font-bold uppercase tracking-widest text-sm leading-relaxed">
                                44-A, Industrial Estate, <br/>
                                Tirupur, Tamil Nadu 641604, India
                             </p>
                          </div>
                       </div>
                       <div className="flex gap-8 group">
                          <span className="material-symbols-outlined text-4xl text-secondary-blue/30 group-hover:text-secondary-blue transition-colors">mail</span>
                          <div>
                             <h4 className="text-white font-black uppercase text-lg mb-2 underline decoration-secondary-blue/30">Digital Portal</h4>
                             <p className="text-on-surface-variant font-bold uppercase tracking-widest text-sm leading-relaxed">
                                exports@sindhuexports.com <br/>
                                sales@sindhuexports.com
                             </p>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="lg:w-1/2 w-full bg-surface p-12 rounded-[4rem] border border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                    
                    {formStatus === "success" ? (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10 py-20 text-center">
                        <span className="material-symbols-outlined text-6xl text-primary mb-6">check_circle</span>
                        <h3 className="text-2xl font-black uppercase text-white mb-4">Request Dispatched</h3>
                        <p className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">Thank you! Our export division will contact you within 24 hours.</p>
                        <button onClick={() => setFormStatus(null)} className="mt-8 text-primary font-black uppercase text-xs tracking-[0.3em] border-b border-primary">Send another inquiry</button>
                      </motion.div>
                    ) : (
                      <form className="relative z-10 space-y-8" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <input name="companyName" required type="text" placeholder="COMPANY NAME" className="bg-transparent border-b border-white/10 py-4 text-white font-black uppercase tracking-widest text-xs focus:border-primary transition-colors outline-none" />
                            <input name="email" required type="email" placeholder="CONTACT EMAIL" className="bg-transparent border-b border-white/10 py-4 text-white font-black uppercase tracking-widest text-xs focus:border-primary transition-colors outline-none" />
                        </div>
                        <textarea name="projectSpecs" placeholder="PROJECT SPECIFICATIONS" rows="5" className="bg-transparent border-b border-white/10 py-4 text-white font-black uppercase tracking-widest text-xs focus:border-primary transition-colors outline-none w-full resize-none" />
                        
                        {formStatus === "error" && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest">{errorMessage}</p>}
                        
                        <button disabled={formStatus === "loading"} className="w-full bg-white text-background font-black uppercase tracking-[1em] py-6 rounded-2xl hover:bg-primary hover:text-white transition-all shadow-2xl disabled:opacity-50">
                            {formStatus === "loading" ? "DISPATCHING..." : "GET IN TOUCH"}
                        </button>
                      </form>
                    )}
                 </div>
              </div>
           </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="bg-black border-t border-white/5 px-6 md:px-12 py-24">
           <div className="container mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
                 <div>
                    <h5 className="text-white font-black uppercase tracking-[0.3em] text-xs mb-8 underline decoration-primary">COMPANY</h5>
                    <ul className="flex flex-col gap-4 text-on-surface-variant text-[10px] font-black uppercase tracking-widest">
                       <li className="hover:text-white transition-colors cursor-pointer text-secondary-blue">OUR STORY</li>
                       <li className="hover:text-white transition-colors cursor-pointer">LEGACY</li>
                       <li className="hover:text-white transition-colors cursor-pointer">CAREERS</li>
                    </ul>
                 </div>
                 <div>
                    <h5 className="text-white font-black uppercase tracking-[0.3em] text-xs mb-8">SHOP</h5>
                    <ul className="flex flex-col gap-4 text-on-surface-variant text-[10px] font-black uppercase tracking-widest">
                       <li className="hover:text-white transition-colors cursor-pointer">MEN</li>
                       <li className="hover:text-white transition-colors cursor-pointer">WOMEN</li>
                       <li className="hover:text-white transition-colors cursor-pointer text-primary">KIDS</li>
                    </ul>
                 </div>
                 <div>
                    <h5 className="text-white font-black uppercase tracking-[0.3em] text-xs mb-8">SUPPORT</h5>
                    <ul className="flex flex-col gap-4 text-on-surface-variant text-[10px] font-black uppercase tracking-widest">
                       <li className="hover:text-white transition-colors cursor-pointer">SHIPPING</li>
                       <li className="hover:text-white transition-colors cursor-pointer">RETURNS</li>
                       <li className="hover:text-white transition-colors cursor-pointer">CONTACT</li>
                    </ul>
                 </div>
                 <div>
                    <h5 className="text-white font-black uppercase tracking-[0.3em] text-xs mb-8 text-secondary-blue">LEGAL</h5>
                    <ul className="flex flex-col gap-4 text-on-surface-variant text-[10px] font-black uppercase tracking-widest">
                       <li className="hover:text-white transition-colors cursor-pointer">TERMS</li>
                       <li className="hover:text-white transition-colors cursor-pointer">PRIVACY</li>
                    </ul>
                 </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 gap-8">
                 <div className="text-4xl font-headline font-black uppercase text-white tracking-widest">SINDHU <span className="text-primary italic">EXPORT</span></div>
                 <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">© 2024 - ARCHITECTS OF INDUSTRIAL COUTURE</p>
              </div>
           </div>
        </footer>

      </div>

    </div>
  );
}

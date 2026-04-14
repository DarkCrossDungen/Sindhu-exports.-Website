"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProductPage({ params }) {
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedImage, setSelectedImage] = useState(0);

  const colors = [
    { id: "black", hex: "#121416" },
    { id: "navy", hex: "#1e3a8a" },
    { id: "olive", hex: "#4d7c0f" },
  ];

  return (
    <div className="bg-background min-h-screen text-on-surface py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <div className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-8 flex gap-2">
          <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <span>/</span>
          <Link href="/shop/men" className="hover:text-primary transition-colors">Men</Link>
          <span>/</span>
          <span className="text-white">Oversized Industrial Tee</span>
        </div>

        {/* Product Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Images Column */}
          <div className="flex flex-col gap-6">
             <div className="aspect-[3/4] w-full bg-surface-container rounded-2xl relative overflow-hidden group">
               <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 bg-surface-container-highest" />
               <div className="absolute top-6 left-6 bg-primary text-on-primary text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-[0_0_15px_rgba(242,202,80,0.4)]">
                 In Stock
               </div>
               <span className="material-symbols-outlined text-outline/30 text-9xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-overlay">diamond</span>
             </div>
             
             {/* Thumbnails */}
             <div className="grid grid-cols-4 gap-4">
                {[0, 1, 2, 3].map(idx => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square bg-surface-container rounded-lg cursor-pointer transition-all border-2 overflow-hidden ${selectedImage === idx ? 'border-primary' : 'border-transparent hover:border-primary/50'}`}
                  >
                    <div className="w-full h-full bg-surface-container-lowest grayscale hover:grayscale-0" />
                  </div>
                ))}
             </div>
          </div>

          {/* Details Column */}
          <div className="flex flex-col pt-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="text-xs tracking-[0.3em] font-bold uppercase text-secondary-blue mb-3">Men's Collection</div>
              <h1 className="text-4xl md:text-5xl font-headline font-black uppercase mb-6 text-white text-stroke text-transparent">Oversized Industrial Tee</h1>
              
              <div className="flex items-end gap-4 mb-8">
                <span className="text-3xl font-black text-primary">₹1,499</span>
                <span className="text-lg font-mono text-on-surface-variant line-through pb-1">₹2,199</span>
                <span className="text-sm font-mono text-on-surface-variant pl-4 pb-1">$18 USD</span>
              </div>

              <div className="text-sm text-on-surface-variant leading-relaxed mb-10">
                Engineered in Tiruppur for the global stage. This heavyweight 280 GSM cotton blend offers a structured drape with our signature industrial seam detailing. Pre-shrunk and garment-dyed for uncompromising longevity.
              </div>
            </motion.div>

            {/* Colors */}
            <div className="mb-8 border-t border-outline/30 pt-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs uppercase tracking-widest font-bold text-white">Select Color</span>
                <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant capitalize">{selectedColor}</span>
              </div>
              <div className="flex gap-4">
                {colors.map(col => (
                  <button 
                    key={col.id} 
                    onClick={() => setSelectedColor(col.id)}
                    className={`w-10 h-10 rounded-full border-2 transition-all p-1 ${selectedColor === col.id ? 'border-primary scale-110' : 'border-transparent hover:border-outline'}`}
                  >
                    <div className="w-full h-full rounded-full" style={{ backgroundColor: col.hex }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs uppercase tracking-widest font-bold text-white">Select Size</span>
                <Link href="#" className="text-[10px] uppercase tracking-widest font-bold text-secondary-blue hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">Size Guide</Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {["S", "M", "L", "XL", "2XL"].map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[3rem] h-12 px-4 rounded border text-sm font-bold font-mono transition-colors ${selectedSize === size ? 'bg-primary border-primary text-on-primary' : 'bg-surface border-outline/40 text-on-surface-variant hover:border-primary hover:text-primary'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 mb-10">
              <button className="w-full h-16 bg-gradient-to-r from-primary to-primary-container text-on-primary font-black uppercase tracking-widest rounded-xl hover:shadow-[0_0_30px_rgba(242,202,80,0.5)] transition-all hover:scale-[0.98] active:scale-95 flex items-center justify-center gap-3">
                <span className="material-symbols-outlined">shopping_cart</span>
                Add To Bag
              </button>
              <button className="w-full h-16 bg-transparent border-2 border-secondary-blue text-secondary-blue font-black uppercase tracking-widest rounded-xl hover:bg-secondary-blue hover:text-white transition-all hover:scale-[0.98] active:scale-95 flex items-center justify-center gap-3 group">
                <span className="material-symbols-outlined group-hover:animate-pulse">local_shipping</span>
                Bulk Order Inquiry
              </button>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 text-xs uppercase tracking-widest border-y border-outline/30 py-8 text-on-surface-variant">
              <div>
                <span className="text-white block mb-1">Fabric</span>
                100% Premium Cotton
              </div>
              <div>
                <span className="text-white block mb-1">Weight</span>
                280 GSM Heavyweight
              </div>
              <div>
                <span className="text-white block mb-1">Fit</span>
                Oversized Boxy
              </div>
              <div>
                <span className="text-white block mb-1">Care</span>
                Cold Wash, Line Dry
              </div>
            </div>

            <div className="mt-8 flex items-start gap-4 p-4 bg-surface-container rounded-lg border border-outline/30">
              <span className="material-symbols-outlined text-secondary-blue">public</span>
              <div>
                <span className="text-white uppercase tracking-widest text-xs font-bold block mb-1">Global Delivery Active</span>
                <span className="text-on-surface-variant text-sm block">Ships directly from Tamil Nadu, India & United States Distribution Centers.</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const DUMMY_PRODUCTS = [
  { id: 1, name: "Oversized Industrial Tee", category: "Men", priceIn: 1499, priceUs: 18, isNew: true, imgColor: "bg-surface-container-low", sizes: ["M", "L", "XL"], photoNum: "PHOTO #8" },
  { id: 2, name: "Core Crewneck", category: "Hoodie", priceIn: 2899, priceUs: 35, isNew: false, imgColor: "bg-surface-container-high", sizes: ["S", "M", "L"], photoNum: "PHOTO #9" },
  { id: 3, name: "Elite Pullover", category: "Hoodie", priceIn: 3499, priceUs: 42, isNew: true, imgColor: "bg-surface-container-lowest", sizes: ["L", "XL", "2XL"], photoNum: "PHOTO #10" },
  { id: 4, name: "Tie & Dye Drop Tee", category: "Tie & Dye", priceIn: 1299, priceUs: 16, isNew: false, imgColor: "bg-surface-container", sizes: ["XS", "S", "M"], photoNum: "PHOTO #11" },
  { id: 5, name: "Kids Essential Tee", category: "Kids", priceIn: 799, priceUs: 10, isNew: false, imgColor: "bg-background", sizes: ["XS", "S"], photoNum: "PHOTO #12" },
  { id: 6, name: "Women's Crop Hoodie", category: "Women", priceIn: 2499, priceUs: 30, isNew: true, imgColor: "bg-surface-container", sizes: ["XS", "S", "M"], photoNum: "PHOTO #13" },
  { id: 7, name: "Classic Polo", category: "Men", priceIn: 1199, priceUs: 15, isNew: false, imgColor: "bg-surface", sizes: ["M", "L", "XL", "2XL"], photoNum: "PHOTO #14" },
  { id: 8, name: "Heavyweight Zip-Up", category: "Hoodie", priceIn: 3999, priceUs: 48, isNew: false, imgColor: "bg-surface-container-highest", sizes: ["L", "XL", "2XL"], photoNum: "PHOTO #15" },
];

export default function ShoppingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");

  const filteredProducts = DUMMY_PRODUCTS.filter(prod => {
    const categoryMatch = selectedCategory === "All" || prod.category === selectedCategory;
    const sizeMatch = selectedSize === "All" || prod.sizes.includes(selectedSize);
    return categoryMatch && sizeMatch;
  });

  return (
    <div className="bg-background min-h-screen text-on-surface relative pt-24">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-blue/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 py-12 flex flex-col lg:flex-row gap-12 relative z-10">
        
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          <div className="sticky top-32">
            <h2 className="text-2xl font-headline font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-blue mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-blue">tune</span>
              Refine Search
            </h2>

            <div className="flex flex-col gap-10">
              {/* Category Filter */}
              <div>
                <h3 className="text-white font-black uppercase tracking-[0.2em] mb-6 border-b border-outline/20 pb-2 text-xs">Categories</h3>
                <div className="flex flex-col gap-4">
                  {["All", "Men", "Women", "Kids", "Hoodie", "Tie & Dye"].map(cat => (
                    <label key={cat} className="flex items-center gap-4 cursor-pointer group">
                      <div 
                        className={`w-5 h-5 border-2 rounded transition-all duration-300 flex items-center justify-center ${selectedCategory === cat ? 'bg-gradient-to-br from-primary to-secondary-blue border-transparent scale-110 shadow-[0_0_15px_rgba(242,202,80,0.3)]' : 'border-outline/40 group-hover:border-primary'}`}
                        onClick={() => setSelectedCategory(cat)}
                      >
                        {selectedCategory === cat && <span className="material-symbols-outlined text-[14px] text-white font-black">check</span>}
                      </div>
                      <span className={`text-sm tracking-widest uppercase transition-colors ${selectedCategory === cat ? 'text-white font-black' : 'text-on-surface-variant group-hover:text-primary'}`} 
                            onClick={() => setSelectedCategory(cat)}>
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-white font-black uppercase tracking-[0.2em] mb-6 border-b border-outline/20 pb-2 text-xs">Price Threshold</h3>
                <div className="px-2">
                  <input type="range" className="w-full accent-primary h-1 bg-surface-container-high rounded-full appearance-none outline-none cursor-pointer" />
                  <div className="flex justify-between text-[10px] text-on-surface-variant font-mono mt-3 uppercase tracking-widest">
                    <span>₹0</span>
                    <span className="text-secondary-blue">₹5000+</span>
                  </div>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-white font-black uppercase tracking-[0.2em] mb-6 border-b border-outline/20 pb-2 text-xs">Size Grid</h3>
                <div className="flex gap-2 flex-wrap">
                  {["All", "XS", "S", "M", "L", "XL", "2XL"].map((size) => (
                    <button 
                      key={size} 
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 border-2 text-xs font-black font-mono transition-all duration-300 rounded-lg ${selectedSize === size ? 'bg-gradient-to-br from-primary to-secondary-blue border-transparent text-white shadow-xl shadow-primary/20 scale-110' : 'border-outline/30 hover:border-secondary-blue text-on-surface-variant hover:text-white'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bulk Advertisement */}
              <div className="bg-gradient-to-br from-surface to-surface-container border border-primary/20 p-6 rounded-3xl mt-4 relative overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary-blue/10 opacity-50 group-hover:scale-110 transition-transform duration-700" />
                <div className="relative z-10">
                  <h4 className="text-white font-headline font-black uppercase mb-1 tracking-tight">Bulk Inquiries</h4>
                  <p className="text-[10px] text-on-surface-variant mb-5 font-bold tracking-widest uppercase">Industrial Volumes Available</p>
                  <Link href="/contact" className="w-full bg-white/5 hover:bg-white text-secondary-blue hover:text-background font-black uppercase tracking-widest py-3 rounded-xl text-[10px] text-center transition-all block border border-secondary-blue/30 group-hover:border-white">
                    Request Quote 
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </aside>

        {/* Main Product Grid */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6 border-b border-outline/20 pb-8">
            <div>
              <h1 className="text-5xl font-headline font-black uppercase tracking-tighter text-white">
                {selectedCategory} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-blue italic">Collection</span>
              </h1>
              <p className="text-xs text-on-surface-variant mt-3 font-bold tracking-[0.3em] uppercase">
                Inventory: {filteredProducts.length} Premium Units
              </p>
            </div>
            <div className="flex border-2 border-outline/20 rounded-xl px-6 py-3 items-center gap-4 hover:border-secondary-blue/50 transition-all duration-500 cursor-pointer bg-surface/50 backdrop-blur group">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant group-hover:text-primary transition-colors">Sort By</span>
              <span className="text-sm font-black text-white">Featured</span>
              <span className="material-symbols-outlined text-sm ml-2 group-hover:text-secondary-blue transition-all group-hover:rotate-180">expand_more</span>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
            {filteredProducts.map((prod) => (
              <Link href={`/shop/${prod.id}`} key={prod.id}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="aspect-[3/4] relative rounded-3xl overflow-hidden mb-6 bg-surface border border-outline/30 shadow-2xl transition-all duration-500 group-hover:shadow-secondary-blue/10">
                    <div className={`absolute inset-0 ${prod.imgColor} grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-1000 flex items-center justify-center`}>
                       <span className="text-white/5 font-black text-3xl tracking-[0.5em] group-hover:text-primary/10 transition-colors uppercase">{prod.photoNum}</span>
                    </div>
                    
                    {prod.isNew && (
                      <div className="absolute top-6 left-6 bg-gradient-to-r from-primary to-secondary-blue text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full z-10 shadow-2xl">
                        New Acquisition
                      </div>
                    )}

                    {/* Add to Bag Hover */}
                    <div className="absolute inset-x-6 bottom-6 translate-y-[150%] group-hover:translate-y-0 transition-all duration-500 z-10">
                      <button className="w-full bg-white text-background font-black uppercase tracking-widest py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-secondary-blue hover:text-white transition-all shadow-2xl" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
                        <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                        Add to Atelier
                      </button>
                    </div>
                  </div>

                  {/* Details with Gold-Blue Mixture */}
                  <div className="flex justify-between items-start gap-4 px-2">
                    <div className="flex-1">
                      <h3 className="font-black text-white uppercase text-base group-hover:text-primary transition-colors leading-tight mb-1">{prod.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-secondary-blue uppercase tracking-[0.2em] font-black">{prod.category}</span>
                        <div className="w-1 h-1 bg-outline/40 rounded-full" />
                        <span className="text-[10px] text-on-surface-variant uppercase tracking-[0.1em] font-bold">{prod.sizes.join(", ")}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-lg text-primary group-hover:text-secondary-blue transition-colors">₹{prod.priceIn}</div>
                      <div className="text-[10px] text-on-surface-variant font-mono mt-1 opacity-70 uppercase tracking-widest">${prod.priceUs} USD</div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-40 text-center flex flex-col items-center">
              <span className="material-symbols-outlined text-8xl text-outline/10 mb-6 bg-clip-text text-transparent bg-gradient-to-b from-outline/20 to-transparent">production_quantity_limits</span>
              <h2 className="text-2xl font-headline font-black uppercase tracking-[0.5em] text-white/50 mb-2">No Units Found</h2>
              <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">Refine your search parameters</p>
            </div>
          )}

          {/* Pagination */}
          <div className="mt-20 flex justify-center gap-4">
            {[1, 2, 3].map((page, i) => (
              <button 
                key={i} 
                className={`w-14 h-14 flex items-center justify-center font-black text-sm transition-all duration-300 rounded-2xl ${page === 1 ? 'bg-gradient-to-br from-primary to-secondary-blue text-white shadow-xl shadow-primary/20' : 'bg-surface border border-outline/30 hover:border-primary hover:text-primary text-on-surface-variant'}`}
              >
                {page}
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

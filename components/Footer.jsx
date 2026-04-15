"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-background text-on-surface font-label text-[10px] md:text-xs uppercase tracking-[0.1em] border-t border-outline px-6 md:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="flex flex-col gap-4 col-span-1 md:col-span-1">
          <Link href="/" className="text-white font-headline font-black text-lg md:text-xl relative group w-max">
            Sindhu Export
            <span className="absolute inset-0 bg-white/50 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-[5000ms] animate-pulse pointer-events-none" />
          </Link>
          <p className="text-on-surface-variant font-body normal-case tracking-normal text-sm leading-relaxed">
            <span className="text-primary font-bold">Industrial</span> Opulence.
            <br />Since 2007.
          </p>
          <div className="mt-4 text-on-surface-variant">
            © 2024 Sindhu Export.
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold mb-2">Categories</h4>
          <Link href="/shop/men" className="hover:text-primary transition-colors w-max group"><span className="group-hover:translate-x-1 inline-block transition-transform">Men</span></Link>
          <Link href="/shop/women" className="hover:text-secondary-blue transition-colors w-max group"><span className="group-hover:translate-x-1 inline-block transition-transform">Women</span></Link>
          <Link href="/shop/kids" className="hover:text-primary transition-colors w-max group"><span className="group-hover:translate-x-1 inline-block transition-transform">Kids</span></Link>
          <Link href="/shop/hoodies" className="hover:text-secondary-blue transition-colors w-max group"><span className="group-hover:translate-x-1 inline-block transition-transform">Hoodies</span></Link>
          <Link href="/shop/tie-dye" className="hover:text-primary transition-colors w-max group"><span className="group-hover:translate-x-1 inline-block transition-transform">Tie & Dye</span></Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold mb-2">Support</h4>
          <Link href="/shipping" className="hover:text-white transition-colors w-max text-on-surface-variant group"><span className="group-hover:translate-x-1 inline-block transition-transform">Shipping Policy</span></Link>
          <Link href="/returns" className="hover:text-white transition-colors w-max text-on-surface-variant group"><span className="group-hover:translate-x-1 inline-block transition-transform">Returns & Exchanges</span></Link>
          <Link href="/contact" className="hover:text-white transition-colors w-max text-on-surface-variant group"><span className="group-hover:translate-x-1 inline-block transition-transform">Contact Us</span></Link>
          <Link href="/wholesale" className="hover:text-white transition-colors w-max text-on-surface-variant group"><span className="group-hover:translate-x-1 inline-block transition-transform">Wholesale Portal</span></Link>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-1">
          <h4 className="text-white font-bold mb-2">Newsletter</h4>
          <p className="text-on-surface-variant font-body normal-case tracking-normal mb-2 text-sm">
            Exclusive drops and bulk discounts.
          </p>
          <div className="flex border-b border-outline pb-2 relative group">
            <input 
              type="email" 
              placeholder="ENTER EMAIL LIST" 
              className="bg-transparent border-none outline-none w-full text-white placeholder:text-on-surface-variant/50 focus:ring-0"
            />
            <button className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors group-hover:translate-x-2 duration-300">
              arrow_forward
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

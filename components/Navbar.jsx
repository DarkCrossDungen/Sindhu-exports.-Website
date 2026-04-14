"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "About Us", href: "/#about" },
    { name: "Men", href: "/shop" },
    { name: "Women", href: "/shop" },
    { name: "Kids", href: "/shop" },
    { name: "Hoodie", href: "/shop" },
    { name: "T-Shirts", href: "/shop" },
    { name: "New Arrivals", href: "/shop" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-lg text-white font-headline font-bold tracking-tight fixed top-0 z-50 flex justify-between items-center w-full px-6 md:px-12 py-10 border-b border-outline/20">
      <Link
        href="/"
        className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase relative group"
      >
        Sindhu Exports
        <span className="absolute inset-0 animate-shimmer pointer-events-none rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity bg-primary/20" />
      </Link>

      <div className="hidden md:flex gap-8 items-center">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-sm uppercase tracking-widest transition-all duration-300 group
                ${
                  isActive
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }
              `}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-[1px] bg-primary transition-all duration-300 origin-left 
                  ${isActive ? "scale-x-100 w-full" : "scale-x-0 w-full group-hover:scale-x-100"}
                `}
              />
            </Link>
          );
        })}
      </div>

      <div className="flex gap-6 items-center">
        <span className="material-symbols-outlined cursor-pointer hover:text-secondary-blue transition-colors relative group">
          search
        </span>
        <Link href="/cart" className="relative group">
          <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">
            shopping_cart
          </span>
        </Link>
        <Link href="/admin" className="relative group">
          <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">
            person
          </span>
        </Link>
      </div>
    </nav>
  );
}

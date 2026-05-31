"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#services", label: "Services" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.header
      className="fixed inset-x-4 top-4 z-50 rounded-2xl border border-slate-500/25 bg-slate-900/55 px-5 py-3 backdrop-blur-xl sm:inset-x-8 lg:inset-x-12"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="#" className="group flex items-center gap-2 text-lg font-semibold tracking-[0.24em] text-white">
          <motion.span whileHover={{ rotate: -8, scale: 1.08 }} className="inline-block rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 p-2 shadow-[0_0_30px_rgba(34,211,238,0.45)]" />
          ADTIVIO
        </a>
        <ul className="flex gap-6 text-sm uppercase tracking-[0.16em] text-slate-200">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="group relative">
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="pt-10">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="glass-card rounded-3xl p-8 shadow-[0_12px_80px_rgba(17,24,39,0.45)] sm:p-12"
      >
        <p className="mb-5 text-xs uppercase tracking-[0.22em] text-cyan-200/80">
          Data-Driven Growth Infrastructure
        </p>
        <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-wide text-white sm:text-5xl">
          Engineering High-ROAS Media Buying & Programmatic Ecosystems
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-200/90 sm:text-lg">
          Adtivio builds algorithmic acquisition systems focused on unit economics,
          attribution clarity, and scalable bidding intelligence across every
          performance channel.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full border border-cyan-300/40 bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-medium uppercase tracking-[0.14em] text-white shadow-[0_0_32px_rgba(56,189,248,0.55)] transition hover:scale-[1.02]"
          >
            Get Started
          </a>
          <a
            href="#ecosystem"
            className="rounded-full border border-slate-400/40 px-6 py-3 text-sm font-medium uppercase tracking-[0.14em] text-slate-100 transition hover:border-cyan-300/70 hover:text-cyan-200"
          >
            Explore Ecosystem
          </a>
        </div>
      </motion.div>
    </section>
  );
}

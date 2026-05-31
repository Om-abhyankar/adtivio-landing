"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  {
    id: "dsp",
    label: "DSP",
    title: "Demand-Side Platform",
    copy: "Automated audience discovery, predictive bid multipliers, and real-time algorithmic buying to maximize media efficiency.",
  },
  {
    id: "ssp",
    label: "SSP",
    title: "Supply-Side Platform",
    copy: "Publisher inventory governance with dynamic floor pricing, yield optimization, and private marketplace orchestration.",
  },
  {
    id: "ctv",
    label: "CTV & In-App",
    title: "Connected TV & In-App Media",
    copy: "Premium household and device-level streaming placements across Apple TV, Fire TV, and mobile in-app environments.",
  },
];

export function FutureTabs() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section id="ecosystem" className="scroll-mt-28">
      <p className="mb-3 text-xs uppercase tracking-[0.22em] text-cyan-200/80">
        The Future of Adtivio
      </p>
      <h2 className="text-2xl font-semibold tracking-wide text-white sm:text-3xl">
        Programmatic Ecosystem Preview
      </h2>
      <div className="glass-card mt-8 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] transition ${
                active.id === tab.id
                  ? "border-cyan-300/70 bg-cyan-300/15 text-cyan-100"
                  : "border-slate-400/40 text-slate-200 hover:border-violet-300/70"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-8 min-h-36">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-white">{active.title}</h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200/85 sm:text-base">
                {active.copy}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

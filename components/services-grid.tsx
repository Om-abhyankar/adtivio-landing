"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Meta Ads Control Tower",
    copy: "Campaign architecture for prospecting, retention, and LTV expansion with conversion-lift calibrated bidding models.",
  },
  {
    title: "Google Ads Profit Engine",
    copy: "Search, PMAX, and YouTube systems aligned to contribution margin targets, CAC guardrails, and real-time query intent layering.",
  },
  {
    title: "Creative Feedback Loop",
    copy: "Velocity testing framework that maps messaging variants to unit-economics cohorts for consistent ROAS scaling.",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-28">
      <p className="mb-3 text-xs uppercase tracking-[0.22em] text-violet-200/80">
        Core Ad Management
      </p>
      <h2 className="text-2xl font-semibold tracking-wide text-white sm:text-3xl">
        Current Performance Solutions
      </h2>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
        className="mt-8 grid gap-5 md:grid-cols-3"
      >
        {services.map((item) => (
          <motion.article
            key={item.title}
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            className="glass-card rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-200/85">{item.copy}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

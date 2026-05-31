"use client";

import { motion } from "framer-motion";

const dots = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  cx: 5 + (i % 6) * 18,
  cy: 10 + Math.floor(i / 6) * 24,
}));

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute -top-56 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-500/30 via-fuchsia-400/20 to-cyan-400/30 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.svg
        viewBox="0 0 100 80"
        className="absolute inset-x-0 top-24 h-[420px] w-full opacity-40"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      >
        {dots.map((dot) => (
          <g key={dot.id}>
            <circle cx={dot.cx} cy={dot.cy} r="0.8" fill="#67e8f9" />
            {dot.id > 0 && dot.id % 3 !== 0 ? (
              <line
                x1={dot.cx}
                y1={dot.cy}
                x2={dots[dot.id - 1].cx}
                y2={dots[dot.id - 1].cy}
                stroke="url(#gridGlow)"
                strokeWidth="0.22"
              />
            ) : null}
          </g>
        ))}
        <defs>
          <linearGradient id="gridGlow" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}

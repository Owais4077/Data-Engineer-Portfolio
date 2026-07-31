"use client";

import { motion } from "framer-motion";

const blobs = [
  "left-[8%] top-[14%] h-56 w-56 bg-cyan-400/14",
  "right-[10%] top-[20%] h-72 w-72 bg-violet-500/14",
  "bottom-[16%] left-[22%] h-64 w-64 bg-blue-400/12"
];

export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {blobs.map((className, index) => (
        <motion.div
          key={className}
          className={`absolute rounded-full blur-3xl ${className}`}
          animate={{
            x: index % 2 === 0 ? [0, 24, -10, 0] : [0, -28, 14, 0],
            y: index % 2 === 0 ? [0, -18, 12, 0] : [0, 18, -12, 0],
            scale: [1, 1.06, 0.98, 1]
          }}
          transition={{
            duration: 14 + index * 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      <motion.div
        className="absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent"
        animate={{ y: [0, 560, 0], opacity: [0, 0.7, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

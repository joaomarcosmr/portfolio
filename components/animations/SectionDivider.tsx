"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "wave" | "dots" | "gradient";
}

export default function SectionDivider({ variant = "gradient" }: SectionDividerProps) {
  if (variant === "gradient") {
    return (
      <div className="relative h-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className="relative h-24 overflow-hidden flex items-center justify-center gap-2">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-primary-500"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    );
  }

  return null;
}







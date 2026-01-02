"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface GlitchTextProps {
  children: string;
  className?: string;
}

export default function GlitchText({ children, className = "" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
    >
      <motion.span
        className="relative z-10"
        animate={
          isGlitching
            ? {
                x: [0, -2, 2, -2, 2, 0],
                textShadow: [
                  "0 0 0px rgba(14, 165, 233, 0)",
                  "2px 2px 0px rgba(14, 165, 233, 0.8), -2px -2px 0px rgba(232, 121, 249, 0.8)",
                  "0 0 0px rgba(14, 165, 233, 0)",
                ],
              }
            : {}
        }
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>

      {/* Glitch layers */}
      {isGlitching && (
        <>
          <motion.span
            className="absolute top-0 left-0 text-primary-500 opacity-70"
            animate={{
              x: [0, -3, 3, -3, 0],
              y: [0, 2, -2, 2, 0],
            }}
            transition={{ duration: 0.2, repeat: 2 }}
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
          >
            {children}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 text-accent-500 opacity-70"
            animate={{
              x: [0, 3, -3, 3, 0],
              y: [0, -2, 2, -2, 0],
            }}
            transition={{ duration: 0.2, repeat: 2 }}
            style={{ clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)" }}
          >
            {children}
          </motion.span>
        </>
      )}
    </div>
  );
}






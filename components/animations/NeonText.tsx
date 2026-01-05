"use client";

import { motion } from "framer-motion";

interface NeonTextProps {
  children: string;
  className?: string;
  color?: "blue" | "purple" | "cyan" | "pink";
}

export default function NeonText({ children, className = "", color = "blue" }: NeonTextProps) {
  const colorMap = {
    blue: {
      shadow: "0 0 10px rgba(14, 165, 233, 0.8), 0 0 20px rgba(14, 165, 233, 0.6), 0 0 30px rgba(14, 165, 233, 0.4)",
      text: "text-primary-400",
    },
    purple: {
      shadow: "0 0 10px rgba(232, 121, 249, 0.8), 0 0 20px rgba(232, 121, 249, 0.6), 0 0 30px rgba(232, 121, 249, 0.4)",
      text: "text-accent-400",
    },
    cyan: {
      shadow: "0 0 10px rgba(56, 189, 248, 0.8), 0 0 20px rgba(56, 189, 248, 0.6), 0 0 30px rgba(56, 189, 248, 0.4)",
      text: "text-cyan-400",
    },
    pink: {
      shadow: "0 0 10px rgba(244, 114, 182, 0.8), 0 0 20px rgba(244, 114, 182, 0.6), 0 0 30px rgba(244, 114, 182, 0.4)",
      text: "text-pink-400",
    },
  };

  const colors = colorMap[color];

  return (
    <motion.span
      className={`${colors.text} ${className}`}
      animate={{
        textShadow: [
          colors.shadow,
          "0 0 5px rgba(14, 165, 233, 0.4), 0 0 10px rgba(14, 165, 233, 0.3), 0 0 15px rgba(14, 165, 233, 0.2)",
          colors.shadow,
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.span>
  );
}







"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10">
      <motion.button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
          language === "en"
            ? "bg-primary-600 text-white"
            : "text-gray-400 hover:text-white"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {language === "en" && <Globe size={14} />}
        EN
      </motion.button>
      <motion.button
        onClick={() => setLanguage("pt")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
          language === "pt"
            ? "bg-primary-600 text-white"
            : "text-gray-400 hover:text-white"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {language === "pt" && <Globe size={14} />}
        PT
      </motion.button>
    </div>
  );
}




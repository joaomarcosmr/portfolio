"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import { getImagePath } from "@/lib/config";
import Image from "next/image";

export default function About() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Orb decorativo */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      <motion.div
        ref={ref}
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="space-y-16"
      >
        {/* Header */}
        <motion.div variants={fadeIn("up", 0.2)} className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.about.title} <span className="gradient-text">{t.about.titleHighlight}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div variants={fadeIn("right", 0.4)} className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-square max-w-xs sm:max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl transform rotate-6" />
              <div className="relative bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={getImagePath("/images/profile.png")}
                  alt="João Marcos - Brazilian Developer"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeIn("left", 0.4)} className="space-y-6 order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-foreground">
              {t.about.role}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              {t.about.description}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {t.about.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", 0.6 + index * 0.1)}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="text-primary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}


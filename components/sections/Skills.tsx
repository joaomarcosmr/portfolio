"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import { Search, Code2, Settings, Rocket, Zap, Clock } from "lucide-react";
import Link from "next/link";

const stepIcons = [Search, Code2, Settings, Rocket];

export default function Skills() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="section relative overflow-hidden bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(14, 165, 233, 0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(14, 165, 233, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div
        ref={ref}
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="relative z-10 space-y-16"
      >
        {/* Hero Section - 5 Days Highlight */}
        <motion.div variants={fadeIn("up", 0.2)} className="text-center space-y-6">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 backdrop-blur-sm"
            animate={{ boxShadow: ["0 0 20px rgba(14, 165, 233, 0.3)", "0 0 40px rgba(14, 165, 233, 0.5)", "0 0 20px rgba(14, 165, 233, 0.3)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap className="w-5 h-5 text-primary-400" />
            <span className="text-sm font-bold text-primary-300 uppercase tracking-wider">{t.skills.badge}</span>
          </motion.div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold">
            {t.skills.title} <span className="gradient-text">{t.skills.titleHighlight}</span>
          </h2>

          {/* 5 Days Highlight Box */}
          <motion.div
            className="relative inline-block"
            variants={fadeIn("up", 0.3)}
          >
            <div className="relative px-10 py-6 rounded-2xl bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 border border-primary-500/30 backdrop-blur-xl">
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.4), transparent)",
                }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative flex items-center justify-center gap-4">
                <Clock className="w-10 h-10 text-primary-400" />
                <div className="text-center">
                  <motion.span
                    className="text-6xl md:text-7xl font-black bg-gradient-to-r from-primary-400 via-cyan-400 to-accent-400 bg-clip-text text-transparent"
                    animate={{ 
                      textShadow: [
                        "0 0 20px rgba(14, 165, 233, 0.5)",
                        "0 0 40px rgba(14, 165, 233, 0.8)",
                        "0 0 20px rgba(14, 165, 233, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    5
                  </motion.span>
                  <span className="text-4xl md:text-5xl font-bold text-white ml-2">{t.skills.days}</span>
                </div>
              </div>
              <p className="text-gray-300 mt-3 text-lg">
                {t.skills.daysSubtitle}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline - Horizontal on desktop */}
        <div className="max-w-6xl mx-auto px-4">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Animated Timeline Line */}
              <div className="absolute top-16 left-0 right-0 h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 via-cyan-400 to-accent-500"
                  initial={{ width: "0%" }}
                  animate={inView ? { width: "100%" } : { width: "0%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </div>

              {/* Timeline Steps */}
              <div className="grid grid-cols-4 gap-6">
                {t.skills.timeline.map((item, index) => {
                  const Icon = stepIcons[index] || Rocket;
                  return (
                    <motion.div
                      key={item.step}
                      variants={fadeIn("up", 0.4 + index * 0.15)}
                      className="relative"
                    >
                      {/* Step Circle */}
                      <div className="flex justify-center mb-8">
                        <motion.div
                          className="relative"
                          whileHover={{ scale: 1.1 }}
                        >
                          {/* Pulse Ring */}
                          <motion.div
                            className="absolute inset-0 rounded-full bg-primary-500/30"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.5, 0, 0.5],
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                          />
                          
                          {/* Icon Container */}
                          <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-primary-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.3)]">
                            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20" />
                            <Icon className="w-12 h-12 text-primary-400 relative z-10" strokeWidth={1.5} />
                            
                            {/* Step Number Badge */}
                            <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              {item.step}
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Content Card */}
                      <motion.div
                        className="text-center p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-primary-500/50 transition-all duration-300"
                        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(14, 165, 233, 0.2)" }}
                      >
                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>

                      {/* Day indicator */}
                      <motion.div
                        className="mt-4 text-center"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 1 + index * 0.2 }}
                      >
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium">
                          <Clock className="w-3 h-3" />
                          {t.skills.day} {index + 1}-{index + 2}
                        </span>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {t.skills.timeline.map((item, index) => {
              const Icon = stepIcons[index] || Rocket;
              return (
                <motion.div
                  key={item.step}
                  variants={fadeIn("right", 0.3 + index * 0.1)}
                  className="relative flex gap-4"
                >
                  {/* Timeline connector */}
                  {index < t.skills.timeline.length - 1 && (
                    <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500" />
                  )}

                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-primary-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.3)]"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-7 h-7 text-primary-400" strokeWidth={1.5} />
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-xs">
                        {item.step}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary-500/20 text-primary-400">
                          {t.skills.day} {index + 1}-{index + 2}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          className="text-center"
        >
          <Link href="/quiz">
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold text-lg shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:shadow-[0_0_50px_rgba(14,165,233,0.6)] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="w-6 h-6" />
              {t.skills.startNow}
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Rocket, MessageSquare, ArrowRight } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function Testimonials() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="section relative overflow-hidden bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900">
      {/* Background Effects */}
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

      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div
        ref={ref}
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="relative z-10 space-y-12"
      >
        {/* Header */}
        <motion.div variants={fadeIn("up", 0.2)} className="text-center space-y-6">
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 backdrop-blur-sm"
            animate={{ boxShadow: ["0 0 20px rgba(14, 165, 233, 0.3)", "0 0 40px rgba(14, 165, 233, 0.5)", "0 0 20px rgba(14, 165, 233, 0.3)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Rocket className="w-5 h-5 text-primary-400" />
            <span className="text-sm font-bold text-primary-300 uppercase tracking-wider">
              {t.startProject?.badge || "Começar Projeto"}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold">
            {t.startProject?.title || "Vamos começar"} <span className="gradient-text">{t.startProject?.titleHighlight || "seu projeto?"}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.startProject?.subtitle || "Preencha o formulário abaixo me contando sobre seu negócio e como você imagina seu projeto. Entrarei em contato o mais rápido possível!"}
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={fadeIn("up", 0.4)} className="flex justify-center">
          <Link href="/quiz">
            <motion.button
              className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold text-xl shadow-[0_0_40px_rgba(14,165,233,0.4)] hover:shadow-[0_0_60px_rgba(14,165,233,0.6)] transition-all overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <MessageSquare className="w-6 h-6" />
                {t.startProject?.cta || "Iniciar Formulário"}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

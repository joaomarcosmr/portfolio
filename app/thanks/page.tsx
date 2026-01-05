"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckCircle, MessageCircle, Rocket, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { trackPurchase } from "@/lib/facebookPixel";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ThanksPage() {
  const { t, language } = useLanguage();
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Get session_id from URL
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const id = params.get("session_id");
      setSessionId(id);
    }
    
    // Track Purchase event when page loads
    // You can extract value from session_id if needed via API
    trackPurchase(390, "EUR", "Website Development Service");
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(14, 165, 233, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(14, 165, 233, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Top Bar */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>{t.thanks?.back || "Back to Home"}</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <LanguageToggle />
          </motion.div>
        </div>

        {/* Success Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-2xl text-center space-y-8"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.5)]"
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 40px rgba(34, 197, 94, 0.5)",
                    "0 0 60px rgba(34, 197, 94, 0.8)",
                    "0 0 40px rgba(34, 197, 94, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CheckCircle className="w-16 h-16 text-white" />
              </motion.div>
              {/* Orbiting particles */}
              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-green-400 rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                    transformOrigin: "0 64px",
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 backdrop-blur-sm"
          >
            <Sparkles className="w-5 h-5 text-primary-400" />
            <span className="text-sm font-bold text-primary-300 uppercase tracking-wider">
              {t.thanks?.badge || "Payment Confirmed"}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            {t.thanks?.title || "Thank you for your"}{" "}
            <span className="gradient-text">{t.thanks?.titleHighlight || "Trust!"}</span>
          </motion.h1>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              {t.thanks?.paymentConfirmed || "Your payment has been confirmed successfully! 🎉"}
            </p>
            <p className="text-xl font-semibold text-white">
              {t.thanks?.serviceStarted || "Your service will start now!"}
            </p>
            <p>
              {t.thanks?.communication || "We will maintain communication via"}{" "}
              <strong className="text-green-400">{t.thanks?.communicationWhatsApp || "WhatsApp"}</strong>{" "}
              {t.thanks?.communicationText || "to follow up on the development of your project and ensure everything turns out exactly as you envisioned."}
            </p>
          </motion.div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm space-y-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                <Rocket className="w-6 h-6 text-primary-400" />
              </div>
              <div className="text-left space-y-2">
                <h3 className="text-white font-bold text-lg">{t.thanks?.nextSteps || "Next Steps"}</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>{t.thanks?.step1 || "You will receive a WhatsApp message shortly"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>{t.thanks?.step2 || "We will collect information and references for your project"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>{t.thanks?.step3 || "Development started within 5 business days"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* WhatsApp Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="https://wa.me/5547996690084"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-6 h-6" />
              {t.thanks?.whatsappButton || "Talk on WhatsApp"}
            </motion.a>
            <motion.a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300 hover:text-white hover:border-primary-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.thanks?.backToSite || "Back to Site"}
            </motion.a>
          </motion.div>

          {/* Session ID (hidden, for debugging if needed) */}
          {sessionId && (
            <p className="text-xs text-gray-500 mt-4">
              {t.thanks?.sessionId || "Session ID"}: {sessionId}
            </p>
          )}
        </motion.div>
      </div>
    </main>
  );
}


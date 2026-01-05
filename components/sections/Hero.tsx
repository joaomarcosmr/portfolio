"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Zap, MessageCircle, Clock, Rocket, Code2, Globe } from "lucide-react";
import { fadeIn, textVariant } from "@/lib/animations";
import ParticlesBackground from "@/components/animations/ParticlesBackground";
import TypingEffect from "@/components/animations/TypingEffect";
import GlitchText from "@/components/animations/GlitchText";
import NeonText from "@/components/animations/NeonText";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackContactButtonClick } from "@/lib/facebookPixel";

export default function Hero() {
  const { t } = useLanguage();
  
  const handleScrollDown = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 pt-20"
    >
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Animated Grid */}
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
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <motion.div
            variants={textVariant(0)}
            initial="hidden"
            animate="show"
            className="flex-1 text-center lg:text-left space-y-8"
          >
            {/* Badges */}
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-300">
                {t.hero.available}
              </span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/30 backdrop-blur-sm">
                <Globe className="w-4 h-4 text-accent-400" />
                <span className="text-sm font-medium text-accent-300">
                  {t.hero.worldwide}
                </span>
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
            >
              <p className="text-primary-400 text-lg md:text-xl font-semibold flex items-center justify-center lg:justify-start gap-2">
                <Zap className="w-5 h-5" />
                {t.hero.greeting}
              </p>
            </motion.div>

            {/* Name with Glitch Effect */}
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="text-5xl md:text-7xl lg:text-8xl font-bold"
            >
              <GlitchText className="text-white">
                {t.hero.name}
              </GlitchText>{" "}
              <br className="hidden lg:block" />
              <NeonText color="blue" className="inline-block mt-2">
                {t.hero.lastName}
              </NeonText>
            </motion.h1>

            {/* Typing Effect Role */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              className="h-20 flex items-center justify-center lg:justify-start"
            >
              <div className="flex items-center gap-3">
                <Code2 className="w-6 h-6 text-accent-400" />
                <h2 className="text-2xl md:text-4xl font-light text-gray-300">
                  <TypingEffect words={t.hero.roles} />
                </h2>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: t.hero.description
                  .replace(
                    /5 dias|5 days/gi,
                    '<span class="text-primary-400 font-bold">$&</span>'
                  )
                  .replace(
                    /explodir suas vendas|skyrocket your sales/gi,
                    '<span class="text-accent-400 font-bold">$&</span>'
                  )
                  .replace(
                    /Dedicação total|Total dedication/gi,
                    '<span class="text-cyan-400 font-semibold">$&</span>'
                )
              }}
            />

            {/* CTA Buttons */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                className="group relative btn-primary overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  const projectsSection = document.querySelector("#projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  {t.hero.cta1}
                </span>
              </motion.a>

              <motion.a
                href={t.hero.whatsappUrl || "https://wa.me/5511999999999"}
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={trackContactButtonClick}
              >
                <span className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  {t.hero.cta2}
                </span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              animate="show"
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/joaomarcosmr", label: "GitHub", color: "hover:text-white" },
                { icon: Linkedin, href: "https://linkedin.com/in/joaommr", label: "LinkedIn", color: "hover:text-blue-400" },
                { icon: Mail, href: "mailto:joaomarcosmr4@gmail.com", label: "Email", color: "hover:text-primary-400" },
              ].map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-12 h-12 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 ${color} transition-all border border-white/10 hover:border-primary-500/50`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Animated Visual Element - Tech Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1 relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[420px] h-[420px]">
              {/* Outer Ring - Animated */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {/* Dot markers on outer ring */}
                {[0, 90, 180, 270].map((angle) => (
                  <motion.div
                    key={angle}
                    className="absolute w-3 h-3 bg-primary-500 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.8)]"
                    style={{
                      left: `${50 + 48 * Math.cos((angle * Math.PI) / 180)}%`,
                      top: `${50 + 48 * Math.sin((angle * Math.PI) / 180)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
              </motion.div>

              {/* Inner glow circle */}
              <motion.div
                className="absolute inset-8 rounded-full bg-gradient-to-br from-primary-500/10 to-accent-500/10 backdrop-blur-xl border border-primary-500/20"
                animate={{
                  scale: [1, 1.02, 1],
                  boxShadow: [
                    "0 0 30px rgba(14, 165, 233, 0.2)",
                    "0 0 60px rgba(14, 165, 233, 0.4)",
                    "0 0 30px rgba(14, 165, 233, 0.2)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Floating code symbols */}
              {["</>", "{ }", "=>", "( )"].map((symbol, i) => (
                <motion.div
                  key={i}
                  className="absolute text-2xl font-mono font-bold text-primary-400/70"
                  style={{
                    left: `${50 + 42 * Math.cos(((i * 90 + 45) * Math.PI) / 180)}%`,
                    top: `${50 + 42 * Math.sin(((i * 90 + 45) * Math.PI) / 180)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                >
                  {symbol}
                </motion.div>
              ))}

              {/* Center Content - 5 Days Highlight */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative text-center p-8"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {/* Glow background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-3xl blur-xl" />
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-2">
                    <motion.div
                      className="flex items-center justify-center gap-2 text-primary-300 text-sm font-medium"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                >
                      <Clock className="w-4 h-4" />
                      <span>{t.hero.highlight}</span>
                    </motion.div>
                    
                    <motion.div
                      className="text-6xl font-black bg-gradient-to-r from-primary-400 via-cyan-300 to-accent-400 bg-clip-text text-transparent"
                      animate={{
                        textShadow: [
                          "0 0 20px rgba(14, 165, 233, 0)",
                          "0 0 40px rgba(14, 165, 233, 0.5)",
                          "0 0 20px rgba(14, 165, 233, 0)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {t.hero.days}
                    </motion.div>

                    <motion.div
                      className="flex items-center justify-center gap-2 text-accent-400 text-sm font-semibold"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Rocket className="w-4 h-4" />
                      <span>Online & Ready!</span>
                    </motion.div>
                  </div>

                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-primary-500/50"
                    animate={{
                      borderColor: [
                        "rgba(14, 165, 233, 0.5)",
                        "rgba(34, 211, 238, 0.8)",
                        "rgba(14, 165, 233, 0.5)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Orbiting particle */}
              <motion.div
                className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                animate={{
                  rotate: 360,
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{
                  left: "50%",
                  top: "0%",
                  transformOrigin: "0 210px",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.button
            onClick={handleScrollDown}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors cursor-pointer group"
            aria-label="Scroll down"
          >
            <span className="text-sm font-medium">{t.hero.scrollDown}</span>
            <ArrowDown size={24} className="group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

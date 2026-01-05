"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MessageCircle, Instagram, Linkedin, MousePointerClick } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackContactButtonClick } from "@/lib/facebookPixel";

export default function Contact() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+55 (47) 99669-0084",
      href: t.hero.whatsappUrl || "https://wa.me/5547996690084",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:border-green-500/50",
    },
    {
      icon: Mail,
      title: "Email",
      value: "joaomarcosmr4@gmail.com",
      href: "mailto:joaomarcosmr4@gmail.com",
      color: "from-primary-500 to-accent-500",
      hoverColor: "hover:border-primary-500/50",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@joaomarcos.developer",
      href: "https://instagram.com/joaomarcos.developer",
      color: "from-pink-500 to-purple-500",
      hoverColor: "hover:border-pink-500/50",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "João Marcos",
      href: "https://linkedin.com/in/joaommr",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:border-blue-500/50",
    },
  ];

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-slate-900/50 to-transparent" />
      
      <motion.div
        ref={ref}
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="relative z-10 space-y-12"
      >
        {/* Header */}
        <motion.div variants={fadeIn("up", 0.2)} className="text-center space-y-4">
          <p className="text-gray-400 text-lg">
            {t.contact?.alternativeText || "Ou, se preferir"}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            {t.contact.title} <span className="gradient-text">{t.contact.titleHighlight}</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-300 mt-4">
            <MousePointerClick className="w-5 h-5 text-primary-400" />
            <p className="text-lg">{t.contact?.clickBest || "Clique na melhor opção pra você"}</p>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <motion.div 
          variants={fadeIn("up", 0.4)} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeIn("up", 0.3 + index * 0.1)}
              className={`group p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm ${info.hoverColor} transition-all duration-300`}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                if (info.title === "WhatsApp") {
                  trackContactButtonClick();
                }
              }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  <info.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{info.title}</h4>
                  <p className="text-gray-400 text-sm">{info.value}</p>
                </div>
              </div>
            </motion.a>
          ))}
                </motion.div>

      </motion.div>
    </section>
  );
}

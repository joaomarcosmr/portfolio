"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Rocket, ArrowLeft, MessageCircle, User, Mail, Building2, Globe, Briefcase, ChevronDown, Check, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export default function QuizPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    business: "",
    languages: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleLanguage = (lang: string) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(lang)
        ? prev.languages.filter(l => l !== lang)
        : [...prev.languages, lang],
    }));
  };

  const removeLanguage = (lang: string) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.filter(l => l !== lang),
    }));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const projectTypes = [
    { value: "website", label: t.quiz?.projectTypes?.website || "Website" },
    { value: "landingpage", label: t.quiz?.projectTypes?.landingpage || "Landing Page" },
    { value: "portfolio", label: t.quiz?.projectTypes?.portfolio || "Portfólio" },
  ];

  const languages = [
    { value: "pt", label: t.quiz?.languages?.pt || "Português 🇧🇷" },
    { value: "en", label: t.quiz?.languages?.en || "English 🇺🇸" },
    { value: "es", label: t.quiz?.languages?.es || "Español 🇪🇸" },
    { value: "fr", label: t.quiz?.languages?.fr || "Français 🇫🇷" },
    { value: "de", label: t.quiz?.languages?.de || "Deutsch 🇩🇪" },
    { value: "it", label: t.quiz?.languages?.it || "Italiano 🇮🇹" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const projectLabel = projectTypes.find(p => p.value === formData.projectType)?.label || formData.projectType;
    const languageLabels = formData.languages
      .map(lang => languages.find(l => l.value === lang)?.label || lang)
      .join(", ");
    
    // Use the translated message template
    const messageTemplate = t.quiz?.whatsappMessage || `Olá! Vim pelo seu portfólio e gostaria de um orçamento.

*Dados do Projeto:*
📌 Nome: {name}
📧 Email: {email}
🎯 Tipo de Projeto: {projectType}
🏢 Nicho/Empresa: {business}
🌐 Idioma do site: {language}

Aguardo retorno!`;

    const message = messageTemplate
      .replace("{name}", formData.name)
      .replace("{email}", formData.email)
      .replace("{projectType}", projectLabel)
      .replace("{business}", formData.business)
      .replace("{language}", languageLabels);

    const whatsappUrl = `https://wa.me/5547996690084?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const isFormValid = formData.name && formData.email && formData.projectType && formData.business && formData.languages.length > 0;

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
              <span>{t.quiz?.back || "Voltar"}</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <LanguageToggle />
          </motion.div>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 mt-16 md:mt-10"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 backdrop-blur-sm mb-6"
            animate={{ boxShadow: ["0 0 20px rgba(14, 165, 233, 0.3)", "0 0 40px rgba(14, 165, 233, 0.5)", "0 0 20px rgba(14, 165, 233, 0.3)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Rocket className="w-5 h-5 text-primary-400" />
            <span className="text-sm font-bold text-primary-300 uppercase tracking-wider">
              {t.quiz?.badge || "Começar Projeto"}
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.quiz?.title || "Vamos criar seu"} <span className="gradient-text">{t.quiz?.titleHighlight || "projeto?"}</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            {t.quiz?.subtitle || "Preencha os dados abaixo e entrarei em contato rapidamente!"}
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="w-full max-w-lg p-8 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm space-y-6"
        >
          {/* Name */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
              <User className="w-4 h-4 text-primary-400" />
              {t.quiz?.name || "Seu nome"} *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-white placeholder-gray-500"
              placeholder={t.quiz?.namePlaceholder || "Como posso te chamar?"}
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
              <Mail className="w-4 h-4 text-primary-400" />
              {t.quiz?.email || "Seu email"} *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-white placeholder-gray-500"
              placeholder={t.quiz?.emailPlaceholder || "seu@email.com"}
            />
          </div>

          {/* Project Type */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
              <Briefcase className="w-4 h-4 text-primary-400" />
              {t.quiz?.projectType || "O que deseja?"} *
            </label>
            <div className="grid grid-cols-3 gap-3">
              {projectTypes.map(({ value, label }) => (
                <motion.label
                  key={value}
                  className={`relative flex items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all text-center ${
                    formData.projectType === value
                      ? "border-primary-500 bg-primary-500/10 text-primary-300"
                      : "border-gray-700 hover:border-gray-600 text-gray-400"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input
                    type="radio"
                    name="projectType"
                    value={value}
                    checked={formData.projectType === value}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span className="text-sm font-medium">{label}</span>
                </motion.label>
              ))}
            </div>
          </div>

          {/* Business */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
              <Building2 className="w-4 h-4 text-primary-400" />
              {t.quiz?.business || "Nicho da empresa"} *
            </label>
            <input
              type="text"
              name="business"
              value={formData.business}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-white placeholder-gray-500"
              placeholder={t.quiz?.businessPlaceholder || "Ex: Restaurante, Advocacia, E-commerce..."}
            />
          </div>

          {/* Language - Multi-select Dropdown */}
          <div ref={dropdownRef} className="relative">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
              <Globe className="w-4 h-4 text-primary-400" />
              {t.quiz?.language || "Idioma do site"} * <span className="text-gray-500 text-xs">({t.quiz?.multiSelect || "pode selecionar mais de um"})</span>
            </label>
            
            {/* Selected Tags */}
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full min-h-[52px] px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 transition-all cursor-pointer flex items-center justify-between gap-2"
            >
              <div className="flex flex-wrap gap-2 flex-1">
                {formData.languages.length === 0 ? (
                  <span className="text-gray-500">{t.quiz?.languagePlaceholder || "Selecione os idiomas..."}</span>
                ) : (
                  formData.languages.map(lang => {
                    const langData = languages.find(l => l.value === lang);
                    return (
                      <motion.span
                        key={lang}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-primary-500/20 border border-primary-500/30 rounded-full text-primary-300 text-sm"
                      >
                        {langData?.label}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeLanguage(lang);
                          }}
                          className="hover:text-white transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </motion.span>
                    );
                  })
                )}
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </div>

            {/* Dropdown List */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-50 w-full mt-2 bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-xl"
                >
                  {languages.map(({ value, label }) => (
                    <div
                      key={value}
                      onClick={() => toggleLanguage(value)}
                      className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors ${
                        formData.languages.includes(value)
                          ? "bg-primary-500/20 text-primary-300"
                          : "text-gray-300 hover:bg-gray-800"
                      }`}
                    >
                      <span>{label}</span>
                      {formData.languages.includes(value) && (
                        <Check className="w-5 h-5 text-primary-400" />
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Submit Button - Green WhatsApp Style */}
          <motion.button
            type="submit"
            disabled={!isFormValid}
            className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-bold flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all"
            whileHover={{ scale: isFormValid ? 1.02 : 1 }}
            whileTap={{ scale: isFormValid ? 0.98 : 1 }}
          >
            <MessageCircle className="w-6 h-6" />
            {t.quiz?.submit || "Entrar em Contato"}
          </motion.button>
        </motion.form>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-500 text-sm mt-6 text-center"
        >
          {t.quiz?.footer || "Seus dados estão seguros. Responderei em até 24h! 🚀"}
        </motion.p>
      </div>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, X, Euro, CreditCard, Server, Globe, Wrench, Clock, Zap, Heart } from "lucide-react";

export default function Comparison() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const agencyFeatures = [
    { icon: Euro, label: t.comparison?.agency?.price || "€1.200+ inicial", included: true },
    { icon: CreditCard, label: t.comparison?.agency?.monthly || "€100+/mês manutenção", included: true, negative: true },
    { icon: Globe, label: t.comparison?.agency?.domain || "Domínio cobrado à parte", included: false },
    { icon: Server, label: t.comparison?.agency?.hosting || "Hospedagem cobrada à parte", included: false },
    { icon: Clock, label: t.comparison?.agency?.delivery || "4-8 semanas de entrega", included: true, negative: true },
    { icon: Wrench, label: t.comparison?.agency?.changes || "Alterações cobradas", included: false },
  ];

  const myFeatures = [
    { icon: Euro, label: t.comparison?.me?.price || "€697 preço fixo", included: true },
    { icon: CreditCard, label: t.comparison?.me?.monthly || "Sem mensalidade", included: true },
    { icon: Globe, label: t.comparison?.me?.domain || "Domínio incluso (1º ano)", included: true },
    { icon: Server, label: t.comparison?.me?.hosting || "Hospedagem inclusa (1º ano)", included: true },
    { icon: Clock, label: t.comparison?.me?.delivery || "Entrega em 5 dias", included: true },
    { icon: Wrench, label: t.comparison?.me?.changes || "Alterações inclusas", included: true },
  ];

  return (
    <section id="comparison" className="section relative overflow-hidden bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900">
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
        ref={ref}
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="relative z-10 space-y-12"
      >
        {/* Header */}
        <motion.div variants={fadeIn("up", 0.2)} className="text-center space-y-4">
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 backdrop-blur-sm"
          >
            <Zap className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-bold text-orange-300 uppercase tracking-wider">
              {t.comparison?.badge || "Compare e Economize"}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold">
            {t.comparison?.title || "Agência Tradicional"} <span className="gradient-text">{t.comparison?.titleHighlight || "vs Brazilian Dev"}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.comparison?.subtitle || "Veja por que empresas do mundo todo estão escolhendo desenvolvedores brasileiros"}
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Agency Card */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            className="relative p-8 rounded-2xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm"
          >
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gray-700 rounded-full text-gray-300 text-sm font-medium">
              {t.comparison?.agency?.badge || "Agência Europeia"}
            </div>

            {/* Price */}
            <div className="text-center mb-8 pt-4">
              <div className="text-gray-400 text-sm mb-2">{t.comparison?.agency?.startingAt || "Starting at"}</div>
              <div className="flex items-center justify-center gap-1">
                <span className="text-4xl md:text-5xl font-black text-gray-300">€800-1500</span>
              </div>
              <div className="text-red-400 text-sm mt-2 flex items-center justify-center gap-1">
                <span>+ €200/{t.comparison?.agency?.monthlyLabel || "monthly"}</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {agencyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    feature.included && !feature.negative 
                      ? "bg-green-500/20 text-green-400" 
                      : feature.negative 
                        ? "bg-orange-500/20 text-orange-400"
                        : "bg-red-500/20 text-red-400"
                  }`}>
                    {feature.included ? (
                      feature.negative ? <X size={16} /> : <Check size={16} />
                    ) : (
                      <X size={16} />
                    )}
                  </div>
                  <span className={`${feature.negative || !feature.included ? "text-gray-500" : "text-gray-300"}`}>
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="text-center">
                <div className="text-gray-400 text-sm">{t.comparison?.agency?.firstYear || "1st Year (estimate)"}</div>
                <div className="text-3xl font-bold text-red-400 mt-1">€3.200+</div>
              </div>
            </div>
          </motion.div>

          {/* My Card */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 border-2 border-primary-500/50 backdrop-blur-sm shadow-[0_0_40px_rgba(14,165,233,0.2)]"
          >
            {/* Badge */}
            <motion.div 
              className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white text-sm font-bold flex items-center gap-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={14} className="fill-white" />
              {t.comparison?.me?.badge || "Brazilian Developer"}
            </motion.div>

            {/* Popular Tag */}
            <motion.div
              className="absolute -top-3 -right-3 px-3 py-1 bg-green-500 rounded-full text-white text-xs font-bold"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {t.comparison?.me?.popular || "MELHOR CUSTO"}
            </motion.div>

            {/* Price */}
            <div className="text-center mb-8 pt-4">
              <div className="text-primary-300 text-sm mb-2">{t.comparison?.me?.fixedPrice || "Preço fixo"}</div>
              <div className="flex items-center justify-center">
                <motion.span 
                  className="text-6xl font-black bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  €390
                </motion.span>
              </div>
              <div className="text-primary-300/80 text-sm mt-1">
                {t.comparison?.me?.upToPages || "Site de até 5 páginas"}
              </div>
              <div className="text-green-400 text-sm mt-2 flex items-center justify-center gap-1">
                <Check size={14} />
                <span>{t.comparison?.me?.noMonthly || "Sem mensalidade"}</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {myFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
                    <Check size={16} />
                  </div>
                  <span className="text-white font-medium">{feature.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-8 pt-6 border-t border-primary-500/30">
              <div className="text-center">
                <div className="text-primary-300 text-sm">{t.comparison?.me?.firstYear || "1st Year (all included)"}</div>
                <div className="text-3xl font-bold text-green-400 mt-1">€390</div>
                <div className="text-green-400/80 text-sm mt-1">
                  {t.comparison?.me?.savings || "Save €2,700+"}
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="/quiz"
              className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.comparison?.me?.cta || "Começar Agora"}
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.p
          variants={fadeIn("up", 0.5)}
          className="text-center text-gray-500 text-sm max-w-2xl mx-auto"
        >
          {t.comparison?.note || "* Valores baseados em pesquisa de mercado europeu. Após o 1º ano, domínio e hospedagem podem ser renovados por valores acessíveis (~€50/ano total)."}
        </motion.p>
      </motion.div>
    </section>
  );
}


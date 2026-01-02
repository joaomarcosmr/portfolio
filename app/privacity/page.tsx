"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";

export default function PrivacyPage() {
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

      <div className="relative z-10 min-h-screen px-4 py-12">
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
              <span>Voltar</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <LanguageToggle />
          </motion.div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto pt-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 backdrop-blur-sm mb-6"
              animate={{ boxShadow: ["0 0 20px rgba(14, 165, 233, 0.3)", "0 0 40px rgba(14, 165, 233, 0.5)", "0 0 20px rgba(14, 165, 233, 0.3)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Shield className="w-5 h-5 text-primary-400" />
              <span className="text-sm font-bold text-primary-300 uppercase tracking-wider">
                Privacidade
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Política de <span className="gradient-text">Privacidade</span>
            </h1>
          </motion.div>

          {/* Privacy Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none p-8 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm"
          >
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                A sua privacidade é importante para nós. É política do <strong className="text-white">João Marcos Martins Rosa</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <strong className="text-white">João Marcos Martins Rosa</strong>, e outros sites que possuímos e operamos.
              </p>

              <p>
                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
              </p>

              <p>
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
              </p>

              <p>
                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
              </p>

              <p>
                O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
              </p>

              <p>
                Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
              </p>

              <p>
                O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Google AdSense</h2>
              <p>
                O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.
              </p>
              <p>
                Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Anúncios</h2>
              <p>
                Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados ​​por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.
              </p>
              <p>
                Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Compromisso do Usuário</h2>
              <p>
                O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o <strong className="text-white">João Marcos Martins Rosa</strong> oferece no site e com caráter enunciativo, mas não limitativo:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-white">A)</strong> Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
                </li>
                <li>
                  <strong className="text-white">B)</strong> Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
                </li>
                <li>
                  <strong className="text-white">C)</strong> Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do <strong className="text-white">João Marcos Martins Rosa</strong>, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Mais informações</h2>
              <p>
                Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
              </p>

              <p className="text-sm text-gray-400 mt-8 pt-6 border-t border-gray-700">
                Esta política é efetiva a partir de <strong className="text-white">2 January 2026 17:58</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}


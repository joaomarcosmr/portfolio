"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { PROJECTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function Projects() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Efeito de brilho */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-primary-500/5 to-transparent blur-3xl" />
      <motion.div
        ref={ref}
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="space-y-12"
      >
        {/* Header */}
        <motion.div variants={fadeIn("up", 0.2)} className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.projects.title} <span className="gradient-text">{t.projects.titleHighlight}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => {
            // Get translated project info
            const translatedProject = t.projects.items?.find((p: { id: number }) => p.id === project.id);
            const title = translatedProject?.title || project.title;
            const description = translatedProject?.description || project.description;
            
            return (
              <motion.div
                key={project.id}
                variants={fadeIn("up", 0.3 + index * 0.1)}
                className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary-600 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                    {description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="pt-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      {t.projects.viewSite}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

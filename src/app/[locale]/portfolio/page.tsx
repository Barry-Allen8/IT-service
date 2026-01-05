"use client";

import { useState } from "react";
import { portfolioProjects } from "@/data/portfolio";
import Card from "@/components/ui/Card";
import { ExternalLink, Filter } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function PortfolioPage() {
  const t = useTranslations("portfolio");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { key: "all", label: t("all") },
    { key: "E-commerce", label: "E-commerce" },
    { key: "Website", label: "Website" },
    { key: "Chatbot", label: "Chatbot" },
    { key: "AI Solution", label: "AI Solution" },
    { key: "Mobile App", label: "Mobile App" },
  ];

  const filteredProjects = activeCategory === "all"
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <section className="section bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
            <p className="text-xl text-muted">{t("description")}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <Filter className="w-5 h-5 text-muted" />
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.key
                    ? "bg-primary text-white"
                    : "bg-card hover:bg-primary/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <Card className="group cursor-pointer h-full">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
                    <ExternalLink className="w-12 h-12 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-card text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <span className="text-sm text-muted">{project.year}</span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t("view")}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted text-lg">{t("no_projects")}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

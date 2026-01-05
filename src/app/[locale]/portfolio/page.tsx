"use client";

import { useState } from "react";
import Image from "next/image";
import Card from "@/components/ui/Card";
import { ExternalLink, Filter } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

// Project data with translation keys
const projectsData = [
  {
    id: "1",
    key: "electronics_shop",
    slug: "electronics-shop-demo",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    category: "E-commerce",
    categoryKey: "ecommerce",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    year: 2024,
  },
  {
    id: "2",
    key: "restaurant_bot",
    slug: "restaurant-bot-demo",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
    category: "Chatbot",
    categoryKey: "chatbot",
    technologies: ["Python", "Telegram API", "ChatGPT", "PostgreSQL"],
    year: 2024,
  },
  {
    id: "3",
    key: "corporate_website",
    slug: "corporate-website-demo",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    category: "Website",
    categoryKey: "website",
    technologies: ["Next.js", "Tailwind CSS", "Sanity CMS", "Vercel"],
    year: 2024,
  },
  {
    id: "4",
    key: "ai_assistant",
    slug: "ai-assistant-demo",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    category: "AI Solution",
    categoryKey: "ai_solution",
    technologies: ["ChatGPT API", "Node.js", "React", "MongoDB"],
    year: 2024,
  },
  {
    id: "5",
    key: "fitness_app",
    slug: "fitness-app-demo",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=600&fit=crop",
    category: "Mobile App",
    categoryKey: "mobile_app",
    technologies: ["React Native", "Firebase", "Node.js", "Express"],
    year: 2024,
  },
  {
    id: "6",
    key: "education_platform",
    slug: "education-platform-demo",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    category: "Website",
    categoryKey: "website",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
    year: 2024,
  },
];

export default function PortfolioPage() {
  const t = useTranslations("portfolio");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { key: "all", label: t("all") },
    { key: "E-commerce", label: t("categories.ecommerce") },
    { key: "Website", label: t("categories.website") },
    { key: "Chatbot", label: t("categories.chatbot") },
    { key: "AI Solution", label: t("categories.ai_solution") },
    { key: "Mobile App", label: t("categories.mobile_app") },
  ];

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

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
                  <div className="relative w-full h-48 rounded-lg mb-4 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={t(`projects.${project.key}.title`)}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-3">
                    {t(`categories.${project.categoryKey}`)}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {t(`projects.${project.key}.title`)}
                  </h3>
                  <p className="text-muted mb-4 text-sm">
                    {t(`projects.${project.key}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-card text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <span className="text-sm text-muted">{project.year}</span>
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

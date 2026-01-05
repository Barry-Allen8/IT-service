"use client";

import Card from "@/components/ui/Card";
import { Globe, Bot, Brain, Smartphone, Cloud, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { type Locale } from "@/i18n";

const serviceKeys = [
  { key: "websites", icon: Globe, href: "/services/websites", color: "from-blue-500 to-cyan-500", shadow: "hover:shadow-blue-500/25" },
  { key: "chatbots", icon: Bot, href: "/services/chatbots", color: "from-violet-500 to-purple-500", shadow: "hover:shadow-violet-500/25" },
  { key: "ai_solutions", icon: Brain, href: "/services/ai-solutions", color: "from-pink-500 to-rose-500", shadow: "hover:shadow-pink-500/25" },
  { key: "mobile_apps", icon: Smartphone, href: "/services/mobile-apps", color: "from-orange-500 to-amber-500", shadow: "hover:shadow-orange-500/25" },
  { key: "cloud", icon: Cloud, href: "/services/cloud", color: "from-emerald-500 to-teal-500", shadow: "hover:shadow-emerald-500/25" },
  { key: "consulting", icon: Lightbulb, href: "/services/consulting", color: "from-indigo-500 to-blue-500", shadow: "hover:shadow-indigo-500/25" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesSection() {
  const t = useTranslations("services");
  const locale = useLocale() as Locale;

  return (
    <section id="services" className="section bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">{t("title")}</span>
          </motion.div>
          <h2>{t("title")}</h2>
          <p>{t("description")}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {serviceKeys.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.key} variants={itemVariants}>
                <Link href={service.href} locale={locale} className="block h-full">
                  <Card className={`h-full cursor-pointer group bg-white border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl ${service.shadow} transition-all duration-300 hover:-translate-y-2`}>
                    {/* Icon with animated background */}
                    <div className="relative mb-6">
                      <div className={`absolute -inset-2 bg-gradient-to-br ${service.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                      <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 bg-gradient-to-br ${service.color}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {t(`${service.key}.title`)}
                    </h3>

                    {/* Description */}
                    <p className="text-muted mb-5 line-clamp-2">
                      {t(`${service.key}.description`)}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {(t.raw(`${service.key}.features`) as string[]).slice(0, 3).map((feature: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`} />
                          <span className="text-muted group-hover:text-foreground transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                      <span>{t("learn_more")}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

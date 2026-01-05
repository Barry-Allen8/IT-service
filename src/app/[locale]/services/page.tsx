"use client";

import Card from "@/components/ui/Card";
import { Globe, Bot, Brain, Smartphone, Cloud, Lightbulb } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const serviceKeys = [
  { key: "websites", icon: Globe, href: "/services/websites" },
  { key: "chatbots", icon: Bot, href: "/services/chatbots" },
  { key: "ai_solutions", icon: Brain, href: "/services/ai-solutions" },
  { key: "mobile_apps", icon: Smartphone, href: "/services/mobile-apps" },
  { key: "cloud", icon: Cloud, href: "/services/cloud" },
  { key: "consulting", icon: Lightbulb, href: "/services/consulting" },
];

export default function ServicesPage() {
  const t = useTranslations("services");

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceKeys.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={service.href}>
                    <Card className="h-full cursor-pointer group">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                        <Icon className="w-7 h-7 text-primary group-hover:text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{t(`${service.key}.title`)}</h3>
                      <p className="text-muted mb-4">{t(`${service.key}.description`)}</p>
                      <ul className="space-y-2">
                        {(t.raw(`${service.key}.features`) as string[]).map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

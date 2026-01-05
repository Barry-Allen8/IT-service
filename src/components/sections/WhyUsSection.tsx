"use client";

import Card from "@/components/ui/Card";
import { Award, Users, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const featureKeys = [
  { key: "professionalism", icon: Award },
  { key: "speed", icon: Zap },
  { key: "reliability", icon: Shield },
  { key: "individual", icon: Users },
];

export default function WhyUsSection() {
  const t = useTranslations("why_us");

  return (
    <section className="section bg-card">
      <div className="container">
        <div className="section-title">
          <h2>{t("title")}</h2>
          <p>{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureKeys.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center h-full bg-white">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t(`${feature.key}.title`)}
                </h3>
                <p className="text-muted text-sm">
                  {t(`${feature.key}.description`)}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

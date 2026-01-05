"use client";

import { MessageSquare, Palette, Code, TestTube, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const stepKeys = [
  { key: "consultation", icon: MessageSquare },
  { key: "design", icon: Palette },
  { key: "development", icon: Code },
  { key: "testing", icon: TestTube },
  { key: "launch", icon: Rocket },
];

export default function ProcessSection() {
  const t = useTranslations("process");

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="section-title">
          <h2>{t("title")}</h2>
          <p>{t("description")}</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {stepKeys.map((step, index) => (
              <motion.div
                key={step.key}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex-1 lg:text-right">
                  <div
                    className={`inline-block ${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <h3 className="text-2xl font-semibold mb-2">
                      {t(`steps.${step.key}.title`)}
                    </h3>
                    <p className="text-muted max-w-md">
                      {t(`steps.${step.key}.description`)}
                    </p>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/20 rounded-full -z-10 animate-pulse" />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

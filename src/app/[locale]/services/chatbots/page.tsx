"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { Check, Bot } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ChatbotsPage() {
  const t = useTranslations("services");

  const benefits = ["support", "instant", "cost", "integration"];

  return (
    <div className="min-h-screen">
      <section className="section bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Bot className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("chatbots.title")}</h1>
            <p className="text-xl text-muted mb-8">{t("chatbots.hero_description")}</p>
            <Button size="lg" asChild>
              <Link href="/contact">{t("order")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{t("what_you_get")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((key) => (
              <Card key={key}>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{t(`chatbots.benefits.${key}.title`)}</h3>
                    <p className="text-muted text-sm">{t(`chatbots.benefits.${key}.description`)}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

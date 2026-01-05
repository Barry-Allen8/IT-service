"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { Check, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WebsitesPage() {
  const t = useTranslations("services");

  const benefits = [
    { key: "design" },
    { key: "speed" },
    { key: "responsive" },
    { key: "seo" },
    { key: "security" },
    { key: "support" },
  ];

  const packages = [
    { key: "landing", recommended: false },
    { key: "corporate", recommended: true },
    { key: "ecommerce", recommended: false },
  ];

  return (
    <div className="min-h-screen">
      <section className="section bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Globe className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("websites.title")}
            </h1>
            <p className="text-xl text-muted mb-8">
              {t("websites.hero_description")}
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">{t("order")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("what_you_get")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.key}>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      {t(`websites.benefits.${benefit.key}.title`)}
                    </h3>
                    <p className="text-muted text-sm">
                      {t(`websites.benefits.${benefit.key}.description`)}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("packages")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.key}
                className={`relative ${
                  pkg.recommended ? "border-2 border-primary shadow-xl" : ""
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {t("popular")}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">
                  {t(`websites.packages.${pkg.key}.name`)}
                </h3>
                <div className="text-3xl font-bold text-primary mb-6">
                  {t(`websites.packages.${pkg.key}.price`)}
                </div>
                <ul className="space-y-3 mb-6">
                  {(t.raw(`websites.packages.${pkg.key}.features`) as string[]).map(
                    (feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    )
                  )}
                </ul>
                <Button
                  className="w-full"
                  variant={pkg.recommended ? "primary" : "outline"}
                  asChild
                >
                  <Link href="/contact">{t("order")}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

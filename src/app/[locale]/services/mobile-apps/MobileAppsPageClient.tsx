"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Accordion from "@/components/ui/Accordion";
import { Link } from "@/i18n/navigation";
import {
  Check,
  Smartphone,
  X,
  AlertTriangle,
  Lightbulb,
  Trophy,
  Code2,
  Store,
  HeadphonesIcon,
  Palette,
  ChevronRight,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function MobileAppsPageClient() {
  const t = useTranslations("services");

  const benefits = [
    { key: "native" },
    { key: "cross" },
    { key: "ux" },
    { key: "support" },
  ];

  const trustIcons = [Code2, Store, HeadphonesIcon, Palette];

  const packages = [
    { key: "mvp", recommended: false },
    { key: "standard", recommended: true },
    { key: "enterprise", recommended: false },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO SECTION - Conversion Optimized */}
      <section className="section bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb),0.1),transparent_50%)]" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4" />
              <span>{t("mobile_apps.title")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t("mobile_apps.hero_title")}
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-4 max-w-2xl mx-auto">
              {t("mobile_apps.hero_subtitle")}
            </p>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              {t("mobile_apps.hero_description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <Link href="/contact">
                  {t("mobile_apps.hero_cta")}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR SECTION */}
      <section className="section bg-card">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t("mobile_apps.who_its_for.title")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Best For */}
            <Card className="border-2 border-secondary/30 bg-secondary/5">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-secondary">
                <Check className="w-6 h-6" />
                {t("mobile_apps.who_its_for.best_for_title")}
              </h3>
              <ul className="space-y-4">
                {(t.raw("mobile_apps.who_its_for.best_for") as string[]).map(
                  (item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </Card>
            {/* Not For */}
            <Card className="border-2 border-muted/30 bg-muted/5">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-muted">
                <X className="w-6 h-6" />
                {t("mobile_apps.who_its_for.not_for_title")}
              </h3>
              <ul className="space-y-4">
                {(t.raw("mobile_apps.who_its_for.not_for") as string[]).map(
                  (item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted">
                      <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* PROBLEM → SOLUTION → RESULT */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t("mobile_apps.problem_solution.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Problem */}
            <Card className="relative border-l-4 border-l-red-500">
              <div className="absolute -top-4 left-4 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-4 text-red-500">
                  {t("mobile_apps.problem_solution.problem_title")}
                </h3>
                <p className="text-muted">
                  {t("mobile_apps.problem_solution.problem_text")}
                </p>
              </div>
            </Card>
            {/* Solution */}
            <Card className="relative border-l-4 border-l-primary">
              <div className="absolute -top-4 left-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-4 text-primary">
                  {t("mobile_apps.problem_solution.solution_title")}
                </h3>
                <p className="text-muted">
                  {t("mobile_apps.problem_solution.solution_text")}
                </p>
              </div>
            </Card>
            {/* Result */}
            <Card className="relative border-l-4 border-l-secondary">
              <div className="absolute -top-4 left-4 bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-4 text-secondary">
                  {t("mobile_apps.problem_solution.result_title")}
                </h3>
                <p className="text-muted">
                  {t("mobile_apps.problem_solution.result_text")}
                </p>
              </div>
            </Card>
          </div>
          {/* CTA after problem section */}
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/contact">
                {t("mobile_apps.hero_cta")}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="section bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t("mobile_apps.trust_signals.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {(
              t.raw("mobile_apps.trust_signals.items") as {
                title: string;
                description: string;
              }[]
            ).map((item, i) => {
              const Icon = trustIcons[i];
              return (
                <Card key={i} className="text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-muted text-sm">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t("what_you_get")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <Card key={benefit.key}>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      {t(`mobile_apps.benefits.${benefit.key}.title`)}
                    </h3>
                    <p className="text-muted text-sm">
                      {t(`mobile_apps.benefits.${benefit.key}.description`)}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          {/* CTA after benefits */}
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/contact">
                {t("mobile_apps.hero_cta")}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="section bg-card">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t("packages")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <Card
                key={pkg.key}
                className={`relative ${
                  pkg.recommended
                    ? "border-2 border-primary shadow-xl scale-105"
                    : ""
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {t("popular")}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">
                  {t(`mobile_apps.packages.${pkg.key}.name`)}
                </h3>
                <div className="text-3xl font-bold text-primary mb-6">
                  {t(`mobile_apps.packages.${pkg.key}.price`)}
                </div>
                <ul className="space-y-3 mb-6">
                  {(
                    t.raw(`mobile_apps.packages.${pkg.key}.features`) as string[]
                  ).map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
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

      {/* FAQ SECTION */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t("mobile_apps.faq.title")}
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion
              items={(
                t.raw("mobile_apps.faq.items") as {
                  question: string;
                  answer: string;
                }[]
              ).map((item) => ({
                title: item.question,
                content: item.answer,
              }))}
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="section bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("mobile_apps.cta_section.title")}
            </h2>
            <p className="text-xl mb-8 text-white/90">
              {t("mobile_apps.cta_section.description")}
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-lg px-8"
            >
              <Link href="/contact">
                {t("mobile_apps.cta_section.button")}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

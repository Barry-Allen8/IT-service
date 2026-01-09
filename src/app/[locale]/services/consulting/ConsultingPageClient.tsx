"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Accordion from "@/components/ui/Accordion";
import { Link } from "@/i18n/navigation";
import { 
  Lightbulb, 
  Check, 
  X, 
  AlertTriangle, 
  Zap, 
  Trophy,
  Shield,
  Target,
  FileCheck,
  Users,
  ArrowRight
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function ConsultingPageClient() {
  const t = useTranslations("services");

  const benefits = ["audit", "strategy", "optimization", "training"];
  const benefitIcons = [FileCheck, Target, Shield, Users];
  const benefitKeys = benefits.slice(0, Math.min(benefits.length, benefitIcons.length));
  
  const bestFor = t.raw("consulting.who_its_for.best_for") as string[];
  const notFor = t.raw("consulting.who_its_for.not_for") as string[];
  
  const trustItems = t.raw("consulting.trust_signals.items") as Array<{title: string; description: string}>;
  const faqItems = t.raw("consulting.faq.items") as Array<{question: string; answer: string}>;

  const packages = [
    { key: "audit", recommended: false },
    { key: "strategy", recommended: true },
    { key: "advisory", recommended: false },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Optimized for conversion */}
      <section className="section bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Lightbulb className="w-4 h-4" />
              {t("consulting.title")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t("consulting.hero_title")}
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-4 font-medium">
              {t("consulting.hero_subtitle")}
            </p>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              {t("consulting.hero_description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact" className="gap-2">
                  {t("consulting.hero_cta")}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="section bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{t("consulting.who_its_for.title")}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Best For */}
            <Card className="border-2 border-secondary/30 bg-secondary/5">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-secondary">
                <Check className="w-6 h-6" />
                {t("consulting.who_its_for.best_for_title")}
              </h3>
              <ul className="space-y-4">
                {bestFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            
            {/* Not For */}
            <Card className="border-2 border-muted/30 bg-muted/5">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-muted">
                <X className="w-6 h-6" />
                {t("consulting.who_its_for.not_for_title")}
              </h3>
              <ul className="space-y-4">
                {notFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-muted flex-shrink-0 mt-0.5" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem → Solution → Result Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{t("consulting.problem_solution.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Problem */}
            <Card className="relative border-l-4 border-l-red-500">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-red-500">
                  {t("consulting.problem_solution.problem_title")}
                </h3>
                <p className="text-muted">
                  {t("consulting.problem_solution.problem_text")}
                </p>
              </div>
            </Card>
            
            {/* Solution */}
            <Card className="relative border-l-4 border-l-primary">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-primary">
                  {t("consulting.problem_solution.solution_title")}
                </h3>
                <p className="text-muted">
                  {t("consulting.problem_solution.solution_text")}
                </p>
              </div>
            </Card>
            
            {/* Result */}
            <Card className="relative border-l-4 border-l-secondary">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-secondary">
                  {t("consulting.problem_solution.result_title")}
                </h3>
                <p className="text-muted">
                  {t("consulting.problem_solution.result_text")}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-12 bg-primary/5">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-2">{t("consulting.cta_section.title")}</h3>
              <p className="text-muted">{t("consulting.cta_section.description")}</p>
            </div>
            <Button size="lg" asChild className="whitespace-nowrap">
              <Link href="/contact" className="gap-2">
                {t("consulting.hero_cta")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{t("what_you_get")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefitKeys.map((key, index) => {
              const Icon = benefitIcons[index];
              if (!Icon) return null;
              return (
                <Card key={key} className="group hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{t(`consulting.benefits.${key}.title`)}</h3>
                      <p className="text-muted">{t(`consulting.benefits.${key}.description`)}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="section bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{t("consulting.trust_signals.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {trustItems.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
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
                  {t(`consulting.packages.${pkg.key}.name`)}
                </h3>
                <div className="text-3xl font-bold text-primary mb-6">
                  {t(`consulting.packages.${pkg.key}.price`)}
                </div>
                <ul className="space-y-3 mb-6">
                  {(
                    t.raw(`consulting.packages.${pkg.key}.features`) as string[]
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

      {/* FAQ Section */}
      <section className="section bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{t("consulting.faq.title")}</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion 
              items={faqItems.map((item) => ({
                title: item.question,
                content: item.answer
              }))}
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("consulting.cta_section.title")}</h2>
            <p className="text-lg text-muted mb-8">{t("consulting.cta_section.description")}</p>
            <Button size="lg" asChild>
              <Link href="/contact" className="gap-2">
                {t("consulting.cta_section.button")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

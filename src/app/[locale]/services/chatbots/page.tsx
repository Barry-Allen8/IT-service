"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Accordion from "@/components/ui/Accordion";
import { Link } from "@/i18n/navigation";
import {
  Check,
  Bot,
  X,
  AlertTriangle,
  Lightbulb,
  Trophy,
  Settings,
  Database,
  BarChart3,
  Users,
  ChevronRight,
  MessageCircle,
  Send,
  Smartphone,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function ChatbotsPage() {
  const t = useTranslations("services");

  const benefits = ["support", "instant", "cost", "integration"];

  const trustIcons = [Settings, Database, BarChart3, Users];

  const platformIcons = [
    { key: "telegram", icon: Send, color: "bg-blue-500" },
    { key: "whatsapp", icon: MessageCircle, color: "bg-green-500" },
    { key: "viber", icon: Smartphone, color: "bg-purple-500" },
    { key: "website", icon: Bot, color: "bg-primary" },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO SECTION - Conversion Optimized */}
      <section className="section bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb),0.1),transparent_50%)]" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Bot className="w-4 h-4" />
              <span>{t("chatbots.title")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t("chatbots.hero_title")}
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-4 max-w-2xl mx-auto">
              {t("chatbots.hero_subtitle")}
            </p>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              {t("chatbots.hero_description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <Link href="/contact">
                  {t("chatbots.hero_cta")}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORMS SECTION */}
      <section className="section bg-card">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t("chatbots.platforms.title")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {platformIcons.map((platform) => {
              const Icon = platform.icon;
              return (
                <Card key={platform.key} className="text-center py-8">
                  <div
                    className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold">
                    {t(`chatbots.platforms.${platform.key}`)}
                  </h3>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR SECTION */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t("chatbots.who_its_for.title")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Best For */}
            <Card className="border-2 border-secondary/30 bg-secondary/5">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-secondary">
                <Check className="w-6 h-6" />
                {t("chatbots.who_its_for.best_for_title")}
              </h3>
              <ul className="space-y-4">
                {(t.raw("chatbots.who_its_for.best_for") as string[]).map(
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
                {t("chatbots.who_its_for.not_for_title")}
              </h3>
              <ul className="space-y-4">
                {(t.raw("chatbots.who_its_for.not_for") as string[]).map(
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
          {/* CTA after who it's for */}
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/contact">
                {t("chatbots.hero_cta")}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PROBLEM → SOLUTION → RESULT */}
      <section className="section bg-card">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t("chatbots.problem_solution.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Problem */}
            <Card className="relative border-l-4 border-l-red-500">
              <div className="absolute -top-4 left-4 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-4 text-red-500">
                  {t("chatbots.problem_solution.problem_title")}
                </h3>
                <p className="text-muted">
                  {t("chatbots.problem_solution.problem_text")}
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
                  {t("chatbots.problem_solution.solution_title")}
                </h3>
                <p className="text-muted">
                  {t("chatbots.problem_solution.solution_text")}
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
                  {t("chatbots.problem_solution.result_title")}
                </h3>
                <p className="text-muted">
                  {t("chatbots.problem_solution.result_text")}
                </p>
              </div>
            </Card>
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
            {benefits.map((key) => (
              <Card key={key}>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      {t(`chatbots.benefits.${key}.title`)}
                    </h3>
                    <p className="text-muted text-sm">
                      {t(`chatbots.benefits.${key}.description`)}
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
                {t("chatbots.hero_cta")}
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
            {t("chatbots.trust_signals.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {(
              t.raw("chatbots.trust_signals.items") as {
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

      {/* FAQ SECTION */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t("chatbots.faq.title")}
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion
              items={(
                t.raw("chatbots.faq.items") as {
                  question: string;
                  answer: string;
                }[]
              ).map((item) => ({
                title: item.question,
                content: item.answer,
              }))}
            />
          </div>
          {/* CTA after FAQ */}
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/contact">
                {t("chatbots.hero_cta")}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="section bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("chatbots.cta_section.title")}
            </h2>
            <p className="text-xl mb-8 text-white/90">
              {t("chatbots.cta_section.description")}
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-lg px-8"
            >
              <Link href="/contact">
                {t("chatbots.cta_section.button")}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

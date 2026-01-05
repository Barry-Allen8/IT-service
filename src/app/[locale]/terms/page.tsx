"use client";

import Card from "@/components/ui/Card";
import { useTranslations } from "next-intl";

export default function TermsPage() {
  const t = useTranslations("terms");

  return (
    <div className="min-h-screen">
      <section className="section bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="prose prose-lg max-w-none">
              <h2>{t("acceptance")}</h2>
              <p>{t("acceptance_text")}</p>

              <h2>{t("services_section")}</h2>
              <p>{t("services_text")}</p>

              <h2>{t("ip")}</h2>
              <p>{t("ip_text")}</p>

              <h2>{t("liability")}</h2>
              <p>{t("liability_text")}</p>

              <h2>{t("changes")}</h2>
              <p>{t("changes_text")}</p>

              <h2>{t("contact_title")}</h2>
              <p>{t("contact_text")}</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

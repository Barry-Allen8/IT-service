"use client";

import Card from "@/components/ui/Card";
import { useTranslations } from "next-intl";

export default function PrivacyPage() {
  const t = useTranslations("privacy");

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
              <h2>{t("general")}</h2>
              <p>{t("general_text")}</p>

              <h2>{t("collection")}</h2>
              <p>{t("collection_text")}</p>
              <ul>
                {(t.raw("collection_items") as string[]).map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h2>{t("usage")}</h2>
              <p>{t("usage_text")}</p>
              <ul>
                {(t.raw("usage_items") as string[]).map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h2>{t("protection")}</h2>
              <p>{t("protection_text")}</p>

              <h2>{t("contact_title")}</h2>
              <p>{t("contact_text")}</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

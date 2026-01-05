"use client";

import { blogPosts } from "@/data/blog";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { Calendar, User } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function BlogPage() {
  const t = useTranslations("blog");
  const locale = useLocale();

  const getDateLocale = () => {
    switch (locale) {
      case "pl": return "pl-PL";
      case "en": return "en-US";
      case "uk": return "uk-UA";
      default: return "pl-PL";
    }
  };

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
          <div className="max-w-4xl mx-auto space-y-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="cursor-pointer hover:shadow-xl transition-shadow">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-3">
                    {post.category}
                  </div>
                  <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-muted">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString(getDateLocale())}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

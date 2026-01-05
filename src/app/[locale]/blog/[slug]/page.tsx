"use client";

import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const t = useTranslations("blog");
  const locale = useLocale();
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const getDateLocale = () => {
    switch (locale) {
      case "pl": return "pl-PL";
      case "en": return "en-US";
      case "uk": return "uk-UA";
      default: return "pl-PL";
    }
  };

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen">
      <section className="section bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("back")}
            </Link>

            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
              {post.category}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString(getDateLocale(), {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-5 h-5 text-muted" />
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-card rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Card className="mt-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{post.author.name}</h3>
                  <p className="text-muted">{t("author")}</p>
                </div>
              </div>
            </Card>

            <Card className="mt-8 bg-gradient-to-r from-primary to-accent text-white">
              <div className="text-center py-4">
                <h3 className="text-2xl font-bold mb-4">{t("need_help")}</h3>
                <p className="mb-6 text-white/90">{t("get_consultation")}</p>
                <Button className="bg-white text-primary hover:bg-gray-100" asChild>
                  <Link href="/contact">{t("contact_us")}</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="section bg-card">
          <div className="container">
            <h2 className="text-2xl font-bold text-center mb-8">{t("related")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <Card className="h-full cursor-pointer hover:shadow-xl transition-shadow bg-white">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-3">
                      {relatedPost.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-muted text-sm">{relatedPost.excerpt}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

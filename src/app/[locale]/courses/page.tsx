"use client";

import { courses } from "@/data/courses";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Clock, BookOpen, Award } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CoursesPage() {
  const t = useTranslations("courses");
  const tCommon = useTranslations("common");

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="flex flex-col">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                <p className="text-muted mb-4">{course.shortDescription}</p>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.lessons} {t("lessons")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Award className="w-4 h-4" />
                    <span>{course.format}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <div>
                    <span className="text-sm text-muted">{t("from")}</span>
                    <div className="text-2xl font-bold text-primary">
                      {course.price} {tCommon("currency")}
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/courses/${course.slug}`}>{t("details")}</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

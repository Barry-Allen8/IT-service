"use client";

import Button from "@/components/ui/Button";
import { useEffect } from "react";
import { RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-5xl">⚠️</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Щось пішло не так
          </h1>
          <p className="text-xl text-muted mb-8">
            Виникла помилка при завантаженні сторінки. Спробуйте оновити або поверніться на головну.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={reset}>
              <RefreshCw className="w-5 h-5" />
              Спробувати знову
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">
                <Home className="w-5 h-5" />
                На головну
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


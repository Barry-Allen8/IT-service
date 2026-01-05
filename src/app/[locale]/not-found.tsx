import Button from "@/components/ui/Button";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-9xl font-bold gradient-text mb-8">404</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Сторінку не знайдено
          </h1>
          <p className="text-xl text-muted mb-8">
            Вибачте, але сторінка, яку ви шукаєте, не існує або була переміщена.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild>
              <Link href="/">
                <Home className="w-5 h-5" />
                На головну
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">
                <ArrowLeft className="w-5 h-5" />
                Зв'язатися з нами
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


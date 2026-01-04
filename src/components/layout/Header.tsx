"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Розробка сайтів", href: "/services/websites" },
    { name: "Чат-боти", href: "/services/chatbots" },
    { name: "AI-рішення", href: "/services/ai-solutions" },
    { name: "IT-консалтинг", href: "/services/consulting" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold gradient-text">
            IT-service
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                Послуги
                <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 pt-2"
                >
                  <div className="bg-white shadow-xl rounded-lg overflow-hidden w-56">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-3 hover:bg-primary hover:text-white transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/courses" className="hover:text-primary transition-colors">
              Курси
            </Link>
            <Link href="/portfolio" className="hover:text-primary transition-colors">
              Портфоліо
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              Про нас
            </Link>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Блог
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Контакти
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild>
              <Link href="/contact">Замовити консультацію</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-[72px] bg-white z-40 lg:hidden overflow-y-auto">
            <nav className="container py-6 flex flex-col gap-4">
              <div>
                <button
                  className="w-full text-left flex items-center justify-between py-2"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Послуги
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      servicesOpen && "rotate-180"
                    )}
                  />
                </button>
                {servicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block py-2 hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/courses" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Курси
              </Link>
              <Link href="/portfolio" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Портфоліо
              </Link>
              <Link href="/about" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Про нас
              </Link>
              <Link href="/blog" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Блог
              </Link>
              <Link href="/contact" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Контакти
              </Link>
              <Button className="mt-4" asChild>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Замовити консультацію
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

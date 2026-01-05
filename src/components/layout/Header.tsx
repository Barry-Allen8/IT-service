"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { useTranslations, useLocale } from "next-intl";
import { locales, type Locale } from "@/i18n";

const localeLabels: Record<Locale, string> = {
  pl: "PL",
  en: "EN",
  uk: "UA",
};

export default function Header() {
  const t = useTranslations("navigation");
  const tServices = useTranslations("services_menu");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langOpen) {
        const target = e.target as HTMLElement;
        if (!target.closest('[data-lang-switcher]')) {
          setLangOpen(false);
        }
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [langOpen]);

  const services = [
    { name: tServices("websites"), href: "/services/websites" },
    { name: tServices("chatbots"), href: "/services/chatbots" },
    { name: tServices("ai_solutions"), href: "/services/ai-solutions" },
    { name: tServices("consulting"), href: "/services/consulting" },
  ];

  // Get path without locale
  const getPathWithoutLocale = () => {
    const segments = pathname.split("/");
    if (locales.includes(segments[1] as Locale)) {
      return "/" + segments.slice(2).join("/") || "/";
    }
    return pathname;
  };

  const pathWithoutLocale = getPathWithoutLocale();

  // Check if link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathWithoutLocale === "/" || pathWithoutLocale === "";
    }
    return pathWithoutLocale.startsWith(href);
  };

  const isServicesActive = pathWithoutLocale.startsWith("/services");

  const switchLocale = (newLocale: Locale) => {
    const newPath = newLocale === "pl" ? pathWithoutLocale : `/${newLocale}${pathWithoutLocale}`;
    window.location.href = newPath;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-white/90 backdrop-blur-sm py-4"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold gradient-text">
            VektaDev
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 transition-colors font-medium",
                  isServicesActive ? "text-primary" : "hover:text-primary"
                )}
              >
                {t("services")}
                <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white shadow-xl rounded-lg overflow-hidden w-56">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={cn(
                          "block px-4 py-3 transition-colors",
                          isActive(service.href) 
                            ? "bg-primary text-white" 
                            : "hover:bg-primary hover:text-white"
                        )}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link 
              href="/courses" 
              className={cn(
                "transition-colors font-medium",
                isActive("/courses") ? "text-primary" : "hover:text-primary"
              )}
            >
              {t("courses")}
            </Link>
            <Link 
              href="/portfolio" 
              className={cn(
                "transition-colors font-medium",
                isActive("/portfolio") ? "text-primary" : "hover:text-primary"
              )}
            >
              {t("portfolio")}
            </Link>
            <Link 
              href="/about" 
              className={cn(
                "transition-colors font-medium",
                isActive("/about") ? "text-primary" : "hover:text-primary"
              )}
            >
              {t("about")}
            </Link>
            <Link 
              href="/blog" 
              className={cn(
                "transition-colors font-medium",
                isActive("/blog") ? "text-primary" : "hover:text-primary"
              )}
            >
              {t("blog")}
            </Link>
            <Link 
              href="/contact" 
              className={cn(
                "transition-colors font-medium",
                isActive("/contact") ? "text-primary" : "hover:text-primary"
              )}
            >
              {t("contact")}
            </Link>
          </nav>

          {/* Right side: CTA + Language */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild>
              <Link href="/contact">{t("consultation")}</Link>
            </Button>

            {/* Modern Language Switcher - Pill Style */}
            <div className="relative" data-lang-switcher>
              <button 
                onClick={() => setLangOpen(!langOpen)}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2.5 rounded-full border-2 transition-all duration-200",
                  "text-sm font-semibold tracking-wide",
                  langOpen 
                    ? "border-primary bg-primary/5 text-primary" 
                    : "border-gray-200 hover:border-primary/50 text-gray-700 hover:text-primary"
                )}
              >
                {localeLabels[locale]}
                <ChevronDown className={cn(
                  "w-3.5 h-3.5 transition-transform duration-200",
                  langOpen && "rotate-180"
                )} />
              </button>
              
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 z-50">
                  <div className="bg-white shadow-lg rounded-xl border border-gray-100 overflow-hidden min-w-[100px]">
                    {locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          switchLocale(loc);
                          setLangOpen(false);
                        }}
                        className={cn(
                          "w-full px-4 py-2.5 text-sm font-medium transition-all duration-150 text-left",
                          locale === loc 
                            ? "bg-primary text-white" 
                            : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                        )}
                      >
                        {localeLabels[loc]}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu className={cn(
                "w-6 h-6 absolute inset-0 transition-all duration-300",
                isMobileMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
              )} />
              <X className={cn(
                "w-6 h-6 absolute inset-0 transition-all duration-300",
                isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Menu - Accordion Style */}
        <div 
          ref={mobileMenuRef}
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500 ease-out",
            isMobileMenuOpen ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          )}
        >
          <nav className="py-4 border-t border-gray-100">
            {/* Language Switcher Mobile - Pill Style */}
            <div className="flex gap-2 pb-4 mb-4 border-b border-gray-100">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                    locale === loc 
                      ? "bg-primary text-white shadow-md" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  )}
                >
                  {localeLabels[loc]}
                </button>
              ))}
            </div>

            {/* Services Accordion */}
            <div className="border-b border-gray-100">
              <button
                className={cn(
                  "w-full text-left flex items-center justify-between py-3 font-medium transition-colors",
                  isServicesActive ? "text-primary" : "hover:text-primary"
                )}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                {t("services")}
                <ChevronDown
                  className={cn(
                    "w-5 h-5 transition-transform duration-300",
                    servicesOpen && "rotate-180"
                  )}
                />
              </button>
              <div className={cn(
                "overflow-hidden transition-all duration-300 ease-out",
                servicesOpen ? "max-h-[300px] opacity-100 pb-2" : "max-h-0 opacity-0"
              )}>
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={cn(
                        "block py-2.5 px-3 rounded-lg transition-all duration-200",
                        isActive(service.href) 
                          ? "text-primary bg-primary/10 font-medium" 
                          : "text-gray-600 hover:text-primary hover:bg-gray-50"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Links */}
            <Link 
              href="/courses" 
              className={cn(
                "block py-3 font-medium border-b border-gray-100 transition-colors",
                isActive("/courses") ? "text-primary" : "hover:text-primary"
              )} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("courses")}
            </Link>
            <Link 
              href="/portfolio" 
              className={cn(
                "block py-3 font-medium border-b border-gray-100 transition-colors",
                isActive("/portfolio") ? "text-primary" : "hover:text-primary"
              )} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("portfolio")}
            </Link>
            <Link 
              href="/about" 
              className={cn(
                "block py-3 font-medium border-b border-gray-100 transition-colors",
                isActive("/about") ? "text-primary" : "hover:text-primary"
              )} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("about")}
            </Link>
            <Link 
              href="/blog" 
              className={cn(
                "block py-3 font-medium border-b border-gray-100 transition-colors",
                isActive("/blog") ? "text-primary" : "hover:text-primary"
              )} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("blog")}
            </Link>
            <Link 
              href="/contact" 
              className={cn(
                "block py-3 font-medium border-b border-gray-100 transition-colors",
                isActive("/contact") ? "text-primary" : "hover:text-primary"
              )} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("contact")}
            </Link>
            
            <Button className="w-full mt-4" asChild>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                {t("consultation")}
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

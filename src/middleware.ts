import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "./i18n";
import { localePrefix } from "./i18n/navigation";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
  localeDetection: false,
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle redirects for removed locales (French and German → English)
  const removedLocalesPattern = /^\/(fr|de)(\/.*)?$/;
  const removedLocalesMatch = pathname.match(removedLocalesPattern);
  
  if (removedLocalesMatch) {
    const restOfPath = removedLocalesMatch[2] || "";
    const redirectUrl = new URL(`/en${restOfPath}`, request.url);
    return NextResponse.redirect(redirectUrl, 301);
  }

  // Handle redirects for removed /courses routes
  // Check for courses path in any locale
  const coursesPattern = /^\/(pl|en)?\/courses(\/.*)?$/;
  const coursesMatch = pathname.match(coursesPattern);
  
  if (coursesMatch) {
    const locale = coursesMatch[1] || defaultLocale;
    const redirectUrl = new URL(`/${locale}/services`, request.url);
    return NextResponse.redirect(redirectUrl, 301);
  }

  // Also handle /courses without locale prefix
  if (pathname === "/courses" || pathname.startsWith("/courses/")) {
    const redirectUrl = new URL(`/${defaultLocale}/services`, request.url);
    return NextResponse.redirect(redirectUrl, 301);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|icon|apple-icon|favicon\\.ico|icon-192\\.png|icon-512\\.png|.*\\..*).*)"],
};

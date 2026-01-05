import { createNavigation } from "next-intl/navigation";
import { locales, defaultLocale } from "@/i18n";
import NextLink from "next/link";
import { useLocale } from "next-intl";
import { ComponentProps, forwardRef } from "react";

export const localePrefix = "always" as const;

const { redirect, usePathname, useRouter } = createNavigation({
  locales,
  defaultLocale,
  localePrefix,
});

export { redirect, usePathname, useRouter };

// Custom Link component that explicitly prepends locale to href
type LinkProps = ComponentProps<typeof NextLink> & {
  locale?: string;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  function LocaleLink({ href, locale: localeProp, ...props }, ref) {
    const currentLocale = useLocale();
    const locale = localeProp || currentLocale;
    
    // Convert href to string
    const hrefString = typeof href === "string" ? href : href.pathname || "/";
    
    // If href already starts with a locale, don't add another
    const startsWithLocale = locales.some(loc => 
      hrefString.startsWith(`/${loc}/`) || hrefString === `/${loc}`
    );
    
    // Build the localized href
    let localizedHref: string;
    if (hrefString.startsWith("#") || hrefString.startsWith("http") || startsWithLocale) {
      localizedHref = hrefString;
    } else {
      localizedHref = `/${locale}${hrefString.startsWith("/") ? hrefString : `/${hrefString}`}`;
    }
    
    return <NextLink ref={ref} href={localizedHref} {...props} />;
  }
);


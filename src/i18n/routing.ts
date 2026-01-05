import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['pl', 'en'],
  defaultLocale: 'pl',
  localePrefix: 'as-needed' // pl routes won't have prefix
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);

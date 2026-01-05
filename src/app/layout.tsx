import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "IT-service - Profesjonalne rozwiązania IT dla Twojego biznesu",
    template: "%s | IT-service",
  },
  description: "Tworzenie stron, chatbotów, rozwiązań AI i konsulting IT. Pomagamy firmom rozwijać się dzięki nowoczesnym technologiom.",
  keywords: ["tworzenie stron", "chatboty", "rozwiązania AI", "konsulting IT", "web development", "Polska"],
  authors: [{ name: "IT-service" }],
  creator: "IT-service",
  publisher: "IT-service",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://it-service.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IT-service - Profesjonalne rozwiązania IT",
    description: "Tworzenie stron, chatbotów, rozwiązań AI i konsulting IT",
    type: "website",
    locale: "pl_PL",
    url: "https://it-service.com",
    siteName: "IT-service",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT-service - Profesjonalne rozwiązania IT",
    description: "Tworzenie stron, chatbotów, rozwiązań AI i konsulting IT",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

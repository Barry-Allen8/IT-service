import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Портфоліо - IT-service",
  description: "Наші реалізовані проєкти та кейси",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Портфоліо - VektaDev",
  description: "Наші реалізовані проєкти та кейси",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


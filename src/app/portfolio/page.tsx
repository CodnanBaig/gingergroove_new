import type { Metadata } from "next";
import { PortfolioLandingSection } from "@/components/sections/PortfolioLandingSection";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse Ginger Groove Studios' work across artist collaborations and commercial campaigns. Discover curated sessions, productions, and brand work.",
  keywords: [
    "music production portfolio",
    "artist collaborations",
    "commercial music",
    "audio production work",
    "music studio projects",
  ],
  openGraph: {
    title: "Portfolio · Ginger Groove Studios",
    description:
      "Browse Ginger Groove Studios' work across artist collaborations and commercial campaigns.",
    url: "https://gingergroovestudios.com/portfolio",
  },
  alternates: {
    canonical: "https://gingergroovestudios.com/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioLandingSection />;
}


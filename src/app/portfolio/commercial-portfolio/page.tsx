import type { Metadata } from "next";
import { CommercialPortfolioSection } from "@/components/sections/CommercialPortfolioSection";

export const metadata: Metadata = {
  title: "Commercial Portfolio",
  description:
    "Discover Ginger Groove Studios' commercial audio work for brands and agencies. Ad campaigns, jingles, sonic identities, and broadcast-ready mixes.",
  keywords: [
    "commercial music",
    "ad campaigns",
    "jingles",
    "brand audio",
    "commercial audio production",
  ],
  openGraph: {
    title: "Commercial Portfolio · Ginger Groove Studios",
    description:
      "Discover Ginger Groove Studios' commercial audio work for brands and agencies.",
    url: "https://gingergroovestudios.com/portfolio/commercial-portfolio",
  },
  alternates: {
    canonical: "https://gingergroovestudios.com/portfolio/commercial-portfolio",
  },
};

export default function CommercialPortfolioPage() {
  return <CommercialPortfolioSection />;
}


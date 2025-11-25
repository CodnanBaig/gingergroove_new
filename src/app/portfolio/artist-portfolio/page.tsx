import type { Metadata } from "next";
import { ArtistPortfolioSection } from "@/components/sections/ArtistPortfolioSection";

export const metadata: Metadata = {
  title: "Artist Portfolio",
  description:
    "Listen to Ginger Groove Studios' artist collaborations across genres. Live sessions, singles, and original projects produced, mixed, and mastered in-house.",
  keywords: [
    "artist portfolio",
    "music collaborations",
    "artist productions",
    "music studio work",
    "artist recordings",
  ],
  openGraph: {
    title: "Artist Portfolio · Ginger Groove Studios",
    description:
      "Listen to Ginger Groove Studios' artist collaborations across genres.",
    url: "https://gingergroovestudios.com/portfolio/artist-portfolio",
  },
  alternates: {
    canonical: "https://gingergroovestudios.com/portfolio/artist-portfolio",
  },
};

export default function ArtistPortfolioPage() {
  return <ArtistPortfolioSection />;
}


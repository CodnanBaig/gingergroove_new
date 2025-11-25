export type PortfolioCategory = {
  title: string;
  description: string;
  image: string;
  href: string;
  stats?: string[];
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    title: "Artist Portfolio",
    description:
      "Explore our collaborations with independent artists, singers, rappers, and bands. Full production, mixing, mastering, and creative direction all under one roof.",
    image: "/assets/Gallery/DSC01016-topaz-rawdenoise-denoise-lighting-color.webp",
    href: "/portfolio/artist-portfolio",
    stats: ["Live sessions", "Spotify releases", "Original compositions"],
  },
  {
    title: "Commercial Portfolio",
    description:
      "High-impact commercial work for brands and agencies. Audio branding, jingles, voiceovers, and broadcast-ready mixes that amplify your campaign.",
    image: "/assets/Gallery/DSC00138-topaz-rawdenoise-lighting-color.webp",
    href: "/portfolio/commercial-portfolio",
    stats: ["Brand campaigns", "TV/OTT placements", "Ad jingles"],
  },
];



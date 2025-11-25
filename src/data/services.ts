export type Service = {
  title: string;
  image: string;
  description?: string;
  features?: string[];
};

export const mainServices: Service[] = [
  {
    title: "Sound Recording",
    image: "/assets/Gallery/DSC00636-topaz-rawdenoise-lighting-color.webp",
    description:
      "Professional recording services in our state-of-the-art studio. Capture every detail of your performance with pristine audio quality.",
    features: [
      "High-end recording equipment",
      "Acoustically treated rooms",
      "Professional engineer support",
      "Multiple recording formats",
    ],
  },
  {
    title: "Music Production",
    image: "/assets/Gallery/DSC00164.webp",
    description:
      "End-to-end music production from concept to completion. We help bring your musical vision to life with creative production and arrangement.",
    features: [
      "Full song production",
      "Beat making and arrangement",
      "Instrumental composition",
      "Creative direction",
    ],
  },
  {
    title: "Mixing & Mastering",
    image: "/assets/Gallery/IMG_8802.jpg",
    description:
      "Professional mixing and mastering services to polish your tracks. Achieve radio-ready sound quality that stands out.",
    features: [
      "Professional mixing",
      "Mastering for all platforms",
      "Reference track analysis",
      "Multiple revision rounds",
    ],
  },
];

export const otherServices: Service[] = [
  {
    title: "Session Musicians",
    image:
      "https://images.pexels.com/photos/5650902/pexels-photo-5650902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Access our network of talented session musicians. Add professional instrumentation to your tracks with skilled performers.",
    features: [
      "Guitar, bass, drums, keys",
      "Strings and brass sections",
      "Professional musicians",
      "Remote recording options",
    ],
  },
  {
    title: "Voiceovers",
    image:
      "https://images.pexels.com/photos/7521306/pexels-photo-7521306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Professional voiceover services for commercials, documentaries, and multimedia projects. Clear, engaging narration delivered on time.",
    features: [
      "Commercial voiceovers",
      "Narration services",
      "Multiple language options",
      "Quick turnaround",
    ],
  },
  {
    title: "Video Production",
    image:
      "https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Complete video production services including music videos, promotional content, and commercial videos. Full production from concept to delivery.",
    features: [
      "Music video production",
      "Commercial videos",
      "Promotional content",
      "Post-production editing",
    ],
  },
];


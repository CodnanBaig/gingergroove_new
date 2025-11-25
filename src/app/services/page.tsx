import type { Metadata } from "next";
import { ServicesPageSection } from "@/components/sections/ServicesPageSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional music production services including sound recording, music production, mixing & mastering, session musicians, voiceovers, and video production.",
  keywords: [
    "music production services",
    "sound recording",
    "mixing mastering",
    "session musicians",
    "voiceovers",
    "video production",
    "audio engineering",
  ],
  openGraph: {
    title: "Services · Ginger Groove Studios",
    description:
      "Professional music production services including sound recording, music production, mixing & mastering, session musicians, voiceovers, and video production.",
    url: "https://gingergroovestudios.com/services",
  },
  alternates: {
    canonical: "https://gingergroovestudios.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageSection />;
}


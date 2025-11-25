import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach out to Ginger Groove Studios for recording sessions, music production, mixing & mastering, and collaborations. Let's bring your sound to life.",
  keywords: [
    "contact music studio",
    "recording studio booking",
    "music production inquiry",
    "audio engineering contact",
  ],
  openGraph: {
    title: "Contact Us · Ginger Groove Studios",
    description:
      "Reach out to Ginger Groove Studios for recording sessions, music production, mixing & mastering, and collaborations.",
    url: "https://gingergroovestudios.com/contact-us",
  },
  alternates: {
    canonical: "https://gingergroovestudios.com/contact-us",
  },
};

export default function ContactPage() {
  return <ContactSection />;
}


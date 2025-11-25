import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Ginger Groove Studios - Professional music production studio offering sound recording, mixing, mastering, and music production services. Where your sound takes center stage.",
  alternates: {
    canonical: "https://gingergroovestudios.com",
  },
};

export default function Home() {
  return (
    <div className="relative flex flex-col gap-6 bg-[#141414]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ClientsSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}

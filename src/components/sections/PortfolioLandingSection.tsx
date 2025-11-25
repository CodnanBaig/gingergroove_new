"use client";

import { useRef } from "react";

import { portfolioCategories } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function PortfolioLandingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGsapReveal(sectionRef);

  return (
    <section ref={sectionRef} className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mb-16 space-y-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Work"
          description="From indie artists to household brands, Ginger Groove Studios crafts immersive sonic experiences. Choose your path and dive deeper into our work."
          align="center"
        />
        <p className="text-center text-sm text-[#83caaf]">
          Curated sessions, commercial campaigns, and collaborations. Each project is tailored, mixed, and mastered to perfection.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {portfolioCategories.map((category) => (
          <PortfolioCard key={category.title} {...category} />
        ))}
      </div>
    </section>
  );
}



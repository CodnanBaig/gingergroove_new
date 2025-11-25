"use client";

import { useRef } from "react";

import { portfolioContent } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ActionLink } from "@/components/ui/ActionLink";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGsapReveal(sectionRef);

  return (
    <section ref={sectionRef} className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <SectionHeading
          eyebrow={portfolioContent.eyebrow}
          title={portfolioContent.title}
          description={portfolioContent.description}
        />
        <ActionLink href="/portfolio" label="Full Portfolio" variant="ghost" />
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-4" data-animate>
        {portfolioContent.videos.map((video) => (
          <div
            key={video}
            className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            data-animate
          >
            <div className="aspect-video w-full">
              <iframe
                src={video}
                title="Featured Project"
                loading="lazy"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


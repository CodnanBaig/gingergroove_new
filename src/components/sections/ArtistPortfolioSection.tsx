"use client";

import { useRef } from "react";

import { artistPortfolioContent } from "@/data/portfolioDetails";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotifyEmbed } from "@/components/ui/SpotifyEmbed";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function ArtistPortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGsapReveal(sectionRef);

  return (
    <section ref={sectionRef} className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="space-y-10">
        <SectionHeading
          eyebrow={artistPortfolioContent.eyebrow}
          title={artistPortfolioContent.title}
          description={artistPortfolioContent.description}
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-8">
            <div className="grid gap-3 sm:grid-cols-3">
              {artistPortfolioContent.stats.map((stat) => (
                <div
                  key={stat}
                  className="rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-center text-xs uppercase tracking-[0.3em] text-[#83caaf]"
                  data-animate
                >
                  {stat}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {artistPortfolioContent.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="glass-panel rounded-3xl border border-white/10 p-6 text-sm text-[#f5f5dc]/80"
                  data-animate
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <SpotifyEmbed src={artistPortfolioContent.playlistUrl} title="Artist Portfolio Playlist" />
        </div>
      </div>
    </section>
  );
}



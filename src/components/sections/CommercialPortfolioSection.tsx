"use client";

import { useRef } from "react";

import { commercialPortfolioContent } from "@/data/portfolioDetails";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoCard } from "@/components/ui/VideoCard";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";
import { useYouTubePlaylist } from "@/hooks/useYouTubePlaylist";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function CommercialPortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGsapReveal(sectionRef);

  const playlistState = useYouTubePlaylist(commercialPortfolioContent.playlistId, 9);

  return (
    <section ref={sectionRef} className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="space-y-10">
        <SectionHeading
          eyebrow={commercialPortfolioContent.eyebrow}
          title={commercialPortfolioContent.title}
          description={commercialPortfolioContent.description}
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {commercialPortfolioContent.stats.map((stat) => (
            <div
              key={stat}
              className="rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-center text-xs uppercase tracking-[0.3em] text-[#83caaf]"
              data-animate
            >
              {stat}
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {commercialPortfolioContent.highlights.map((highlight) => (
            <div
              key={highlight}
              className="glass-panel rounded-3xl border border-white/10 p-6 text-sm text-[#f5f5dc]/80"
              data-animate
            >
              {highlight}
            </div>
          ))}
        </div>

        <div className="mt-12">
          {playlistState.status === "error" ? (
            <div className="rounded-3xl border border-[#ec2021]/30 bg-[#ec2021]/10 p-6 text-sm text-[#ec2021]" data-animate>
              {playlistState.error}
            </div>
          ) : playlistState.status === "loading" ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="space-y-4 rounded-[28px] border border-white/5 bg-white/5 p-4" data-animate>
                  <LoadingSkeleton className="aspect-video w-full rounded-2xl" />
                  <LoadingSkeleton className="h-4 w-3/4" />
                  <LoadingSkeleton className="h-3 w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {playlistState.videos.map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  channelTitle={video.channelTitle}
                  videoId={video.videoId}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}



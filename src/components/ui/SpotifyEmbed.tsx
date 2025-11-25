"use client";

import { useEffect, useRef, useState } from "react";

import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";

type SpotifyEmbedProps = {
  src: string;
  title?: string;
};

export function SpotifyEmbed({ src, title = "Spotify Playlist" }: SpotifyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="glass-panel relative overflow-hidden rounded-[32px] border border-white/10 p-4"
      data-animate
    >
      {!isLoaded && <LoadingSkeleton className="absolute inset-4" />}
      {isVisible ? (
        <iframe
          src={src}
          width="100%"
          height="520"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title={title}
          className="rounded-[24px]"
          style={{ border: "none" }}
          onLoad={() => setIsLoaded(true)}
        />
      ) : (
        <div className="h-[520px]" />
      )}
    </div>
  );
}



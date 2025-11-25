"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import clsx from "clsx";

import { heroContent, servicesContent } from "@/data/home";
import { ActionLink } from "@/components/ui/ActionLink";
import { ReactBitsBadge } from "@/components/visuals/ReactBitsBadge";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { ensureGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const mosaicRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGsapReveal(heroRef);

  useEffect(() => {
    if (!mosaicRef.current || prefersReducedMotion) {
      return;
    }

    const { gsap } = ensureGsap();

    const ctx = gsap.context(() => {
      gsap.to("[data-hero-image]", {
        yPercent: -8,
        scale: 1,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.25,
      });
    }, mosaicRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={heroRef}
      className="relative isolate min-h-screen overflow-hidden px-6 pb-16 pt-32 sm:px-10 lg:px-16 lg:pb-24"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_1fr]">
        <div className="relative z-10 flex flex-col gap-6">
          <div data-animate>
            <ReactBitsBadge label="Ginger Groove Studios" />
          </div>
          <h1
            className="font-[family-name:var(--font-bebas)] text-5xl leading-tight text-[#f5f5dc] sm:text-6xl lg:text-7xl"
            data-animate
          >
            {heroContent.heading}
          </h1>
          <p className="text-xl text-[#f5f5dc]/80" data-animate>
            {heroContent.tagline}
          </p>
          <div className="space-y-4" data-animate>
            {heroContent.highlights.map((highlight) => (
              <p key={highlight} className="text-base text-[#83caaf] text-balance">
                {highlight}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row" data-animate>
            {heroContent.actions.map((action) => (
              <ActionLink
                key={action.href}
                href={action.href}
                label={action.label}
                variant={action.label === "All Services" ? "primary" : "ghost"}
              />
            ))}
          </div>
        </div>
        <div className="relative" ref={mosaicRef}>
          <div className="grid gap-4 sm:grid-cols-2" data-animate>
            {heroContent.slides.map((slide, index) => (
              <div
                key={slide.src}
                className={clsx(
                  "relative h-52 overflow-hidden rounded-3xl border border-white/5 bg-white/5 shadow-[0_20px_70px_rgba(0,0,0,0.45)] sm:h-64",
                  index % 2 === 0 ? "mt-6" : "-mb-6"
                )}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover"
                  data-hero-image
                />
              </div>
            ))}
          </div>
          <div
            className="orb -left-16 top-10 hidden h-48 w-48 rounded-full blur-2xl lg:block"
            aria-hidden="true"
          />
          <div
            className="orb -right-20 bottom-0 hidden h-40 w-40 rounded-full lg:block"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="marquee mt-16 rounded-full border border-white/5 bg-white/5 p-4" data-animate>
        <div className="marquee-track text-sm uppercase tracking-[0.4em] text-[#f5f5dc]/70">
          {[...servicesContent.cards, ...servicesContent.cards].map((card, index) => (
            <span key={`${card.title}-${index}`}>{card.title}</span>
          ))}
        </div>
      </div>

      <div className="grid-backdrop" aria-hidden="true" />
    </section>
  );
}


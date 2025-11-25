"use client";

import { useEffect, useRef } from "react";

import { aboutContent } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { ensureGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const equalizerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGsapReveal(sectionRef);

  useEffect(() => {
    if (!equalizerRef.current || prefersReducedMotion) {
      return;
    }

    const { gsap } = ensureGsap();
    const bars = equalizerRef.current.querySelectorAll("[data-meter]");

    const animation = gsap.to(bars, {
      height: () => `${Math.random() * 60 + 20}%`,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.15,
        repeat: -1,
        yoyo: true,
      },
    });

    return () => {
      animation.kill();
    };
  }, [prefersReducedMotion]);

  return (
    <section ref={sectionRef} className="relative px-6 py-24 sm:px-10 lg:px-24">
      <div className="grid gap-12 rounded-[32px] border border-white/5 bg-white/5 p-8 backdrop-blur-xl lg:grid-cols-[1.1fr_minmax(0,0.8fr)]">
        <SectionHeading
          eyebrow={aboutContent.eyebrow}
          title="About Us"
          description={aboutContent.paragraphs[0]}
          className="space-y-6"
        />
        <div ref={equalizerRef} className="flex h-48 items-end gap-3" data-animate>
          {Array.from({ length: 14 }).map((_, index) => (
            <span
              key={index}
              data-meter
              className="flex-1 rounded-full bg-gradient-to-b from-[#ec2021] via-[#ec2021] to-[#83caaf]"
              style={{ height: `${30 + index * 2}%` }}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 text-base text-[#83caaf] md:grid-cols-2">
        {aboutContent.paragraphs.slice(1).map((paragraph) => (
          <p
            key={paragraph}
            className="rounded-3xl border border-white/5 bg-white/5 p-6"
            data-animate
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}


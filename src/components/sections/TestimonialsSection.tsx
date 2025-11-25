"use client";

import { useEffect, useRef } from "react";

import { testimonialsContent } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { ensureGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGsapReveal(sectionRef);

  useEffect(() => {
    if (!sliderRef.current || prefersReducedMotion) {
      return;
    }

    const { gsap } = ensureGsap();

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-testimonial]").forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? -12 : 12,
          duration: 6 + index * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, sliderRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section ref={sectionRef} className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="rounded-[32px] border border-white/5 bg-[#141414]/80 p-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Testimonials"
          description=" "
          align="center"
        />

        <div
          ref={sliderRef}
          className="no-scrollbar mt-10 flex gap-6 overflow-x-auto scroll-smooth"
        >
          {testimonialsContent.map((testimonial) => (
            <div key={testimonial.name} data-animate data-testimonial className="snap-start">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


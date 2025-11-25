"use client";

import Image from "next/image";
import { useRef } from "react";

import { servicesContent } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ActionLink } from "@/components/ui/ActionLink";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGsapReveal(sectionRef);

  return (
    <section ref={sectionRef} className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="rounded-[32px] border border-white/5 bg-gradient-to-br from-[#141414] to-[#1b1b1b] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={servicesContent.eyebrow}
            title={servicesContent.title}
            description={servicesContent.description}
          />
          <ActionLink href="/services" label="All Services" variant="ghost" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesContent.cards.map((card) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5"
              data-animate
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent" />
              </div>
              <div className="relative space-y-3 p-6">
                <h3 className="font-[family-name:var(--font-bebas)] text-3xl text-[#f5f5dc]">
                  {card.title}
                </h3>
                <p className="text-sm text-[#83caaf] text-balance">{card.blurb}</p>
              </div>
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="grid-backdrop" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


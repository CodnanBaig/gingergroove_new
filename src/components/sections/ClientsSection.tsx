"use client";

import Image from "next/image";
import { useRef } from "react";

import { clientsContent } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGsapReveal(sectionRef);

  return (
    <section ref={sectionRef} className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="rounded-[32px] border border-white/5 bg-white/5 p-8">
        <SectionHeading
          eyebrow={clientsContent.eyebrow}
          title={clientsContent.eyebrow}
          description=" "
          align="center"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clientsContent.logos.map((logo) => (
            <div
              key={logo}
              className="group relative flex h-32 items-center justify-center rounded-2xl border border-white/5 bg-gradient-to-br from-white/10 to-transparent p-6"
              data-animate
            >
              <Image
                src={logo}
                alt="Client logo"
                fill
                sizes="(max-width: 768px) 45vw, (max-width: 1024px) 22vw, 15vw"
                className="object-contain opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


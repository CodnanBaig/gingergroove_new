"use client";

import { useRef } from "react";

import { mainServices, otherServices } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function ServicesPageSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const otherSectionRef = useRef<HTMLDivElement>(null);

  useGsapReveal(sectionRef);
  useGsapReveal(otherSectionRef);

  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16">
      {/* Main Services */}
      <div ref={sectionRef} className="mb-24">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Studio Services"
            title="Our Core Services"
            description="At Ginger Groove Studios, we provide comprehensive music production services to bring your creative vision to life. From recording to mastering, we've got you covered."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mainServices.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              image={service.image}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>

      {/* Other Services */}
      <div ref={otherSectionRef}>
        <div className="mb-12">
          <SectionHeading
            eyebrow="Additional Services"
            title="Other Services"
            description="Beyond our core services, we offer additional production and creative services to support your projects."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              image={service.image}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


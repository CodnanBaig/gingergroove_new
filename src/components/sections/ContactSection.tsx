"use client";

import { useRef } from "react";

import { contactDetails, contactHighlights } from "@/data/contact";
import { ContactInfoCard } from "@/components/ui/ContactInfoCard";
import { ContactForm } from "@/components/ui/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGsapReveal(sectionRef);

  return (
    <section ref={sectionRef} className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="grid gap-12 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Start Your Next Project"
            description="Fill out the form or reach us directly. We'll respond within 24 hours to plan your next session, project, or collaboration."
          />

          <div className="space-y-4">
            {contactHighlights.map((highlight) => (
              <p key={highlight} className="text-sm text-[#83caaf]" data-animate>
                {highlight}
              </p>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {contactDetails.map((detail, index) => (
              <ContactInfoCard
                key={detail.title}
                title={detail.title}
                value={detail.value}
                description={detail.description}
                href={detail.href}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}



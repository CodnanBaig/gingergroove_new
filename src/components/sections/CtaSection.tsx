"use client";

import { ctaContent } from "@/data/home";
import { ActionLink } from "@/components/ui/ActionLink";

export function CtaSection() {
  return (
    <section className="px-6 pb-24 sm:px-10 lg:px-16">
      <div
        className="glass-panel flex flex-col gap-6 rounded-[32px] border border-white/5 p-10 text-center"
        data-animate
      >
        <p className="text-xl text-[#f5f5dc]/90 text-balance">{ctaContent.heading}</p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ActionLink href={ctaContent.primaryAction.href} label={ctaContent.primaryAction.label} />
          <ActionLink
            href={ctaContent.secondaryAction.href}
            label={ctaContent.secondaryAction.label}
            variant="ghost"
          />
        </div>
      </div>
    </section>
  );
}


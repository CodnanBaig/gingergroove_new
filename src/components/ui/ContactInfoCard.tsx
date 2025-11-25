"use client";

import clsx from "clsx";
import { useRef, useEffect } from "react";

import { ensureGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type ContactInfoCardProps = {
  title: string;
  value: string;
  description?: string;
  href?: string;
  icon?: React.ReactNode;
  delay?: number;
};

export function ContactInfoCard({
  title,
  value,
  description,
  href,
  icon,
  delay = 0,
}: ContactInfoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!cardRef.current || prefersReducedMotion) {
      return;
    }

    const { gsap } = ensureGsap();
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
        once: true,
      },
    });
  }, [delay, prefersReducedMotion]);

  const content = (
    <div
      className={clsx(
        "glass-panel flex h-full flex-col gap-3 rounded-3xl border border-white/10 p-6 transition-colors duration-300",
        "hover:border-[#ec2021]/40"
      )}
      ref={cardRef}
    >
      {icon ? <div className="text-[#ec2021]">{icon}</div> : null}
      <p className="text-xs uppercase tracking-[0.4em] text-[#83caaf]">{title}</p>
      <p className="font-[family-name:var(--font-bebas)] text-3xl text-[#f5f5dc]">{value}</p>
      {description ? <p className="text-sm text-[#f5f5dc]/70">{description}</p> : null}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block" target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}



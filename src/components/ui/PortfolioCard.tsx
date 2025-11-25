"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import clsx from "clsx";

import { ensureGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type PortfolioCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
  stats?: string[];
};

export function PortfolioCard({ title, description, image, href, stats }: PortfolioCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!cardRef.current || prefersReducedMotion) {
      return;
    }

    const { gsap } = ensureGsap();
    const card = cardRef.current;

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.01,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [prefersReducedMotion]);

  return (
    <Link
      ref={cardRef}
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/5"
      data-animate
    >
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority={false}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent" />
      </div>

      <div className="relative flex flex-1 flex-col justify-between gap-4 p-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-[#83caaf]">Portfolio</p>
          <h3 className="font-[family-name:var(--font-bebas)] text-4xl text-[#f5f5dc]">{title}</h3>
          <p className="text-sm text-[#f5f5dc]/70 text-balance">{description}</p>
        </div>

        {stats && stats.length > 0 ? (
          <div className="grid gap-2 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat}
                className={clsx(
                  "rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-center text-xs uppercase tracking-[0.3em] text-[#f5f5dc]/70",
                  "transition-colors duration-300 group-hover:border-[#83caaf]/40 group-hover:text-[#83caaf]"
                )}
              >
                {stat}
              </div>
            ))}
          </div>
        ) : null}

        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-[#f5f5dc]/80">
          View Work
          <span className="h-px w-16 bg-gradient-to-r from-[#ec2021] to-[#83caaf]" />
        </div>
      </div>

      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="grid-backdrop" aria-hidden="true" />
      </div>
    </Link>
  );
}



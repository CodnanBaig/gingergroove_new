"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";

import { ensureGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type ReactBitsBadgeProps = {
  label: string;
  className?: string;
};

export function ReactBitsBadge({ label, className }: ReactBitsBadgeProps) {
  const badgeRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!badgeRef.current || prefersReducedMotion) {
      return;
    }

    const { gsap } = ensureGsap();

    const animation = gsap.to(badgeRef.current, {
      y: -6,
      opacity: 1,
      duration: 2.6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      animation.kill();
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={badgeRef}
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border border-[#f5f5dc]/30 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-[#83caaf] opacity-60",
        className
      )}
    >
      <span className="h-2 w-2 rounded-full bg-[#ec2021]" aria-hidden="true" />
      {label}
    </div>
  );
}


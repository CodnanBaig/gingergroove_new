"use client";

import { type RefObject, useEffect } from "react";

import { ensureGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type RevealOptions = {
  selector?: string;
  offset?: number;
  stagger?: number;
};

export function useGsapReveal<T extends HTMLElement = HTMLElement>(
  scopeRef: RefObject<T | null>,
  options: RevealOptions = {}
) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!scopeRef.current || prefersReducedMotion) {
      return;
    }

    const { gsap } = ensureGsap();
    const selector = options.selector ?? "[data-animate]";
    const offset = options.offset ?? 50;
    const stagger = options.stagger ?? 0.12;

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>(selector);

      gsap.set(elements, { opacity: 0, y: offset });

      elements.forEach((element, index) => {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          delay: index * stagger,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            once: true,
          },
        });
      });
    }, scopeRef);

    return () => ctx.revert();
  }, [scopeRef, prefersReducedMotion, options.offset, options.selector, options.stagger]);
}


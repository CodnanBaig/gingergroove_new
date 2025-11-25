"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import clsx from "clsx";

import { ActionLink } from "@/components/ui/ActionLink";
import { ensureGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type ServiceCardProps = {
  title: string;
  image: string;
  description?: string;
  features?: string[];
  className?: string;
};

const phoneNumber = "+917304008137";
const whatsappNumber = "917304008137";

export function ServiceCard({
  title,
  image,
  description,
  features,
  className,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!cardRef.current || prefersReducedMotion) {
      return;
    }

    const { gsap } = ensureGsap();
    const card = cardRef.current;

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.02,
        y: -8,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
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
    <article
      ref={cardRef}
      className={clsx(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-shadow duration-500 hover:border-[#ec2021]/30 hover:shadow-[0_25px_80px_rgba(236,32,33,0.3)]",
        className
      )}
      data-animate
    >
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={`${title} service`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="grid-backdrop" aria-hidden="true" />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative flex flex-1 flex-col space-y-4 p-6">
        <h3 className="font-[family-name:var(--font-bebas)] text-3xl text-[#f5f5dc]">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-[#83caaf] text-balance">{description}</p>
        )}

        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-xs text-[#f5f5dc]/70"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ec2021]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Action Buttons */}
        <div className="mt-auto space-y-3 pt-4">
          <ActionLink
            href="/contact-us"
            label="Get Started"
            variant="primary"
            className="w-full justify-center"
          />
          <div className="flex gap-3">
            <Link
              href={`tel:${phoneNumber}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-[#f5f5dc] transition-all duration-300 hover:border-[#83caaf] hover:bg-white/10 hover:text-[#83caaf]"
              aria-label="Call us"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call
            </Link>
            <Link
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-[#f5f5dc] transition-all duration-300 hover:border-[#83caaf] hover:bg-white/10 hover:text-[#83caaf]"
              aria-label="WhatsApp us"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}


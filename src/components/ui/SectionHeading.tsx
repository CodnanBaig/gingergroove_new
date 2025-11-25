"use client";

import clsx from "clsx";
import { forwardRef } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ eyebrow, title, description, align = "left", className }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "flex flex-col gap-3",
          align === "center" && "items-center text-center",
          className
        )}
        data-animate
      >
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-[#83caaf]">
          {eyebrow}
        </span>
        <h2 className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl tracking-wide text-[#f5f5dc] text-balance">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base text-[#83caaf] text-balance">{description}</p>
        ) : null}
      </div>
    );
  }
);

SectionHeading.displayName = "SectionHeading";


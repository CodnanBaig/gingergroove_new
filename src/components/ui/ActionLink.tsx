"use client";

import Link, { type LinkProps } from "next/link";
import clsx from "clsx";
import { type ReactNode } from "react";

type ActionLinkProps = LinkProps & {
  label: string;
  variant?: "primary" | "ghost";
  className?: string;
  icon?: ReactNode;
};

export function ActionLink({
  label,
  variant = "primary",
  className,
  icon,
  ...linkProps
}: ActionLinkProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        "inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold uppercase tracking-wide transition-all duration-300",
        variant === "primary" &&
          "bg-gradient-to-r from-[#ec2021] via-[#ec2021] to-[#83caaf] text-[#f5f5dc] shadow-[0_20px_60px_rgba(236,32,33,0.35)] hover:shadow-[0_25px_80px_rgba(236,32,33,0.45)]",
        variant === "ghost" &&
          "border border-[#f5f5dc]/30 bg-white/5 text-[#f5f5dc] hover:border-[#83caaf] hover:text-[#83caaf]",
        className
      )}
      data-animate
    >
      <span>{label}</span>
      {icon}
    </Link>
  );
}


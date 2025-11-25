"use client";

import clsx from "clsx";

type LoadingSkeletonProps = {
  className?: string;
  isCircle?: boolean;
};

export function LoadingSkeleton({ className, isCircle = false }: LoadingSkeletonProps) {
  return (
    <div
      className={clsx(
        "animate-pulse bg-white/10",
        isCircle ? "rounded-full" : "rounded-3xl",
        className
      )}
      aria-hidden="true"
    />
  );
}



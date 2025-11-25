"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center text-[#f5f5dc]">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-[#83caaf]">Something went wrong</p>
        <h1 className="font-[family-name:var(--font-bebas)] text-5xl">We hit a bad note.</h1>
        <p className="text-sm text-[#f5f5dc]/70">
          The page failed to load. Try refreshing, or head back to the homepage while we fix the mix.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full bg-gradient-to-r from-[#ec2021] via-[#ec2021] to-[#83caaf] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#f5f5dc]"
        >
          Retry
        </button>
        <Link
          href="/"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#f5f5dc]"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}



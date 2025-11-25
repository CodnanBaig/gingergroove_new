"use client";

import Link from "next/link";

export default function GlobalError({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-[#141414] px-6 text-[#f5f5dc]">
        <div className="space-y-6 text-center">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[#83caaf]">Critical Error</p>
            <h1 className="font-[family-name:var(--font-bebas)] text-5xl">We lost the signal.</h1>
            <p className="text-sm text-[#f5f5dc]/70">
              Something unexpected happened and we couldn&apos;t recover. Try reloading or return to the homepage.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => reset()}
              className="rounded-full bg-gradient-to-r from-[#ec2021] via-[#ec2021] to-[#83caaf] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#f5f5dc]"
            >
              Reload App
            </button>
            <Link
              href="/"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#f5f5dc]"
            >
              Go Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}



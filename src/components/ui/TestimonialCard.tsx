"use client";

import Image from "next/image";

type TestimonialCardProps = {
  name: string;
  role: string;
  image: string;
  content: string;
};

export function TestimonialCard({ name, role, image, content }: TestimonialCardProps) {
  return (
    <article className="glass-panel flex w-full min-w-[280px] max-w-sm flex-col gap-5 rounded-3xl border border-white/5 p-6 backdrop-blur-2xl">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/10">
          <Image src={image} alt={name} fill sizes="64px" className="object-cover" />
        </div>
        <div className="flex flex-col">
          <span className="font-[family-name:var(--font-bebas)] text-2xl text-[#f5f5dc]">
            {name}
          </span>
          <span className="text-xs uppercase tracking-[0.4em] text-[#83caaf]">{role}</span>
        </div>
      </div>
      <p className="text-sm text-[#f5f5dc]/80">{content}</p>
    </article>
  );
}


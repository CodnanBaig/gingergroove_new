"use client";

type VideoCardProps = {
  title: string;
  channelTitle?: string;
  videoId: string;
};

export function VideoCard({ title, channelTitle, videoId }: VideoCardProps) {
  return (
    <article
      className="glass-panel flex flex-col gap-4 rounded-[28px] border border-white/10 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
      data-animate
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/5">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="space-y-1">
        <p className="font-[family-name:var(--font-bebas)] text-2xl text-[#f5f5dc]">{title}</p>
        {channelTitle ? <p className="text-xs uppercase tracking-[0.4em] text-[#83caaf]">{channelTitle}</p> : null}
      </div>
    </article>
  );
}



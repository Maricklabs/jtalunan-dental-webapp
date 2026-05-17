"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  items: {
    src: string;
    alt: string;
    eyebrow?: string;
    title?: string;
  }[];
  intervalMs?: number;
};

export default function ServiceGallery({ items, intervalMs = 3500 }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = items.length;

  useEffect(() => {
    if (total <= 1) return;
    if (paused) return;

    const t = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, intervalMs);

    return () => clearInterval(t);
  }, [total, intervalMs, paused]);

  const go = (dir: number) => {
    setIndex((i) => (i + dir + total) % total);
  };

  const getIndex = (offset: number) => (index + offset + total) % total;
  const cards = total > 1
    ? [
        { item: items[getIndex(-1)], position: "left" as const },
        { item: items[getIndex(0)], position: "center" as const },
        { item: items[getIndex(1)], position: "right" as const }
      ]
    : [{ item: items[0], position: "center" as const }];

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative flex w-full items-center justify-center gap-4 px-2 sm:gap-6 sm:px-0">
        <button
          onClick={() => go(-1)}
          className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center border border-sand/60 bg-white text-ink transition hover:bg-sand/30"
          aria-label="Previous service image"
        >
          <i className="fa-solid fa-chevron-left" />
        </button>

        <div className="flex flex-1 items-center justify-center gap-4 sm:gap-6">
          {cards.map(({ item, position }) => {
            const isCenter = position === "center";
            return (
              <div
                key={`${item.src}-${position}`}
                className={`overflow-hidden rounded-2xl border border-sand/60 bg-white transition-all duration-500 ${
                  isCenter
                    ? "z-10 w-64 scale-105 shadow-md sm:w-[34rem]"
                    : "hidden w-56 opacity-55 sm:block sm:w-72"
                }`}
              >
                <div className={`relative w-full ${isCenter ? "h-64 sm:h-[26rem]" : "h-52 sm:h-64"}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 256px, 544px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                  {(item.eyebrow || item.title) && (
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white">
                      {item.eyebrow ? (
                        <p className="text-xs uppercase tracking-[0.3em] text-white/80">{item.eyebrow}</p>
                      ) : null}
                      {item.title ? <h3 className="mt-1 font-display text-2xl sm:text-3xl">{item.title}</h3> : null}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => go(1)}
          className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center border border-sand/60 bg-white text-ink transition hover:bg-sand/30"
          aria-label="Next service image"
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-3 sm:hidden">
        <button
          onClick={() => go(-1)}
          className="flex h-10 w-10 items-center justify-center border border-sand/60 bg-white text-ink transition hover:bg-sand/30"
          aria-label="Previous service image"
        >
          <i className="fa-solid fa-chevron-left" />
        </button>
        <button
          onClick={() => go(1)}
          className="flex h-10 w-10 items-center justify-center border border-sand/60 bg-white text-ink transition hover:bg-sand/30"
          aria-label="Next service image"
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-ink" : "w-1.5 bg-ink/30"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

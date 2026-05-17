"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  intervalMs?: number;
};

export default function ServiceGallery({ images, intervalMs = 3500 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const isProgrammaticRef = useRef(false);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    if (paused) return;

    const t = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(t);
  }, [images, intervalMs, paused]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const slide = el.children[index] as HTMLElement | undefined;
    if (slide) {
      const slideLeft = slide.offsetLeft;
      const slideWidth = slide.clientWidth;
      const containerWidth = el.clientWidth;
      const target = Math.max(0, slideLeft - (containerWidth - slideWidth) / 2);
      isProgrammaticRef.current = true;
      el.scrollTo({ left: target, behavior: "smooth" });
      // clear the flag after animation (approx)
      const id = window.setTimeout(() => {
        isProgrammaticRef.current = false;
      }, 550);
      return () => clearTimeout(id);
    }
  }, [index]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      if (isProgrammaticRef.current) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        // Find the child whose center is nearest to container center
        const containerCenter = el.scrollLeft + el.clientWidth / 2;
        let bestIndex = 0;
        let bestDist = Infinity;
        for (let i = 0; i < el.children.length; i++) {
          const child = el.children[i] as HTMLElement;
          const childCenter = child.offsetLeft + child.clientWidth / 2;
          const dist = Math.abs(containerCenter - childCenter);
          if (dist < bestDist) {
            bestDist = dist;
            bestIndex = i;
          }
        }
        if (bestIndex !== index) setIndex(bestIndex);
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [index]);

  const go = (dir: number) => {
    setIndex((i) => (i + dir + images.length) % images.length);
  };

  return (
    <div>
      <div className="relative">
        <div
          ref={containerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-4 py-2 -mx-4 px-4"
          style={{ scrollbarWidth: "thin" }}
        >
          {images.map((src, i) => (
            <div
              key={src + i}
              className={`snap-center flex-shrink-0 w-full sm:w-[min(720px,100%)] rounded-lg overflow-hidden border border-sand/20 bg-white shadow-sm transition-all duration-300 ${
                i === index ? "opacity-100 scale-100" : "opacity-40 scale-95"
              }`}
            >
              <div style={{ position: "relative", height: 380 }}>
                <Image src={src} alt={`gallery-${i}`} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          aria-label="previous"
          onClick={() => go(-1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow border border-sand/30"
        >
          ‹
        </button>
        <button
          aria-label="next"
          onClick={() => go(1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow border border-sand/30"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="mt-3 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-8 rounded-full transition-all duration-300 ${i === index ? "bg-olive" : "bg-sand/40"}`}
          />
        ))}
      </div>
    </div>
  );
}

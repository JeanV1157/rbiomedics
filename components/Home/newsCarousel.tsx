"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NewsItem {
  id: number;
  image: string;
}

interface NewsCarouselProps {
  title?: string;
  items: NewsItem[];
}

export default function NewsCarousel({ title, items }: NewsCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const previous = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 rounded-full bg-[var(--surface)] text-[var(--primary)] text-sm font-semibold mb-4">
            Últimas Actualizaciones
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-dark)]">
            {title}
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <div className="relative aspect-[16/5]">
            <Image
              src={items[current].image}
              alt="news"
              fill
              priority
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Flecha izquierda */}
          <button
            onClick={previous}
            className="
              absolute left-4 top-1/2 -translate-y-1/2
              rounded-full bg-white/15 p-3
              shadow-lg backdrop-blur-sm
              hover:bg-white
              transition
            "
          >
            <ChevronLeft />
          </button>

          {/* Flecha derecha */}
          <button
            onClick={next}
            className="
              absolute right-4 top-1/2 -translate-y-1/2
              rounded-full bg-white/15 p-3
              shadow-lg backdrop-blur-sm
              hover:bg-white
              transition
            "
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

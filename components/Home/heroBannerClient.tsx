"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
}

export default function HeroBannerClient({ images }: Props) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (images.length === 0) return;

    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    if (images.length === 0) return;

    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full aspect-[4/2] md:aspect-[16/5] lg:aspect-[16/7]">
        {images.map((image, index) => {
          const isNear =
            Math.abs(index - current) <= 1 ||
            (current === 0 && index === images.length - 1) ||
            (current === images.length - 1 && index === 0);

          if (!isNear) return null;

          return (
            <Image
              key={image}
              src={image}
              alt={`Banner ${index + 1}`}
              fill
              priority={index === 0}
              loading={index === 0 ? undefined : "lazy"}
              sizes="100vw"
              className={`
    absolute inset-0
    object-cover
    transition-opacity duration-1000 ease-in-out
    ${current === index ? "opacity-100" : "opacity-0"}
  `}
            />
          );
        })}
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1.5 md:p-2 rounded-full hover:bg-black/60 transition"
      >
        <ChevronLeft className="w-3 h-3 md:w-7 md:h-7" />
      </button>

      {/* Flecha derecha */}
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1.5 md:p-2 rounded-full hover:bg-black/60 transition"
      >
        <ChevronRight className="w-3 h-3 md:w-7 md:h-7" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 w-1.5 md:h-3 md:w-3 rounded-full transition ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

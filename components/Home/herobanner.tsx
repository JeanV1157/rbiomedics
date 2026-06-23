"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getActiveHeroImages } from "@/services/heroImage.service";

export default function HeroBanner() {
  const [heroImages, setHeroImages] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (heroImages.length === 0) return;

    setCurrent((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    if (heroImages.length === 0) return;

    setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  useEffect(() => {
    async function loadImages() {
      const images = await getActiveHeroImages();

      setHeroImages(images.map((img) => img.image_url));
    }

    loadImages();
  }, []);

  useEffect(() => {
    if (heroImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full aspect-[4/2] md:aspect-[16/7] lg:aspect-[16/6]">
        {heroImages.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={`Banner ${index + 1}`}
            fill
            priority={index === 0}
            className={`
        absolute inset-0
        object-cover
        transition-opacity duration-1000 ease-in-out
        ${current === index ? "opacity-100" : "opacity-0"}
      `}
          />
        ))}
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1.5 md:p-2 rounded-full hover:bg-black/60 transition"
      >
        <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
      </button>

      {/* Flecha derecha */}
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1.5 md:p-2 rounded-full hover:bg-black/60 transition"
      >
        <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

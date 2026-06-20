"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { getHeroImageUrl } from "@/services/heroImage.service";
import { HeroImage } from "@/types/hero-image";

interface Props {
  heroes: HeroImage[];
}

export default function HeroPreview({ heroes }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (heroes.length === 0) {
    return (
      <div className="rounded-3xl border border-[var(--border)] bg-white p-10 text-center text-[var(--muted)]">
        No hay imágenes disponibles.
      </div>
    );
  }

  const currentHero = heroes[currentIndex];

  function handlePrev() {
    setCurrentIndex((prev) => (prev === 0 ? heroes.length - 1 : prev - 1));
  }

  function handleNext() {
    setCurrentIndex((prev) => (prev === heroes.length - 1 ? 0 : prev + 1));
  }

  return (
    <div
      className="
        overflow-hidden
        rounded-t-3xl
        border
        border-[var(--border)]
        bg-white
      "
    >
      <div className="border-b border-[var(--border)] p-6">
        <h2 className="text-xl font-bold text-[var(--primary-dark)]">
          Vista previa de la portada
        </h2>
      </div>

      <div className="relative aspect-[21/8]">
        <Image
          src={getHeroImageUrl(currentHero.image_path)}
          alt={`Hero ${currentIndex + 1}`}
          fill
          className="object-cover"
        />

        {heroes.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                rounded-full
                bg-white/90
                p-3
                shadow-lg
                transition
                hover:bg-white
              "
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={handleNext}
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                rounded-full
                bg-white/90
                p-3
                shadow-lg
                transition
                hover:bg-white
              "
            >
              <ChevronRight size={22} />
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {heroes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition ${
                    currentIndex === index ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

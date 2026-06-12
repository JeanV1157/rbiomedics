"use client";

import HeroImagesTable from "@/components/dashboard/portada/heroImagesTable";
import HeroPreview from "@/components/dashboard/portada/heroPreview";
import HeroStats from "@/components/dashboard/portada/heroStates";

const HERO_IMAGES = [
  "/images/hero/hero1.jpg",
  "/images/hero/hero2.jpg",
  "/images/hero/hero3.jpg",
];

export default function HeroPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[var(--primary-dark)]">
          Portada Home
        </h1>

        <p className="mt-2 text-[var(--muted)]">
          Gestiona las imágenes del slider principal.
        </p>
      </div>

      <HeroStats totalImages={HERO_IMAGES.length} />

      <HeroPreview image={HERO_IMAGES[0]} />

      <HeroImagesTable images={HERO_IMAGES} />
    </div>
  );
}

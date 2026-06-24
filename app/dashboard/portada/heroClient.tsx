"use client";

import HeroImagesTable from "@/components/dashboard/portada/heroImagesTable";
import HeroModal from "@/components/dashboard/portada/heroModal";
import HeroPreview from "@/components/dashboard/portada/heroPreview";
import HeroStats from "@/components/dashboard/portada/heroStates";
import { getHeroImages } from "@/services/hero.service";
import { removeHero } from "@/services/heroCrud.service";

import { HeroImage } from "@/types/hero-image";
import { useState } from "react";

interface HeroClientProps {
  initialData: HeroImage[];
}
export default function HeroClient({ initialData }: HeroClientProps) {
  const [heroImages, setHeroImages] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHero, setSelectedHero] = useState<HeroImage | null>(null);

  async function loadHeroImages() {
    const data = await getHeroImages();
    setHeroImages(data);
  }
  async function handleDelete(hero: HeroImage) {
    if (!confirm("¿Deseas eliminar esta imagen?")) {
      return;
    }

    await removeHero(hero.id);

    await loadHeroImages();
  }
  const handleClose = () => {
    setSelectedHero(null);
    setIsModalOpen(false);
  };
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

      <HeroStats totalImages={heroImages.length} />
      <HeroImagesTable
        images={heroImages}
        onEdit={(hero) => {
          setSelectedHero(hero);
          setIsModalOpen(true);
        }}
        onAdd={() => {
          setSelectedHero(null);
          setIsModalOpen(true);
        }}
        onDelete={handleDelete}
      />

      <HeroPreview heroes={heroImages} />
      <HeroModal
        open={isModalOpen}
        hero={selectedHero}
        onClose={handleClose}
        onSuccess={loadHeroImages}
      />
    </div>
  );
}

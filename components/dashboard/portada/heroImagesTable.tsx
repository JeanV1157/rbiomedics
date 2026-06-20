"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import ActionButtons from "../ui/actionButtons";
import { HeroImage } from "@/types/hero-image";
import { getHeroImageUrl } from "@/services/heroImage.service";

interface Props {
  images: HeroImage[];
  onEdit: (hero: HeroImage) => void;
  onAdd: () => void;
  onDelete: (hero: HeroImage) => void;
}

export default function HeroImagesTable({
  images,
  onEdit,
  onAdd,
  onDelete,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-[var(--border)]
        bg-white
      "
    >
      <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
        <h2 className="font-bold text-xl text-[var(--primary-dark)]">
          Imágenes del slider
        </h2>

        <button
          onClick={onAdd}
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-[var(--primary)]
            px-4
            py-2
            text-white
            font-semibold
          "
        >
          <Plus size={18} />
          Agregar Imagen
        </button>
      </div>

      <div className="divide-y divide-[var(--border)]">
        {images.map((hero, index) => {
          const imageUrl = getHeroImageUrl(hero.image_path);
          return (
            <div
              key={hero.id}
              className="flex items-center justify-between gap-4 p-4"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={imageUrl}
                  alt={`Hero ${index + 1}`}
                  width={120}
                  height={70}
                  className="rounded-xl object-cover"
                />

                <div>
                  <h3 className="font-semibold">Portada {index + 1}</h3>

                  <p className="text-sm text-[var(--muted)]">
                    Imagen del slider principal
                  </p>
                </div>
              </div>

              <ActionButtons
                onEdit={() => onEdit(hero)}
                onDelete={() => onDelete(hero)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

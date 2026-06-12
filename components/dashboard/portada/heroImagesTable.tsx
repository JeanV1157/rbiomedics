"use client";

import Image from "next/image";
import { Trash2, Pencil, Plus } from "lucide-react";
import ActionButtons from "../ui/actionButtons";

interface Props {
  images: string[];
}

export default function HeroImagesTable({ images }: Props) {
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
        {images.map((image, index) => (
          <div
            key={index}
            className="
              flex
              items-center
              justify-between
              gap-4
              p-4
            "
          >
            <div className="flex items-center gap-4">
              <Image
                src={image}
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
              editHref={`/dashboard/portada/${index}`}
              onDelete={() => {
                console.log("Eliminar imagen", index);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { ImagePlus, Trash2 } from "lucide-react";
import { ProductImagePreview } from "@/types/product-image-preview";
import { ALLOWED_IMAGE_TYPES } from "@/types/product-image";

interface ProductImageUploadProps {
  images: ProductImagePreview[];

  onAdd: (files: File[]) => void;

  onRemove: (index: number) => void;
}

export default function ProductImageUpload({
  images,
  onAdd,
  onRemove,
}: ProductImageUploadProps) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5 lg:p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[var(--primary-dark)]">
          Imágenes del producto
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Puedes seleccionar una o varias imágenes desde tu dispositivo.
        </p>
      </div>

      <label
        className="
          flex
          min-h-[220px]
          cursor-pointer
          flex-col
          items-center
          justify-center
          rounded-2xl
          border-2
          border-dashed
          border-gray-300
          bg-gray-50
          p-8
          text-center
          transition
          hover:border-[var(--primary)]
          hover:bg-gray-100
        "
      >
        <ImagePlus size={48} className="mb-4 text-gray-400" />

        <span className="text-base font-semibold text-gray-700">
          Agregar imágenes
        </span>

        <span className="mt-2 text-sm text-gray-500">
          JPG • PNG • WEBP • SVG
        </span>

        <span className="mt-1 text-xs text-gray-400">
          Puedes seleccionar varias imágenes al mismo tiempo.
        </span>

        <input
          hidden
          multiple
          type="file"
          accept="
            image/png,
            image/jpeg,
            image/jpg,
            image/webp,
            image/svg+xml
          "
          onChange={(e) => {
            const files = Array.from(e.target.files ?? []);

            if (files.length === 0) return;

            onAdd(files);

            e.target.value = "";
          }}
        />
      </label>

      {images.length > 0 && (
        <div
          className="
            mt-8
            grid
            grid-cols-2
            gap-4

            sm:grid-cols-3

            lg:grid-cols-4

            xl:grid-cols-5
          "
        >
          {images.map((item, index) => (
            <div
              key={item.id ?? item.preview}
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                bg-gray-50
              "
            >
              <Image
                src={item.preview}
                alt={`Imagen ${index + 1}`}
                width={500}
                height={500}
                className="
                  aspect-square
                  w-full
                  object-cover
                "
              />

              <button
                type="button"
                onClick={() => onRemove(index)}
                className="
                  absolute
                  right-2
                  top-2

                  flex
                  h-9
                  w-9
                  items-center
                  justify-center

                  rounded-full

                  bg-red-500

                  text-white

                  transition

                  hover:bg-red-600
                "
              >
                <Trash2 size={16} />
              </button>

              <div className="border-t bg-white p-3">
                <p className="truncate text-sm font-medium">
                  {item.file ? item.file.name : "Imagen guardada"}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {item.file
                    ? `${(item.file.size / 1024 / 1024).toFixed(2)} MB`
                    : "Ya almacenada en Supabase"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

"use client";

import Image from "next/image";
import { ImagePlus, Trash2 } from "lucide-react";

interface ProductImageUploadProps {
  image: File | null;
  preview: string | null;

  onChange: (file: File | null) => void;

  onRemove: () => void;
}

export default function ProductImageUpload({
  image,
  preview,
  onChange,
  onRemove,
}: ProductImageUploadProps) {
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    onChange(file);
  }
  console.log("esto es preview=", preview);

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5 lg:p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[var(--primary-dark)]">
          Imagen del producto
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Selecciona una imagen desde tu dispositivo.
        </p>
      </div>

      {!preview ? (
        <label
          className="
            flex
            min-h-[240px]
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
            Seleccionar imagen
          </span>

          <span className="mt-2 text-sm text-gray-500">
            JPG • PNG • WEBP • SVG
          </span>

          <span className="mt-1 text-xs text-gray-400">
            También puedes hacerlo desde tu celular.
          </span>

          <input
            hidden
            type="file"
            accept="
              image/png,
              image/jpeg,
              image/jpg,
              image/webp,
              image/svg+xml
            "
            onChange={handleFileChange}
          />
        </label>
      ) : (
        <div className="space-y-4">
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              bg-gray-50
            "
          >
            <Image
              src={preview}
              alt="Preview"
              width={1200}
              height={800}
              className="
                h-56
                w-full
                object-contain

                sm:h-72

                lg:h-80
              "
            />
          </div>

          <div
            className="
              flex
              flex-col
              gap-3

              sm:flex-row
              sm:justify-between
              sm:items-center
            "
          >
            <div>
              <p className="font-medium text-gray-800">{image?.name}</p>

              <p className="text-sm text-gray-500">
                {image ? `${(image.size / 1024 / 1024).toFixed(2)} MB` : ""}
              </p>
            </div>

            <button
              type="button"
              onClick={onRemove}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-red-200
                bg-red-50
                px-4
                py-2
                text-sm
                font-medium
                text-red-600
                transition
                hover:bg-red-100
              "
            >
              <Trash2 size={16} />
              Eliminar imagen
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

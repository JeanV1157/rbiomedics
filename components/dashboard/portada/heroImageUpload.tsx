"use client";

import { useState } from "react";
import Image from "next/image";

const MAX_SIZE_MB = 5;

interface Props {
  file: File | null;
  setFile: (file: File | null) => void;

  preview: string;
  setPreview: (url: string) => void;

  existingImage?: string;
  onError?: (error: string | null) => void;
}

export default function HeroImageUpload({
  file,
  setFile,
  preview,
  setPreview,
  existingImage,
  onError,
}: Props) {
  const [error, setError] = useState<string | null>(null);

  const reportError = (message: string | null) => {
    setError(message);
    onError?.(message);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];

    if (!selected) return;

    if (!selected.type.startsWith("image/")) {
      reportError("Selecciona un archivo de imagen válido.");
      return;
    }

    if (selected.size > MAX_SIZE_MB * 1024 * 1024) {
      reportError(`La imagen supera el límite de ${MAX_SIZE_MB}MB.`);
      return;
    }

    reportError(null);
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const imageToShow = preview || existingImage || "";

  return (
    <div className="space-y-4">
      {/* BOTÓN PERSONALIZADO */}
      <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[var(--primary)] px-4 py-2 text-white font-semibold hover:bg-[var(--primary-dark)] transition">
        Subir imagen
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {/* PREVIEW */}
      {imageToShow && (
        <div className="relative w-full h-60">
          <Image
            src={imageToShow}
            alt="preview"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      )}
    </div>
  );
}

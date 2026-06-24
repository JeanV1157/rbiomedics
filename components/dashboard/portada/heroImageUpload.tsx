"use client";

import Image from "next/image";

interface Props {
  file: File | null;
  setFile: (file: File | null) => void;

  preview: string;
  setPreview: (url: string) => void;

  existingImage?: string;
}

export default function HeroImageUpload({
  file,
  setFile,
  preview,
  setPreview,
  existingImage,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];

    if (!selected) return;

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

"use client";

import { useState, useEffect } from "react";

import { createHero, updateHero } from "@/services/heroCrud.service";
import { HeroImage } from "@/types/hero-image";
import HeroImageUpload from "./heroImageUpload";

interface Props {
  open: boolean;
  onClose: () => void;
  hero?: HeroImage | null;
  onSuccess: () => void;
}

export default function HeroModal({ open, onClose, hero, onSuccess }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!hero) {
      setFile(null);
      setPreview("");
    }
  }, [hero]);

  useEffect(() => {
    if (!open) {
      setFile(null);
      setPreview("");
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = async () => {
    if (!file && !hero) return;

    try {
      setLoading(true);

      if (hero) {
        // EDITAR
        await updateHero({
          id: hero.id,
          file: file ?? undefined,
          order_index: hero.order_index,
          is_active: hero.is_active,
        });
      } else {
        // CREAR
        await createHero({
          file: file as File,
          order_index: 0,
          is_active: true,
        });
      }

      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl rounded-2xl p-6 space-y-6">
        <h2 className="text-xl font-bold">
          {hero ? "Editar imagen" : "Agregar imagen"}
        </h2>

        <HeroImageUpload
          file={file}
          setFile={setFile}
          preview={preview}
          setPreview={setPreview}
          existingImage={hero?.image_path}
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border">
            Cancelar
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-[var(--primary)] hover:bg-[var(--primary-dark)] cursor-pointer text-white"
          >
            {loading ? "Guardando..." : "Guardar"}
          </button>
        </div>
      </div>
    </div>
  );
}

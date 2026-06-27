"use client";

import { X } from "lucide-react";
import { useState } from "react";

interface CategoryModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (name: string) => Promise<void>;

  initialData?: {
    id: number;
    name: string;
  };
}

export default function CategoryModal({
  open,
  onClose,
  onSave,
  initialData,
}: CategoryModalProps) {
  const [name, setName] = useState(initialData?.name || "");

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return;

    await onSave(name);

    setName("");
    onClose();
  };

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/50
        p-4
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-3xl
          bg-white
          shadow-xl
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-[var(--border)]
            p-6
          "
        >
          <h2 className="text-xl font-bold">
            {initialData ? "Editar Categoría" : "Nueva Categoría"}
          </h2>

          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <label className="mb-2 block text-sm font-medium">
            Nombre de la categoría
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej: Equipos Médicos"
            className="
              w-full
              rounded-xl
              border
              border-[var(--border)]
              px-4
              py-3
            "
          />

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="
                rounded-xl
                border
                border-[var(--border)]
                px-5
                py-3
              "
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="
                rounded-xl
                bg-[var(--primary)]
                px-5
                py-3
                font-semibold
                text-white
              "
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

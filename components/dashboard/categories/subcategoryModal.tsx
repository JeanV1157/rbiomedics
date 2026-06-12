"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

import { Category, Subcategory } from "@/types/category";

interface SubcategoryModalProps {
  open: boolean;
  onClose: () => void;
  categories: Category[];
  onSave: (data: { name: string; categoryId: number }) => void;

  initialData?: Subcategory;
}

export default function SubcategoryModal({
  open,
  onClose,
  categories,
  onSave,
  initialData,
}: SubcategoryModalProps) {
  const [name, setName] = useState(initialData?.name ?? "");

  const [categoryId, setCategoryId] = useState(
    initialData?.category_id ?? categories[0]?.id ?? 0,
  );

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return;

    onSave({
      name,
      categoryId,
    });

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
          <h2 className="text-xl font-bold text-[var(--primary-dark)]">
            {initialData ? "Editar Subcategoría" : "Nueva Subcategoría"}
          </h2>

          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div>
            <label className="mb-2 block text-sm font-medium">Categoría</label>

            <select
              value={categoryId}
              onChange={(e) => setCategoryId(Number(e.target.value))}
              className="
                w-full
                rounded-xl
                border
                border-[var(--border)]
                px-4
                py-3
              "
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium">
              Nombre de la subcategoría
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: Microscopios"
              className="
                w-full
                rounded-xl
                border
                border-[var(--border)]
                px-4
                py-3
              "
            />
          </div>

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
              {initialData ? "Actualizar" : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

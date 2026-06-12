"use client";

import { useMemo } from "react";

import { Category } from "@/types/category";

interface ProductCategorySelectProps {
  categories: Category[];

  category_id: number;

  subcategory_id: number;

  onCategoryChange: (categoryId: number) => void;

  onSubcategoryChange: (subcategoryId: number) => void;
}

export default function ProductCategorySelect({
  categories,
  category_id,
  subcategory_id,
  onCategoryChange,
  onSubcategoryChange,
}: ProductCategorySelectProps) {
  const subcategories = useMemo(() => {
    const category = categories.find((item) => item.id === category_id);

    return category?.subcategories ?? [];
  }, [categories, category_id]);

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5 lg:p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[var(--primary-dark)]">
          Clasificación
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Selecciona la categoría y subcategoría del producto.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Categoría */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Categoría *
          </label>

          <select
            required
            value={category_id}
            onChange={(e) => onCategoryChange(Number(e.target.value))}
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              bg-white
              px-4
              py-3
              text-sm
              outline-none
              transition
              focus:border-[var(--primary)]
              focus:ring-2
              focus:ring-[var(--primary)]/20
            "
          >
            <option value={0}>Seleccionar categoría</option>

            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategoría */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Subcategoría *
          </label>

          <select
            required
            disabled={!category_id}
            value={subcategory_id}
            onChange={(e) => onSubcategoryChange(Number(e.target.value))}
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              bg-white
              px-4
              py-3
              text-sm
              outline-none
              transition
              disabled:cursor-not-allowed
              disabled:bg-gray-100
              disabled:text-gray-400
              focus:border-[var(--primary)]
              focus:ring-2
              focus:ring-[var(--primary)]/20
            "
          >
            <option value={0}>
              {category_id
                ? "Seleccionar subcategoría"
                : "Primero selecciona una categoría"}
            </option>

            {subcategories.map((subcategory) => (
              <option key={subcategory.id} value={subcategory.id}>
                {subcategory.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}

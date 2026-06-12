"use client";

import { ProductSpecificationForm } from "@/types/specification";
import { Plus, Trash2 } from "lucide-react";

interface ProductSpecificationsProps {
  specifications: ProductSpecificationForm[];

  onChange: (specifications: ProductSpecificationForm[]) => void;
}

export default function ProductSpecifications({
  specifications,
  onChange,
}: ProductSpecificationsProps) {
  function addSpecification() {
    onChange([
      ...specifications,
      {
        label: "",
        value: "",
      },
    ]);
  }

  function removeSpecification(index: number) {
    onChange(specifications.filter((_, i) => i !== index));
  }

  function updateSpecification(
    index: number,
    field: "label" | "value",
    value: string,
  ) {
    const updated = [...specifications];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    onChange(updated);
  }

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5 lg:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[var(--primary-dark)]">
            Especificaciones técnicas
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Agrega todas las especificaciones que desees mostrar.
          </p>
        </div>

        <button
          type="button"
          onClick={addSpecification}
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[var(--primary)]
            px-4
            py-2
            text-sm
            font-semibold
            text-white
            transition
            hover:opacity-90
          "
        >
          <Plus size={16} />
          Agregar
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {specifications.length === 0 && (
          <div
            className="
              rounded-xl
              border-2
              border-dashed
              border-gray-300
              bg-gray-50
              p-8
              text-center
            "
          >
            <p className="font-medium text-gray-600">
              No hay especificaciones.
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Presiona "Agregar" para crear una nueva.
            </p>
          </div>
        )}

        {specifications.map((specification, index) => (
          <div
            key={index}
            className="
              rounded-xl
              border
              border-gray-200
              bg-gray-50
              p-4
            "
          >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr_auto]">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Etiqueta
                </label>

                <input
                  type="text"
                  value={specification.label}
                  onChange={(e) =>
                    updateSpecification(index, "label", e.target.value)
                  }
                  placeholder="Ej. Material"
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
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Valor
                </label>

                <input
                  type="text"
                  value={specification.value}
                  onChange={(e) =>
                    updateSpecification(index, "value", e.target.value)
                  }
                  placeholder="Ej. Acero inoxidable"
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
                />
              </div>

              <div className="flex items-end">
                <button
                  type="button"
                  onClick={() => removeSpecification(index)}
                  className="
                    flex
                    h-[50px]
                    w-[50px]
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-red-200
                    bg-red-50
                    text-red-600
                    transition
                    hover:bg-red-100
                  "
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

interface ProductBasicInfoProps {
  title: string;
  description: string;
  long_description: string;
  price: number | null;

  onChange: (
    field: "title" | "description" | "long_description" | "price",
    value: string | number | null,
  ) => void;
}

export default function ProductBasicInfo({
  title,
  description,
  long_description,
  price,
  onChange,
}: ProductBasicInfoProps) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5 lg:p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[var(--primary-dark)]">
          Información básica
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Completa la información principal del producto.
        </p>
      </div>

      <div className="space-y-5">
        {/* Título y Precio */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Título *
            </label>

            <input
              type="text"
              required
              value={title}
              onChange={(e) => onChange("title", e.target.value)}
              placeholder="Ej. Microscopio Digital"
              className="
                w-full
                rounded-xl
                border
                border-gray-300
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
              Precio
            </label>

            <input
              type="number"
              step="0.01"
              min="0"
              value={price ?? ""}
              onChange={(e) =>
                onChange(
                  "price",
                  e.target.value === "" ? null : Number(e.target.value),
                )
              }
              placeholder="0.00"
              className="
                w-full
                rounded-xl
                border
                border-gray-300
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
        </div>

        {/* Descripción corta */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Descripción corta *
          </label>

          <textarea
            required
            rows={3}
            value={description}
            onChange={(e) => onChange("description", e.target.value)}
            placeholder="Breve descripción del producto..."
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-gray-300
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

        {/* Descripción larga */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Descripción detallada
          </label>

          <textarea
            rows={7}
            value={long_description}
            onChange={(e) => onChange("long_description", e.target.value)}
            placeholder="Información completa del producto..."
            className="
              w-full
              resize-y
              rounded-xl
              border
              border-gray-300
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
      </div>
    </section>
  );
}

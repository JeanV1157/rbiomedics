"use client";

import { Package, FolderTree, Tags, Images } from "lucide-react";

interface Props {
  totalProducts: number;
  totalCategories: number;
  totalSubcategories: number;
  totalHeroImages: number;
}

export default function DashboardStats({
  totalProducts,
  totalCategories,
  totalSubcategories,
  totalHeroImages,
}: Props) {
  const stats = [
    {
      title: "Productos",
      value: totalProducts,
      icon: Package,
    },
    {
      title: "Categorías",
      value: totalCategories,
      icon: FolderTree,
    },
    {
      title: "Subcategorías",
      value: totalSubcategories,
      icon: Tags,
    },
    {
      title: "Portadas Home",
      value: totalHeroImages,
      icon: Images,
    },
  ];
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[var(--primary-dark)]">
          Resumen General
        </h2>

        <p className="mt-2 text-[var(--muted)]">
          Información rápida del estado actual del catálogo.
        </p>
      </div>

      <div
        className="
          grid
          gap-6
          grid-cols-2
          xl:grid-cols-4
        "
      >
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                rounded-3xl
                border
                border-[var(--border)]
                bg-white
                p-6
                transition-all
                duration-300
                hover:shadow-lg
              "
            >
              <div className="flex items-center justify-between">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[var(--surface)]
                    text-[var(--primary)]
                  "
                >
                  <Icon size={28} />
                </div>

                <span
                  className="
                    text-4xl
                    font-bold
                    text-[var(--primary-dark)]
                  "
                >
                  {item.value}
                </span>
              </div>

              <h3
                className="
                  mt-5
                  text-lg
                  font-semibold
                  text-[var(--primary-dark)]
                "
              >
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-[var(--muted)]">
                Total registrados
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

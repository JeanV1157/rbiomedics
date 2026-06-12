"use client";

import Link from "next/link";
import { PackagePlus, FolderPlus, ImagePlus } from "lucide-react";

const actions = [
  {
    title: "Nuevo producto",
    description: "Agregar un producto al catálogo.",
    href: "/dashboard/products/new",
    icon: PackagePlus,
  },

  {
    title: "Nueva categoría",
    description: "Crear categorías y subcategorías.",
    href: "/dashboard/categories/new",
    icon: FolderPlus,
  },

  {
    title: "Nueva portada",
    description: "Agregar imágenes al slider principal.",
    href: "/dashboard/home/new",
    icon: ImagePlus,
  },
];

export default function QuickActions() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[var(--primary-dark)]">
          Acciones rápidas
        </h2>

        <p className="mt-2 text-[var(--muted)]">
          Accede rápidamente a las tareas más utilizadas del panel.
        </p>
      </div>

      <div
        className="
          grid
          gap-6
          sm:grid-cols-2
          xl:grid-cols-3
        "
      >
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="
                group
                rounded-3xl
                border
                border-[var(--border)]
                bg-white
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[var(--primary)]
                hover:shadow-xl
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[var(--surface)]
                  text-[var(--primary)]
                  transition
                  group-hover:bg-[var(--primary)]
                  group-hover:text-white
                "
              >
                <Icon size={30} />
              </div>

              <h3
                className="
                  mt-6
                  text-xl
                  font-bold
                  text-[var(--primary-dark)]
                "
              >
                {action.title}
              </h3>

              <p
                className="
                  mt-3
                  leading-7
                  text-[var(--muted)]
                "
              >
                {action.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { Category } from "@/types/category";

interface Props {
  categories: Category[];

  selectedCategory: number | null;
  setSelectedCategory: (id: number | null) => void;

  selectedSubcategory: number | null;
  setSelectedSubcategory: (id: number | null) => void;

  openCategory: string | null;
  setOpenCategory: (value: string | null) => void;

  setPage: (page: number) => void;
}

export default function ProductSidebar({
  categories,
  selectedCategory,
  setSelectedCategory,
  selectedSubcategory,
  setSelectedSubcategory,
  openCategory,
  setOpenCategory,
  setPage,
}: Props) {
  return (
    <aside>
      <div className="sticky top-35">
        <h3 className="font-bold text-xl text-[var(--primary-dark)]">
          Categorías
        </h3>

        {/* TODOS */}
        <button
          onClick={() => {
            setSelectedCategory(null);
            setSelectedSubcategory(null);
            setOpenCategory(null);
            setPage(1);
          }}
          className={`
            w-full mt-5 rounded-xl px-4 py-3 text-left font-medium transition
            ${
              !selectedCategory
                ? "bg-[var(--primary)] text-white"
                : "hover:bg-[var(--surface)]"
            }
          `}
        >
          Todos
        </button>

        {/* LISTA */}
        <div className="mt-6 space-y-2">
          {categories.map((category) => {
            const isOpen = openCategory === category.name;

            return (
              <div
                key={category.id}
                className="rounded-xl border border-[var(--border)] overflow-hidden"
              >
                <div className="flex items-center justify-between px-4 py-3">
                  {/* CATEGORY */}
                  <button
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setSelectedSubcategory(null);
                      setPage(1);
                    }}
                    className="flex-1 text-left font-medium text-[var(--primary-dark)]"
                  >
                    {category.name}
                  </button>

                  {/* TOGGLE */}
                  <button
                    onClick={() =>
                      setOpenCategory(isOpen ? null : category.name)
                    }
                    className="ml-3 p-1 rounded-lg hover:bg-[var(--surface)]"
                  >
                    {isOpen ? (
                      <ChevronDown size={18} />
                    ) : (
                      <ChevronRight size={18} />
                    )}
                  </button>
                </div>

                {/* SUBCATEGORIES */}
                {isOpen && (
                  <div className="bg-[var(--surface-muted)]">
                    {category.subcategories?.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setSelectedSubcategory(sub.id);
                          setPage(1);
                        }}
                        className={`
                          block w-full px-8 py-2.5 text-left text-sm transition
                          ${
                            selectedSubcategory === sub.id
                              ? "bg-[var(--primary)] text-white"
                              : "text-[var(--muted)] hover:bg-white"
                          }
                        `}
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

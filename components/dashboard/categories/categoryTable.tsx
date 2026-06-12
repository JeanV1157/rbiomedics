import { useState } from "react";
import { ChevronDown, ChevronRight, FolderIcon } from "lucide-react";

import ActionButtons from "../ui/actionButtons";
import { Category, Subcategory } from "@/types/category";

interface Props {
  categories: Category[];
  onEditCategory: (category: Category) => void;
  onDeleteCategory: (id: number) => void;
  onEditSubcategory: (subcategory: Subcategory) => void;
  onDeleteSubcategory: (id: number) => void;
}

export default function CategoryTable({
  categories,
  onEditCategory,
  onDeleteCategory,
  onEditSubcategory,
  onDeleteSubcategory,
}: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-[var(--border)]
        bg-white
      "
    >
      {categories.map((category) => (
        <div
          key={category.id}
          className="
            border-b
            border-[var(--border)]
            last:border-none
          "
        >
          {/* Header categoría */}
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
              p-5
            "
          >
            <button
              onClick={() => setOpen(open === category.id ? null : category.id)}
              className="
                flex
                items-center
                gap-3
                text-left
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-[var(--surface)]
                "
              >
                {open === category.id ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </div>

              <div>
                <h3
                  className="
                    font-semibold
                    text-[var(--primary-dark)]
                  "
                >
                  {category.name}
                </h3>

                <p
                  className="
                    text-sm
                    text-[var(--muted)]
                  "
                >
                  {category.subcategories?.length ?? 0} subcategorías
                </p>
              </div>
            </button>

            <ActionButtons
              onEdit={() => onEditCategory(category)}
              onDelete={() => onDeleteCategory(category.id)}
            />
          </div>

          {/* Subcategorías */}
          {open === category.id && (
            <div
              className="
                border-t
                border-[var(--border)]
                bg-[var(--surface-muted)]
                px-6
                py-5
              "
            >
              {(category.subcategories ?? []).length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {(category.subcategories ?? []).map((subcategory) => (
                    <div
                      key={subcategory.id}
                      className="
        flex
        items-center
        gap-3
        rounded-full
        border
        border-[var(--border)]
        bg-white
        pl-4
        pr-2
        py-2
        shadow-sm
      "
                    >
                      <div className="flex items-center gap-2">
                        <FolderIcon
                          size={14}
                          className="text-[var(--primary)]"
                        />

                        <span
                          className="
            text-sm
            font-medium
            text-[var(--primary-dark)]
          "
                        >
                          {subcategory.name}
                        </span>
                      </div>

                      <ActionButtons
                        size="sm"
                        onEdit={() => onEditSubcategory(subcategory)}
                        onDelete={() => onDeleteSubcategory(subcategory.id)}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className="
                    rounded-2xl
                    border
                    border-dashed
                    border-[var(--border)]
                    bg-white
                    p-6
                    text-center
                  "
                >
                  <p className="text-sm text-[var(--muted)]">
                    Esta categoría aún no tiene subcategorías registradas.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

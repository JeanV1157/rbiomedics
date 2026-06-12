"use client";

import CategoryModal from "@/components/dashboard/categories/categoryModal";
import CategoryStats from "@/components/dashboard/categories/categoryStats";
import CategoryTable from "@/components/dashboard/categories/categoryTable";
import DashboardHeader from "@/components/dashboard/categories/dashboardHeader";
import SubcategoryModal from "@/components/dashboard/categories/subcategoryModal";
import { useState } from "react";
import {
  createCategory,
  deleteCategory,
  updateCategory,
} from "@/services/category.service";
import { Category, Subcategory } from "@/types/category";
import {
  createSubcategory,
  deleteSubcategory,
  updateSubcategory,
} from "@/services/subcategory.service";

interface CategoriesClientProps {
  initialCategories: Category[];
}

export default function CategoriesClient({
  initialCategories,
}: CategoriesClientProps) {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);

  const [openSubcategoryModal, setOpenSubcategoryModal] = useState(false);

  const [categories, setCategories] = useState(initialCategories);

  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [editingSubcategory, setEditingSubcategory] =
    useState<Subcategory | null>(null);

  const totalCategories = categories.length;

  const totalSubcategories = categories.reduce(
    (total, category) => total + (category.subcategories?.length ?? 0),
    0,
  );

  const handleSaveCategory = async (name: string) => {
    try {
      if (editingCategory) {
        const updatedCategory = await updateCategory(editingCategory.id, name);

        setCategories((prev) =>
          prev.map((category) =>
            category.id === updatedCategory.id
              ? {
                  ...category,
                  name: updatedCategory.name,
                }
              : category,
          ),
        );
      } else {
        const newCategory = await createCategory(name);

        setCategories((prev) => [...prev, newCategory]);
      }

      setOpenCategoryModal(false);
      setEditingCategory(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteCategory = async (id: number) => {
    try {
      await deleteCategory(id);

      setCategories((prev) => prev.filter((category) => category.id !== id));
    } catch (error) {
      console.error("Error eliminando categoría:", error);
    }
  };

  const handleSaveSubcategory = async (data: {
    name: string;
    categoryId: number;
  }) => {
    try {
      if (editingSubcategory) {
        const updatedSubcategory = await updateSubcategory(
          editingSubcategory.id,
          data.name,
          data.categoryId,
        );

        setCategories((prev) =>
          prev.map((category) => ({
            ...category,
            subcategories: (category.subcategories ?? []).map((subcategory) =>
              subcategory.id === updatedSubcategory.id
                ? updatedSubcategory
                : subcategory,
            ),
          })),
        );
      } else {
        const newSubcategory = await createSubcategory(
          data.name,
          data.categoryId,
        );

        setCategories((prev) =>
          prev.map((category) =>
            category.id === data.categoryId
              ? {
                  ...category,
                  subcategories: [
                    ...(category.subcategories ?? []),
                    newSubcategory,
                  ],
                }
              : category,
          ),
        );
      }

      setOpenSubcategoryModal(false);
      setEditingSubcategory(null);
    } catch (error) {
      console.error("Error guardando subcategoría:", error);
    }
  };

  const handleDeleteSubcategory = async (id: number) => {
    try {
      const deletedId = await deleteSubcategory(id);

      setCategories((prev) =>
        prev.map((category) => ({
          ...category,
          subcategories: (category.subcategories ?? []).filter(
            (subcategory) => subcategory.id !== deletedId,
          ),
        })),
      );
    } catch (error) {
      console.error("Error eliminando subcategoría:", error);
    }
  };

  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Categorías"
        description="Administra las categorías y subcategorías de los productos."
        actions={[
          {
            label: "Nueva categoría",
            onClick: () => setOpenCategoryModal(true),
          },
          {
            label: "Nueva subcategoría",
            onClick: () => setOpenSubcategoryModal(true),
          },
        ]}
      />

      <CategoryStats
        totalCategories={totalCategories}
        totalSubcategories={totalSubcategories}
      />

      <CategoryTable
        categories={categories}
        onEditCategory={(category) => {
          setEditingCategory(category);
        }}
        onDeleteCategory={handleDeleteCategory}
        onEditSubcategory={(subcategory) => {
          setEditingSubcategory(subcategory);
        }}
        onDeleteSubcategory={handleDeleteSubcategory}
      />

      <CategoryModal
        open={openCategoryModal || editingCategory !== null}
        initialData={editingCategory ?? undefined}
        onClose={() => {
          setOpenCategoryModal(false);
          setEditingCategory(null);
        }}
        onSave={handleSaveCategory}
      />

      <SubcategoryModal
        open={openSubcategoryModal || editingSubcategory !== null}
        initialData={editingSubcategory ?? undefined}
        onClose={() => {
          setOpenSubcategoryModal(false);
          setEditingSubcategory(null);
        }}
        categories={categories}
        onSave={handleSaveSubcategory}
      />
    </div>
  );
}

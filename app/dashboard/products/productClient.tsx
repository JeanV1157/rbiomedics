"use client";

import { useMemo, useState } from "react";

import { Product } from "@/types/product";
import ProductStats from "@/components/dashboard/products/productStats";
import ProductToolbar from "@/components/dashboard/products/productToolbar";
import ProductTable from "@/components/dashboard/products/productTablet";

import { ProductFormData } from "@/types/product-form";
import { Category } from "@/types/category";
import ProductModal from "@/components/dashboard/products/productModal/productModal";
import {
  createProductWithRelations,
  updateProductWithRelations,
  deleteProductWithRelations,
} from "@/services/productCrud.service";

interface ProductsClientProps {
  initialProducts: Product[];
  categories: Category[];
}

export default function ProductsClient({
  initialProducts,
  categories,
}: ProductsClientProps) {
  const [products, setProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [products, search]);

  const totalcategories = new Set(
    products.map((product) => product.category_id),
  ).size;

  function handleCreate() {
    setEditingProduct(null);

    setOpenModal(true);
  }

  function handleEditProduct(product: Product) {
    setEditingProduct(product);

    setOpenModal(true);
  }

  async function handleSaveProduct({
    formData,
    images,
    imagesToDelete = [],
  }: {
    formData: ProductFormData;
    images: File[];
    imagesToDelete?: string[];
  }) {
    try {
      if (editingProduct) {
        const updatedProduct = await updateProductWithRelations({
          product: editingProduct,
          formData,
          images,
          imagesToDelete,
        });

        setProducts((prev) =>
          prev.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product,
          ),
        );
      } else {
        const newProduct = await createProductWithRelations({
          formData,
          images,
        });

        setProducts((prev) => [...prev, newProduct]);
      }

      setEditingProduct(null);

      setOpenModal(false);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : JSON.stringify(error);
      console.error("Error al guardar producto:", errorMessage);
      // TODO: Agregar notificación al usuario (toast, modal, etc.)
    }
  }

  async function handleDeleteProduct(product: Product) {
    try {
      await deleteProductWithRelations(product);

      setProducts((prev) => prev.filter((item) => item.id !== product.id));
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : JSON.stringify(error);
      console.error("Error al eliminar producto:", errorMessage);
      // TODO: Agregar notificación al usuario (toast, modal, etc.)
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[var(--primary-dark)]">
          Productos
        </h1>

        <p className="mt-2 text-[var(--muted)]">
          Administra todos los productos de RBIOMEDICS.
        </p>
      </div>

      <ProductStats
        totalProducts={products.length}
        totalCategories={totalcategories}
      />

      <ProductToolbar
        search={search}
        onSearchChange={setSearch}
        onCreate={handleCreate}
      />

      <ProductTable
        products={filteredProducts}
        categories={categories}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />
      <ProductModal
        open={openModal}
        initialData={editingProduct}
        categories={categories}
        onClose={() => {
          setEditingProduct(null);

          setOpenModal(false);
        }}
        onSave={handleSaveProduct}
      />
    </div>
  );
}

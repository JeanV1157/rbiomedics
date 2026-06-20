"use client";

import ProductCatalog from "@/components/products/productCatalog";
import { getPublicCategories } from "@/services/public/publicCategory.service";
import { getPublicProducts } from "@/services/public/publicProduct.service";
import { Category } from "@/types/category";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

export default function ProductClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [productsData, categoriesData] = await Promise.all([
          getPublicProducts(),
          getPublicCategories(),
        ]);

        setProducts(productsData);
        setCategories(categoriesData);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Cargando productos...
      </main>
    );
  }

  return <ProductCatalog products={products} categories={categories} />;
}

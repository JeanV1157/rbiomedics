"use client";

import ProductCatalog from "@/components/products/productCatalog";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ProductCatalog products={PRODUCTS} categories={CATEGORIES} />
    </main>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { getFeaturedProducts } from "@/services/public/publicProduct.service";
import FeaturedProducts from "@/components/Home/featuredProducts";

export default function FeaturedProductsClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadFeaturedProducts() {
      try {
        const data = await getFeaturedProducts();
        setProducts(data);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Error desconocido";
        setError(message);
        console.error("Error cargando productos destacados:", err);
      } finally {
        setLoading(false);
      }
    }

    loadFeaturedProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          Cargando productos destacados...
        </div>
      </section>
    );
  }

  if (error || products.length === 0) {
    return null;
  }

  return (
    <FeaturedProducts sectionTitle="Productos Destacados" products={products} />
  );
}

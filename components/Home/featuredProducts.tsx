"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/types/product";
import ProductCard from "../cards/productCard";
import Link from "next/link";

interface FeaturedProductsProps {
  sectionTitle: string;
  products: Product[];
  onProductClick?: (productId: number) => void;
}

export default function FeaturedProducts({
  sectionTitle,
  products,
}: FeaturedProductsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (products.length === 0) return null;

  const showArrows = products.length > 3;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 3));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 3));
  };

  const desktopProducts =
    products.length <= 3
      ? products
      : [
          products[currentIndex],
          products[(currentIndex + 1) % products.length],
          products[(currentIndex + 2) % products.length],
        ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          {" "}
          <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--primary)]">
            {" "}
            Equipamiento Biomédico{" "}
          </span>{" "}
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--primary-dark)]">
            {" "}
            {sectionTitle}{" "}
          </h2>{" "}
          <p className="mt-3 text-[var(--muted)]">
            {" "}
            Equipos médicos y de laboratorio seleccionados para garantizar
            precisión, confiabilidad y alto rendimiento en entornos clínicos y
            científicos.{" "}
          </p>{" "}
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pr-4 scrollbar-hide">
            {products.map((product) => (
              <div key={product.id} className="w-[280px] shrink-0 snap-start">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* ================= TABLET + DESKTOP ================= */}
        <div className="hidden md:flex items-center gap-4">
          {/* Flecha izquierda */}
          {showArrows && (
            <button
              onClick={goToPrevious}
              className="hidden lg:flex h-12 w-12 items-center justify-center rounded-full border shadow-md hover:bg-[var(--primary)] hover:text-white"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* GRID CONTROLADO (evita cards alargadas) */}
          <div
            className="
            flex-1
            grid
            grid-cols-2
            lg:grid-cols-3
            gap-6
            justify-items-center
            items-stretch
          "
          >
            {desktopProducts.map((product) => (
              <div
                key={product.id}
                className="
                  w-full
                  max-w-[320px]
                  h-full
                "
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Flecha derecha */}
          {showArrows && (
            <button
              onClick={goToNext}
              className="hidden lg:flex h-12 w-12 items-center justify-center rounded-full border shadow-md hover:bg-[var(--primary)] hover:text-white"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {/* CTA */}
        <div className="w-full pt-8 flex justify-center">
          <Link
            href="/product"
            className="rounded-xl px-6 py-3 border border-primary font-semibold hover:bg-[var(--primary-dark)] hover:text-white transition"
          >
            Ver catálogo completo
          </Link>
        </div>
      </div>
    </section>
  );
}

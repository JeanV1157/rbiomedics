// components/FeaturedProducts.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductFeaturedCard from "../cards/productFeaturedCard";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price?: string;
  buttonText: string;
}

interface FeaturedProductsProps {
  sectionTitle: string;
  products: Product[];
  bannerImage: string;
  bannerTitle: string;
  bannerSubtitle: string;
  bannerButtonText: string;
  onProductClick?: (productId: number) => void;
  onBannerClick?: () => void;
}

export default function FeaturedProducts({
  sectionTitle,
  products,
  bannerImage,
  bannerTitle,
  bannerSubtitle,
  bannerButtonText,
  onProductClick,
  onBannerClick,
}: FeaturedProductsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const visibleProducts = [
    products[currentIndex],
    products[(currentIndex + 1) % products.length],
    products[(currentIndex + 2) % products.length],
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--primary)]">
            Equipamiento Biomédico
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--primary-dark)]">
            {sectionTitle}
          </h2>

          <p className="mt-3 text-[var(--muted)]">
            Equipos médicos y de laboratorio seleccionados para garantizar
            precisión, confiabilidad y alto rendimiento en entornos clínicos y
            científicos.
          </p>
        </div>
        <div className="w-full pb-8 flex justify-center">
          <button
            className="
      self-start
      rounded-xl
      px-6
      py-3
      text-primary
      border border-primary
      hover:text-white
      font-semibold
      transition
      hover:bg-[var(--primary-dark)]
    "
          >
            Ver catálogo completo
          </button>
        </div>

        {/* Carrusel */}
        <div className="flex items-center gap-4">
          {/* Flecha izquierda */}
          <button
            onClick={goToPrevious}
            className="
          hidden md:flex
          flex-shrink-0
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-[var(--border)]
          bg-white
          text-[var(--primary-dark)]
          shadow-md
          transition
          hover:bg-[var(--primary)]
          hover:text-white
        "
          >
            <ChevronLeft size={24} />
          </button>

          {/* Productos */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {visibleProducts.map((product) => (
              <ProductFeaturedCard
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                buttonText={product.buttonText}
                price={product.price}
                onButtonClick={() => onProductClick?.(product.id)}
              />
            ))}
          </div>

          {/* Flecha derecha */}
          <button
            onClick={goToNext}
            className="
          hidden md:flex
          flex-shrink-0
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-[var(--border)]
          bg-white
          text-[var(--primary-dark)]
          shadow-md
          transition
          hover:bg-[var(--primary)]
          hover:text-white
        "
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

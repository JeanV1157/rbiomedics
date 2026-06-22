"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Store } from "lucide-react";
import ProductCard from "../cards/productCard";
import { Product } from "@/types/product";
import { Category } from "@/types/category";

interface ProductDetailProps {
  product: Product;
  categories: Category[];
  relatedProducts?: Product[];
}

export default function ProductDetail({
  product,
  relatedProducts = [],
  categories,
}: ProductDetailProps) {
  const [zoom, setZoom] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [position, setPosition] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;

    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({ x, y });
  };

  const images = product.images ?? [];

  const mainImage = images[selectedImage]?.image ?? "/images/placeholder.webp";

  const category = categories.find(
    (category) => category.id === product.category_id,
  );

  const subcategory = category?.subcategories?.find(
    (subcategory) => subcategory.id === product.subcategory_id,
  );

  return (
    <section className="bg-gray-50 py-10 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm">
          <Link
            href="/product"
            className="
      font-medium
      text-[var(--primary)]
      transition
      hover:text-[var(--primary-dark)]
    "
          >
            Volver
          </Link>

          <ChevronRight size={16} className="text-[var(--muted)]" />

          <span className="text-[var(--muted)]">{category?.name}</span>

          <ChevronRight size={16} className="text-[var(--muted)]" />

          <span className="text-[var(--muted)]">{subcategory?.name}</span>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Imagen */}
          <div className="flex gap-4">
            {/* Miniaturas */}
            {images.length > 1 && (
              <div className="hidden md:flex flex-col gap-3">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(index)}
                    className={`
            relative
            h-20
            w-20
            overflow-hidden
            rounded-xl
            border-2
            bg-white
            transition
            ${
              selectedImage === index
                ? "border-[var(--primary)]"
                : "border-[var(--border)]"
            }
          `}
                  >
                    <Image
                      src={image.image}
                      alt={`${product.title}-${index}`}
                      fill
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Imagen principal */}
            <div
              className="
      flex-1
      overflow-hidden
      rounded-3xl
      border
      border-[var(--border)]
      bg-[var(--surface)]
      p-6
    "
            >
              <div
                onMouseEnter={() => setZoom(true)}
                onMouseLeave={() => setZoom(false)}
                onMouseMove={handleMouseMove}
                className="
        aspect-square
        overflow-hidden
        cursor-zoom-in
      "
              >
                <Image
                  src={mainImage}
                  alt={product.title}
                  width={1000}
                  height={1000}
                  priority
                  className="h-full w-full object-contain"
                  style={{
                    transform: zoom ? "scale(2)" : "scale(1)",
                    transformOrigin: `${position.x}% ${position.y}%`,
                    transition: "transform .15s ease-out",
                  }}
                />
              </div>
            </div>
          </div>
          {images.length > 1 && (
            <div className="mt-4 flex gap-3 overflow-x-auto md:hidden">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={`
          relative
          h-20
          w-20
          shrink-0
          overflow-hidden
          rounded-xl
          border-2
          ${
            selectedImage === index
              ? "border-[var(--primary)]"
              : "border-[var(--border)]"
          }
        `}
                >
                  <Image
                    src={image.image}
                    alt={`${product.title}-${index}`}
                    fill
                    className="object-contain p-2"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Información */}
          <div className="flex flex-col justify-center">
            <span
              className="
                inline-flex
                w-fit
                rounded-full
                bg-[var(--surface)]
                px-4
                py-2
                text-sm
                font-semibold
                text-[var(--primary)]
                uppercase
              "
            >
              {subcategory?.name}
            </span>

            <h1
              className="
                mt-5
                text-4xl
                font-bold
                text-[var(--primary-dark)]
              "
            >
              {product.title}
            </h1>

            <p
              className="
                mt-6
                leading-relaxed
                text-[var(--muted)] font-semibold
              "
            >
              {product.description}
            </p>

            {product.price && (
              <div className="mt-6">
                <p className="text-sm text-[var(--muted)]">
                  Precio referencial
                </p>

                <p
                  className="
                    text-3xl
                    font-bold
                    text-[var(--primary)]
                  "
                >
                  S/ {product.price}.00
                </p>
              </div>
            )}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-[var(--muted)]">
                <Store size={18} />
                <span className="font-medium">Tienda Autorizada</span>
              </div>

              <div className="flex items-center gap-2 text-[var(--muted)]">
                <ShieldCheck size={18} />
                <span className="font-medium">Producto con Garantía</span>
              </div>
            </div>
            <div className="mt-10 flex gap-4">
              <button
                className="
                  rounded-xl
                  bg-[var(--primary)]
                  px-8
                  py-4
                  text-white
                  font-semibold
                "
              >
                Solicitar Cotización
              </button>

              <button
                className="
                  rounded-xl
                  border
                  border-[var(--primary)]
                  px-8
                  py-4
                  text-[var(--primary)]
                  font-semibold
                "
              >
                WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Descripción */}
        <div
          className="
            mt-16
            rounded-3xl
            border
            border-[var(--border)]
            p-8
            bg-white
          "
        >
          <h2
            className="
              text-2xl
              font-bold
              text-[var(--primary-dark)]
            "
          >
            Descripción del producto
          </h2>

          <p
            className="
              mt-6
              leading-8
              text-[var(--muted)]
            "
          >
            {product.long_description}
          </p>
        </div>
        {product.specifications && product.specifications.length > 0 && (
          <div
            className="
        mt-10
        rounded-3xl
        border
        border-[var(--border)]
        overflow-hidden
      "
          >
            {/* Header */}
            <div
              className="
          bg-[var(--surface)]
          px-6
          py-5
          border-b
          border-[var(--border)]
        "
            >
              <h3
                className="
            text-xl
            font-bold
            text-[var(--primary-dark)]
            bg-white
          "
              >
                Especificaciones Técnicas
              </h3>

              <p className="mt-1 text-sm text-[var(--muted)]">
                Información técnica y características del producto.
              </p>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 bg-white">
              <ul className="space-y-4">
                {product.specifications.map((spec, index) => (
                  <li
                    key={index}
                    className="
                flex
                flex-col
                sm:flex-row
                gap-1
                sm:gap-3
              "
                  >
                    <span
                      className="
                  font-semibold
                  text-[var(--primary-dark)]
                "
                    >
                      • {spec.label}:
                    </span>

                    <span className="text-[var(--muted)]">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <div className="mb-8">
              <h2 className="mt-2 text-3xl font-bold text-[var(--primary-dark)]">
                Productos Relacionados
              </h2>
            </div>

            <div
              className="
        grid
        grid-cols-2
        md:grid-cols-4
        xl:grid-cols-5
        gap-6
      "
            >
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}

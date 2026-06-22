"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, title, description, price, images } = product;

  const image = images?.[0]?.image ?? "/images/placeholder.webp";

  return (
    <div
      className="
        group
        flex flex-col
        h-[360px]
        w-full
        overflow-hidden
        rounded-xl
        border border-[var(--border)]
        bg-white
        shadow-sm
        transition-all duration-300
        hover:shadow-lg
        hover:-translate-y-1
      "
    >
      {/* IMAGE */}
      <div className="relative h-48 w-full bg-white overflow-hidden flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          fill
          className="
      object-contain
      transition-transform duration-300
      group-hover:scale-105
    "
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 p-4">
        {/* TITLE */}
        <h3 className="text-sm md:text-base font-semibold text-center text-[var(--primary-dark)] line-clamp-3 uppercase">
          {title}
        </h3>

        {/* PRICE */}
        {price != null && (
          <p className="mt-2 text-center text-md text-[var(--primary-dark)]">
            S/ {price}
          </p>
        )}

        {/* CTA */}
        <div className="mt-auto pt-4">
          <Link
            href={`/product/${id}`}
            className="
              w-full
              block
              text-center
              rounded-lg
              bg-[var(--primary)]
              px-4 py-2
              text-sm font-medium text-white
              transition-all
              hover:bg-[var(--primary-dark)]
            "
          >
            Ver producto
          </Link>
        </div>
      </div>
    </div>
  );
}

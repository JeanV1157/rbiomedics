"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  price?: string | number;
  onButtonClick?: () => void;
}

export default function ProductCard({
  id,
  image,
  title,
  description,
  buttonText,
  price,
  onButtonClick,
}: ProductCardProps) {
  return (
    <div
      className="
    flex flex-col h-full
    overflow-hidden
    rounded-2xl
    border border-[var(--border)]
    bg-white
    transition-all duration-300
    hover:-translate-y-1
    hover:border-[var(--secondary)]
    hover:shadow-xl
  "
    >
      {/* Product Image */}
      <div
        className="
    flex flex-col h-full
    overflow-hidden
    rounded-xl
    border border-[var(--border)]
    bg-white
    transition-all duration-300
    hover:shadow-lg
    hover:border-[var(--primary)]
  "
      >
        {/* Imagen */}
        <div
          className="
      relative
      h-44
      bg-white
      p-4
      flex
      items-center
      justify-center
      border-b
      border-[var(--border)]
    "
        >
          <Image
            src={image}
            alt={title}
            width={250}
            height={250}
            className="
        max-h-full
        w-auto
        object-contain
        transition-transform
        duration-300
        hover:scale-105
      "
          />
        </div>

        {/* Info */}
        <div className="flex flex-col flex-1 p-4">
          <h3
            className="
        text-sm
        md:text-base
        font-semibold
        text-center
        text-[var(--primary-dark)]
        line-clamp-2
        min-h-[48px]
      "
          >
            {title}
          </h3>

          {price != null && (
            <p
              className="
          mt-3
          text-center
          text-lg
          font-bold
          text-[var(--primary)]
        "
            >
              S/ {price}
            </p>
          )}

          <div className="mt-auto pt-4 flex justify-center">
            <Link
              href={`/product/${id}`}
              className="
          rounded-lg
          bg-[var(--primary)]
          px-5
          py-2
          text-sm
          font-medium
          text-white
          transition-all
          hover:bg-[var(--primary-dark)]
        "
            >
              Leer más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

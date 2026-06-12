"use client";

import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  price?: string | number;
  onButtonClick?: () => void;
}

export default function ProductFeaturedCard({
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
      relative
      h-64
      bg-[var(--surface-muted)]
      flex
      items-center
      justify-center
      overflow-hidden
      border-b border-[var(--border)]
    "
      >
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="
        object-cover
        h-full
        w-full
        transition-transform
        duration-300
        group-hover:scale-105
      "
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-between flex-1 p-5">
        <div>
          <h3
            className="
        text-[var(--primary-dark)]
        text-lg
        font-bold
        text-center
        leading-tight
      "
          >
            {title}
          </h3>

          <p
            className="
        mt-3
        text-sm
        text-[var(--muted)]
        text-center
        leading-relaxed
      "
          >
            {description}
          </p>

          {/* Price */}
          {price != null && (
            <p className="mt-4 text-center text-xl text-[var(--primary-dark)]">
              S/ {price}.00
            </p>
          )}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={onButtonClick}
            className="
      inline-flex
      items-center
      gap-2
      rounded-full
      bg-[var(--primary)]
      px-6
      py-2.5
      text-sm
      font-semibold
      text-white
      shadow-sm
      transition-all
      duration-300
      hover:bg-[var(--primary-dark)]
      hover:shadow-md
      hover:-translate-y-0.5
    "
          >
            Leer más
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

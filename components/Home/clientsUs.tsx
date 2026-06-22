"use client";

import Image from "next/image";

interface Brand {
  id: number;
  image: string;
  name: string;
}

interface BrandsCarouselProps {
  title: string;
  brands: Brand[];
}

export default function ClientsCarousel({
  title,
  brands,
}: BrandsCarouselProps) {
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-white text-[var(--primary)] text-sm font-semibold mb-4">
            Empresas que Confían en Nosotros
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-dark)]">
            {title}
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="group overflow-hidden">
        <div
          className="flex w-max items-center gap-8 animate-marquee"
          style={{ animationDuration: "35s" }}
        >
          {marqueeBrands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="
                h-28
                w-56
                shrink-0
                rounded-2xl
                bg-white
                border border-[var(--border)]
                p-5
                flex items-center justify-center
                transition-all duration-300
                hover:shadow-lg
              "
            >
              <div className="relative w-full h-full">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface AboutSectionProps {
  backgroundImage: string;
  tagline: string;
  title: string;
  paragraphs: string[];
  logos: { image: string; alt: string }[];
}

export default function AboutSection({
  backgroundImage,
  tagline,
  title,
  paragraphs,
  logos,
}: AboutSectionProps) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ABOUT */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Imagen */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src={backgroundImage}
                alt={title}
                width={900}
                height={700}
                className="h-[300px] sm:h-[450px] lg:h-[550px] w-full object-cover"
              />
            </div>
          </div>

          {/* Contenido */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
              {tagline}
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--primary-dark)] leading-tight">
              {title}
            </h2>

            <div className="mt-5 h-1 w-24 rounded-full bg-[var(--secondary)]" />

            <div className="mt-8 space-y-5">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-8 text-[var(--muted)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Puntos de confianza */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                "Equipos Médicos",
                "Equipos de Laboratorio",
                "Soporte Técnico Especializado",
                "Mantenimiento Preventivo y Correctivo",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[var(--primary)] flex-shrink-0"
                  />
                  <span className="text-sm font-medium text-[var(--primary-dark)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marcas */}
        <div className="mt-20 border-t border-[var(--border)] pt-16">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
              Socios Tecnológicos
            </span>

            <h3 className="mt-3 text-2xl md:text-3xl font-bold text-[var(--primary-dark)]">
              Marcas que respaldan nuestra calidad
            </h3>

            <p className="mt-4 max-w-3xl mx-auto text-[var(--muted)]">
              Trabajamos con fabricantes y marcas reconocidas del sector médico
              y de laboratorio para ofrecer soluciones confiables y de alto
              rendimiento.
            </p>
          </div>

          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-2
              gap-5
            "
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="
                h-32
                bg-white
                border
                border-[var(--border)]
                rounded-xl
                flex
                items-center
                justify-center
                p-8
              "
              >
                <Image
                  src={logo.image}
                  alt={logo.alt}
                  width={160}
                  height={80}
                  className="
                  max-h-24
                  w-auto
                  object-contain
                "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

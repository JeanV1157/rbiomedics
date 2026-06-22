"use client";

import {
  Stethoscope,
  FlaskConical,
  TestTube,
  ShieldCheck,
  Wrench,
  Headphones,
  Settings,
  ClipboardPlus,
  Building2,
} from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const SERVICES = [
  {
    title: "Venta de Equipos Médicos",
    description:
      "Comercialización de equipos médicos para hospitales, clínicas y centros de salud.",
    icon: Stethoscope,
  },
  {
    title: "Equipos de Laboratorio e Instrumentación",
    description:
      "Suministro de equipos e instrumentos especializados para laboratorios clínicos, universitarios y de investigación.",
    icon: FlaskConical,
  },
  {
    title: "Reactivos e Insumos",
    description:
      "Distribución de reactivos, accesorios e insumos para laboratorios y equipos biomédicos.",
    icon: TestTube,
  },
  {
    title: "Mantenimiento y Reparación de Equipos",
    description:
      "Servicios de mantenimiento preventivo y correctivo para garantizar el óptimo funcionamiento de los equipos.",
    icon: Wrench,
  },
  {
    title: "Instalación y Soporte Técnico",
    description:
      "Instalación, puesta en marcha, configuración y asistencia técnica profesional para equipos médicos y de laboratorio.",
    icon: Settings,
  },
  {
    title: "Asesoría Biomédica y Soluciones Integrales",
    description:
      "Orientación técnica especializada y atención personalizada para hospitales, clínicas, universidades y centros de investigación.",
    icon: ClipboardPlus,
  },
];
const SERVICES_BG = "/images/services3.webp";

export default function ServicesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -380,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 380,
      behavior: "smooth",
    });
  };

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Imagen de fondo */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90" />
      <div className="relative w-full mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center rounded-full bg-[var(--surface-muted)] px-4 py-2 text-sm font-medium text-[var(--primary)]">
            Nuestros Servicios
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-[var(--primary-dark)]">
            Soluciones Biomédicas Integrales
          </h2>

          <p className="mt-5 text-lg text-[var(--muted)] leading-relaxed">
            Brindamos equipamiento, mantenimiento y soporte técnico
            especializado para garantizar la continuidad operativa de
            hospitales, clínicas, laboratorios, universidades y centros de
            investigación.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {/* Flecha izquierda */}
          <button
            onClick={scrollLeft}
            className="
      hidden lg:flex
      shrink-0
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      bg-white
      border
      border-[var(--border)]
      shadow-lg
      hover:bg-[var(--primary)]
      hover:text-white
      transition
    "
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="
      flex-1
      flex
      gap-6
      overflow-x-auto
      scroll-smooth
      snap-x
      snap-mandatory
      no-scrollbar
      p-4
    "
          >
            {SERVICES.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="
            snap-start
            shrink-0
            w-[320px]
            md:w-[340px]
            lg:w-[360px]
            bg-white
            border
            border-[var(--border)]
            rounded-2xl
            p-6
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[var(--secondary)]
            hover:shadow-xl
          "
                >
                  <div
                    className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-xl
              bg-[var(--surface-muted)]
              text-[var(--primary)]
              transition-all
              duration-300
              group-hover:bg-[var(--primary)]
              group-hover:text-white
            "
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-[var(--primary-dark)]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[var(--muted)] leading-relaxed">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Flecha derecha */}
          <button
            onClick={scrollRight}
            className="
      hidden lg:flex
      shrink-0
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      bg-white
      border
      border-[var(--border)]
      shadow-lg
      hover:bg-[var(--primary)]
      hover:text-white
      transition
    "
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <div className="flex justify-center py-6">
        <div className="h-px w-32 bg-[var(--border)]" />
      </div>
    </section>
  );
}

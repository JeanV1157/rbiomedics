"use client";

import {
  Stethoscope,
  FlaskConical,
  TestTube,
  Wrench,
  Settings,
  ClipboardPlus,
} from "lucide-react";

export const SERVICES = [
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

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary-dark)]">
            Nuestros Servicios
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--muted)] max-w-2xl mx-auto">
            Soluciones biomédicas integrales para hospitales, clínicas y
            laboratorios
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map((service) => {
            const whatsappMessage = `Hola, estoy interesado en el servicio: ${service.title}. ¿Podrían darme más información?`;

            const whatsappUrl = `https://wa.me/51961446461?text=${encodeURIComponent(
              whatsappMessage,
            )}`;
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="
              bg-white
              border border-[var(--border)]
              rounded-xl
              p-4 sm:p-6
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
              hover:border-[var(--secondary)]
              flex flex-col
              gap-3
            "
              >
                {/* Icon */}
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[var(--surface-muted)] text-[var(--primary)]">
                  <Icon size={20} className="sm:w-6 sm:h-6" />
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-lg font-semibold text-[var(--primary-dark)] leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
    mt-auto
    w-fit
    text-[12px]
    font-normal
    text-[var(--primary)]
    border-b
    border-[var(--primary)]
    hover:opacity-70
    transition
  "
                >
                  Saber más
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

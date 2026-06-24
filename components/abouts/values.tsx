"use client";

import Image from "next/image";
import { Target, Eye } from "lucide-react";

interface MissionVisionSectionProps {
  backgroundImage: string;
}

export default function MissionVisionSection({
  backgroundImage,
}: MissionVisionSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Misión y Visión"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[var(--primary-dark)]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Nuestra Esencia
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-white/80">
            Trabajamos con compromiso, innovación y excelencia para contribuir
            al fortalecimiento del sector salud, educativo y científico.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Misión */}
          <div
            className="
              rounded-3xl
              border border-white/10
              bg-white/10
              backdrop-blur-md
              p-8 lg:p-10
            "
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent)] text-[var(--primary-dark)]">
                <Target size={28} />
              </div>

              <h3 className="text-2xl font-bold text-white">Nuestra Misión</h3>
            </div>

            <p className="leading-8 text-white/90">
              Brindar soluciones integrales en la comercialización, instalación,
              mantenimiento y soporte técnico de equipos médicos y de
              laboratorio para hospitales, clínicas, universidades y
              laboratorios, ofreciendo productos de alta calidad, atención
              especializada y servicios confiables que contribuyan al desarrollo
              de la salud, la ciencia y la tecnología en el Perú.
            </p>
          </div>

          {/* Visión */}
          <div
            className="
              rounded-3xl
              border border-white/10
              bg-white/10
              backdrop-blur-md
              p-8 lg:p-10
            "
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--secondary)] text-white">
                <Eye size={28} />
              </div>

              <h3 className="text-2xl font-bold text-white">Nuestra Visión</h3>
            </div>

            <p className="leading-8 text-white/90">
              Ser una empresa líder y referente a nivel nacional en soluciones
              biomédicas y de laboratorio, reconocida por nuestra excelencia en
              servicio técnico, innovación, calidad y compromiso con nuestros
              clientes, contribuyendo al fortalecimiento del sector salud,
              educativo y científico mediante tecnología de vanguardia y soporte
              especializado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

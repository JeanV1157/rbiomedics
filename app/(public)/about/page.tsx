"use client";

import AboutSection from "@/components/abouts/aboutSection";
import MissionVisionSection from "@/components/abouts/values";

const ABOUT_DATA = {
  backgroundImage: "/images/about.jpg",
  tagline: "Pasión por superar expectativas",
  title: "Nosotros",
  paragraphs: [
    "Corporación RBIOMEDICS es una empresa especializada en la comercialización, mantenimiento y soporte técnico de equipos médicos, equipos de laboratorio, instrumentos de medición, reactivos e insumos especializados para hospitales, clínicas, universidades, centros de investigación y laboratorios en general.",
    "Brindamos soluciones integrales respaldadas por tecnología de calidad, asesoría personalizada y un equipo técnico altamente capacitado, garantizando la instalación, mantenimiento y óptimo funcionamiento de cada equipo. Nuestro compromiso con la innovación, la eficiencia y la atención cercana nos permite construir relaciones de confianza y ofrecer un servicio confiable antes, durante y después de cada proyecto.",
  ],
  logos: [
    {
      image: "/images/logos/bpa.png",
      alt: "BPA Logo",
    },
    {
      image: "/images/logos/digemid.png",
      alt: "DIGEMID Logo",
    },
    {
      image: "/images/logos/ccl.png",
      alt: "CCL Logo",
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <AboutSection
        backgroundImage={ABOUT_DATA.backgroundImage}
        tagline={ABOUT_DATA.tagline}
        title={ABOUT_DATA.title}
        paragraphs={ABOUT_DATA.paragraphs}
        logos={ABOUT_DATA.logos}
      />
      <MissionVisionSection backgroundImage="/images/values.jpg" />
    </main>
  );
}

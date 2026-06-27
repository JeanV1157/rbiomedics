import ServicesComplete from "@/components/servicesSec/serviceComplete";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios Biomédicos en Perú | RBIOMEDICS",
  description:
    "RBIOMEDICS ofrece servicios biomédicos especializados en instalación, mantenimiento, reparación y soporte técnico de equipos médicos en hospitales y clínicas en Perú.",

  alternates: {
    canonical: "https://rbiomedics.com/services",
  },

  openGraph: {
    title: "Servicios Biomédicos en Perú | RBIOMEDICS",
    description:
      "Instalación, mantenimiento y soporte técnico de equipos biomédicos para clínicas y hospitales en Perú.",
    url: "https://rbiomedics.com/services",
    siteName: "RBIOMEDICS",
    images: [
      {
        url: "https://rbiomedics.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_PE",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesComplete />
    </>
  );
}

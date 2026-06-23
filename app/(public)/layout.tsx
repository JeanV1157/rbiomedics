import type { Metadata } from "next";
import Header from "@/components/Home/header";
import Footer from "@/components/Home/footer";
import TopBar from "@/components/Home/topBar";
import ScrollToTop from "@/components/Home/ui/scrollTop";
import { FloatingWhatsApp } from "@/components/Home/ui/floatingWhatsApp";

export const metadata: Metadata = {
  title: "RBIOMEDICS | Equipos e Insumos Biomédicos",
  description:
    "RBIOMEDICS ofrece equipos biomédicos, insumos médicos y soluciones especializadas para hospitales, clínicas, laboratorios y profesionales de la salud. Calidad, innovación y soporte especializado.",
  keywords: [
    "equipos biomédicos",
    "insumos médicos",
    "equipamiento hospitalario",
    "equipos médicos",
    "laboratorio clínico",
    "hospitales",
    "clínicas",
    "tecnología médica",
    "RBIOMEDICS",
    "Perú",
  ],
  authors: [{ name: "RBIOMEDICS" }],
  creator: "RBIOMEDICS",
  publisher: "RBIOMEDICS",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Header />
      {children}
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}

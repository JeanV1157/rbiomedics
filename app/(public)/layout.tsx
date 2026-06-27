import type { Metadata } from "next";
import Header from "@/components/Home/header";
import Footer from "@/components/Home/footer";
import TopBar from "@/components/Home/topBar";
import ScrollToTop from "@/components/Home/ui/scrollTop";
import { FloatingWhatsApp } from "@/components/Home/ui/floatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rbiomedics.com"),

  title: {
    default:
      "RBIOMEDICS | Equipos Biomédicos, Insumos Médicos y Tecnología Hospitalaria en Perú",
    template: "%s | RBIOMEDICS",
  },

  description:
    "RBIOMEDICS es una empresa en Perú especializada en equipos biomédicos, insumos médicos, laboratorio clínico y soluciones hospitalarias para clínicas y hospitales.",

  keywords: [
    "equipos biomédicos Perú",
    "insumos médicos Perú",
    "equipos hospitalarios",
    "laboratorio clínico Perú",
    "proveedores médicos Perú",
    "tecnología médica",
  ],

  authors: [{ name: "RBIOMEDICS" }],
  creator: "RBIOMEDICS",
  publisher: "RBIOMEDICS",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.rbiomedics.com",
  },

  openGraph: {
    title: "RBIOMEDICS | Tecnología Biomédica en Perú",
    description:
      "Equipos biomédicos, insumos médicos y soluciones hospitalarias para clínicas y hospitales en Perú.",
    url: "https://www.rbiomedics.com",
    siteName: "RBIOMEDICS",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "https://www.rbiomedics.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RBIOMEDICS Perú",
    description:
      "Equipos biomédicos, insumos médicos y tecnología hospitalaria.",
    images: ["https://www.rbiomedics.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "RBIOMEDICS",
    url: "https://www.rbiomedics.com",
    logo: "https://www.rbiomedics.com/logo.png",
    image: "https://www.rbiomedics.com/og-image.png",
    description:
      "Empresa especializada en equipos biomédicos, insumos médicos y soluciones hospitalarias en Perú.",
    telephone: "+51-961-446-461",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PE",
    },
    areaServed: "Peru",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+51-961-446-461",
    },
  };

  return (
    <html lang="es">
      <body>
        {/* 🔥 SEO AVANZADO (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <ScrollToTop />
        <TopBar />
        <Header />

        {children}

        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}

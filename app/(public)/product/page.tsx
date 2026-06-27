import ProductClient from "./productClient";

export const metadata = {
  title: {
    default: "Equipos Biomédicos en Perú",
    template: "%s | RBIOMEDICS",
  },
  description: "...",
  alternates: {
    canonical: "https://rbiomedics.com/product",
  },
};

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ProductClient />
    </main>
  );
}

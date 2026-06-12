import { notFound } from "next/navigation";

import ProductDetail from "@/components/products/productDetail";
import { PRODUCTS } from "@/data/products";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = PRODUCTS.find((p) => p.id === Number(id));

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}

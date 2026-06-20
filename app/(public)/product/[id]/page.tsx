import { notFound } from "next/navigation";

import ProductDetail from "@/components/products/productDetail";
import {
  getPublicProductById,
  getPublicProducts,
} from "@/services/public/publicProduct.service";
import { getPublicCategories } from "@/services/public/publicCategory.service";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const [product, categories, products] = await Promise.all([
    getPublicProductById(Number(id)),
    getPublicCategories(),
    getPublicProducts(),
  ]);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.id !== product.id && item.category_id === product.category_id,
    )
    .slice(0, 4);

  return (
    <ProductDetail
      product={product}
      categories={categories}
      relatedProducts={relatedProducts}
    />
  );
}

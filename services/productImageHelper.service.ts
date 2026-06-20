import { Product } from "@/types/product";
import { ProductImage } from "@/types/product-image";
import { getProductImageUrl } from "./productImage.service";

/**
 * Obtiene la imagen de portada de un producto
 * Prioridad: primera imagen (sort_order = 0) o la primera en general
 */
export function getProductCoverImage(product: Product): ProductImage | null {
  if (!product.images?.length) return null;

  return (
    product.images.find((img) => img.sort_order === 0) ??
    product.images[0] ??
    null
  );
}

/**
 * Obtiene la URL pública de la portada del producto
 */
export function getProductCoverImageUrl(product: Product): string {
  const coverImage = getProductCoverImage(product);
  return coverImage
    ? getProductImageUrl(coverImage.image)
    : "/images/product-placeholder.png";
}

/**
 * Obtiene todas las URLs públicas de las imágenes del producto en orden
 */
export function getProductImageUrls(product: Product): string[] {
  if (!product.images?.length) return [];

  return product.images
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((img) => getProductImageUrl(img.image));
}

import { supabase } from "@/lib/supabase";
import { Product } from "@/types/product";
import { ProductImage } from "@/types/product-image";
import { getProductImageUrl } from "../productImage.service";

export async function getPublicProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select(
      `
      id,
      title,
      description,
      long_description,
      price,
      category_id,
      subcategory_id,
      created_at,
      updated_at,
      product_images(
        id,
        product_id,
        image,
        sort_order,
        created_at
      ),
      product_specifications(
        id,
        product_id,
        label,
        value,
        created_at
      )
    `,
    )
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return (data ?? []).map(
    (product: any): Product => ({
      id: product.id,
      title: product.title,
      description: product.description,
      long_description: product.long_description,
      price: product.price,
      category_id: product.category_id,
      subcategory_id: product.subcategory_id,
      created_at: product.created_at,
      updated_at: product.updated_at,
      images: (product.product_images ?? [])
        .sort((a: any, b: any) => a.sort_order - b.sort_order)
        .map(
          (img: any): ProductImage => ({
            id: img.id,
            product_id: img.product_id,
            image: getProductImageUrl(img.image),
            sort_order: img.sort_order,
            created_at: img.created_at,
          }),
        ),
      specifications: product.product_specifications ?? [],
    }),
  );
}

// services/public/publicProduct.service.ts

export async function getPublicProductById(id: number) {
  const { data, error } = await supabase
    .from("products")
    .select(
      `
    *,
    categories (
      id,
      name
    ),
    subcategories (
      id,
      name
    ),
    product_images (*),
    product_specifications (*)
  `,
    )
    .eq("id", id)
    .single();

  if (error) {
    return null;
  }

  return {
    ...data,
    images:
      data.product_images?.map((image) => ({
        ...image,
        image: getProductImageUrl(image.image),
      })) ?? [],
    specifications: data.product_specifications ?? [],
  };
}

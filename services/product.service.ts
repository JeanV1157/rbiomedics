import { supabase } from "@/lib/supabase";
import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select(
      `
        *,
        specifications:product_specifications(*)
      `,
    )
    .order("id", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}

interface ProductPayload {
  title: string;
  description: string;
  long_description: string | null;
  image: string | null;
  price: number | null;
  category_id: number;
  subcategory_id: number;
}

export async function createProduct(product: ProductPayload): Promise<Product> {
  const { data, error } = await supabase
    .from("products")
    .insert(product)
    .select(
      `
        *,
        specifications:product_specifications(*)
      `,
    )
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function updateProduct(
  id: number,
  product: ProductPayload,
): Promise<Product> {
  const { data, error } = await supabase
    .from("products")
    .update(product)
    .eq("id", id)
    .select(
      `
        *,
        specifications:product_specifications(*)
      `,
    )
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function deleteProduct(id: number): Promise<void> {
  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}

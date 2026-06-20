import { supabase } from "@/lib/supabase";

export async function createProductImages(productId: number, images: string[]) {
  if (images.length === 0) return;

  const payload = images.map((image, index) => ({
    product_id: productId,
    image,
    sort_order: index,
  }));

  const { error } = await supabase.from("product_images").insert(payload);

  if (error) {
    throw new Error(error.message);
  }
}

export async function deleteProductImages(
  productId: number,
  imagePaths?: string[],
) {
  let query = supabase
    .from("product_images")
    .delete()
    .eq("product_id", productId);

  // Si se proporcionan rutas específicas, eliminar solo esas
  if (imagePaths && imagePaths.length > 0) {
    query = query.in("image", imagePaths);
  }

  const { error } = await query;

  if (error) {
    throw new Error(error.message);
  }
}

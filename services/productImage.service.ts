import { supabase } from "@/lib/supabase";

const BUCKET = "products";

export async function uploadProductImage(file: File) {
  const now = new Date();

  const year = now.getFullYear();

  const month = String(now.getMonth() + 1).padStart(2, "0");

  const day = String(now.getDate()).padStart(2, "0");

  const extension = file.name.split(".").pop()?.toLowerCase();

  const fileName = `${Date.now()}-${crypto.randomUUID()}.${extension}`;

  const filePath = `${year}/${month}/${day}/${fileName}`;

  const { error } = await supabase.storage.from(BUCKET).upload(filePath, file);

  if (error) {
    throw new Error(
      `Error al subir imagen: ${error.message || JSON.stringify(error)}`,
    );
  }

  return filePath;
}

export function getProductImageUrl(path: string | null) {
  if (!path) return "/images/product-placeholder.png";

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);

  return data.publicUrl;
}

export async function deleteProductImage(path: string | null) {
  if (!path) return;

  const { error } = await supabase.storage.from(BUCKET).remove([path]);

  if (error) {
    throw new Error(
      `Error al eliminar imagen: ${error.message || JSON.stringify(error)}`,
    );
  }
}

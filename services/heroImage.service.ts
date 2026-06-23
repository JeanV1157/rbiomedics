import { supabase } from "@/lib/supabase";

const BUCKET_NAME = "hero";

/**
 * Subir imagen al Storage
 */
export async function uploadHeroImage(file: File): Promise<string> {
  const fileExt = file.name.split(".").pop();
  const fileName = `${crypto.randomUUID()}.${fileExt}`;

  const filePath = fileName;

  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  return filePath;
}

/**
 * Eliminar imagen del Storage
 *
 * IMPORTANTE: Esta función debe ser llamada ANTES de eliminar el registro
 * de la base de datos. Si falla, lanza error y el registro no debe ser eliminado.
 * Esto previene huérfanos de archivos en el Storage.
 */
export async function deleteHeroImageFromStorage(
  imagePath: string,
): Promise<void> {
  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .remove([imagePath]);

  if (error) {
    throw new Error(error.message);
  }
}

/**
 * Obtener URL pública
 */
export function getHeroImageUrl(imagePath: string): string {
  const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(imagePath);

  return data.publicUrl;
}

export async function getActiveHeroImages() {
  const { data, error } = await supabase
    .from("hero_images")
    .select("*")
    .eq("is_active", true)
    .order("order_index", { ascending: true });

  if (error) throw error;

  return data.map((item) => ({
    ...item,
    image_url: getHeroImageUrl(item.image_path),
  }));
}

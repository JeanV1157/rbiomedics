// services/hero.service.ts

import { supabase } from "@/lib/supabase";
import { HeroImage } from "@/types/hero-image";

const TABLE_NAME = "hero_images";

/**
 * Obtener todas las imágenes del hero
 */
export async function getHeroImages(): Promise<HeroImage[]> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("*")
    .order("order_index", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}

/**
 * Obtener una imagen por id
 */
export async function getHeroImageById(id: string): Promise<HeroImage | null> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

/**
 * Crear registro
 */
export async function createHeroImage(
  heroImage: Omit<HeroImage, "id" | "created_at" | "updated_at">,
): Promise<HeroImage> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .insert(heroImage)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

/**
 * Actualizar registro
 */
export async function updateHeroImage(
  id: string,
  heroImage: Partial<Omit<HeroImage, "id" | "created_at" | "updated_at">>,
): Promise<HeroImage> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update(heroImage)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

/**
 * Eliminar registro
 *
 * NOTA: Esta función debe ser llamada DESPUÉS de que el archivo
 * haya sido eliminado del Storage. No llamar directamente;
 * usar heroCrud.removeHero() para asegurar el flujo correcto.
 */
export async function deleteHeroImage(id: string): Promise<void> {
  const { error } = await supabase.from(TABLE_NAME).delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}

/**
 * Actualizar el orden de una imagen
 */
export async function updateHeroImageOrder(
  id: string,
  orderIndex: number,
): Promise<HeroImage> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update({
      order_index: orderIndex,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

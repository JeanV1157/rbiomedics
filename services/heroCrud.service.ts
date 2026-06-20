import {
  createHeroImage,
  deleteHeroImage,
  getHeroImageById,
  updateHeroImage,
} from "@/services/hero.service";
import { HeroImage } from "@/types/hero-image";
import {
  deleteHeroImageFromStorage,
  uploadHeroImage,
} from "./heroImage.service";

interface CreateHeroData {
  file: File;
  order_index: number;
  is_active: boolean;
}

interface UpdateHeroData {
  id: string;
  file?: File;
  order_index: number;
  is_active: boolean;
}

/**
 * Crear Hero
 */
export async function createHero(data: CreateHeroData): Promise<HeroImage> {
  const imagePath = await uploadHeroImage(data.file);

  return await createHeroImage({
    image_path: imagePath,
    order_index: data.order_index,
    is_active: data.is_active,
  });
}

/**
 * Actualizar Hero
 */
export async function updateHero(data: UpdateHeroData): Promise<HeroImage> {
  const hero = await getHeroImageById(data.id);

  if (!hero) {
    throw new Error("La imagen no existe.");
  }

  let imagePath = hero.image_path;

  if (data.file) {
    const newImagePath = await uploadHeroImage(data.file);

    await deleteHeroImageFromStorage(hero.image_path);

    imagePath = newImagePath;
  }

  return await updateHeroImage(data.id, {
    image_path: imagePath,
    order_index: data.order_index,
    is_active: data.is_active,
  });
}

/**
 * Eliminar Hero - Flujo seguro
 *
 * Secuencia:
 * 1. Obtener el registro de hero_images
 * 2. Obtener el image_path
 * 3. Eliminar el archivo del Storage
 * 4. Solo si la eliminación fue exitosa, eliminar el registro de la tabla
 *
 * Esto asegura que no hay orfandades de archivos en el Storage
 */
export async function removeHero(id: string): Promise<void> {
  // 1. Obtener el registro de hero_images
  const hero = await getHeroImageById(id);

  if (!hero) {
    throw new Error("La imagen no existe.");
  }

  // 2. Obtener el image_path (se obtiene del registro)
  const imagePath = hero.image_path;

  // 3. Eliminar el archivo del Storage
  // Si falla, lanza error y no continúa
  await deleteHeroImageFromStorage(imagePath);

  // 4. Solo si la eliminación del Storage fue exitosa,
  //    eliminar el registro de la tabla
  await deleteHeroImage(id);
}

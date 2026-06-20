/**
 * Tipo interno para manejar imágenes en el modal
 * Combina propiedades de imágenes guardadas y nuevas
 */
export interface ProductImagePreview {
  // Identificador único para el preview
  id?: number; // existe si viene de la BD (product_images.id)

  // Path en Supabase Storage
  image: string;

  // URL pública o blob URL para mostrar
  preview: string;

  // Archivo solo para imágenes nuevas
  file?: File;

  // Orden en la galería
  sort_order?: number;
}

export interface ProductImage {
  id: number;
  product_id: number;
  image: string; // path en Supabase Storage
  sort_order: number;
  created_at: string;
}

// Validación de tipos de archivo permitidos
export const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/svg+xml",
] as const;

export const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10MB

// Validar si un archivo es una imagen permitida
export function isValidImageFile(file: File): boolean {
  return (
    ALLOWED_IMAGE_TYPES.includes(
      file.type as (typeof ALLOWED_IMAGE_TYPES)[number],
    ) && file.size <= MAX_IMAGE_SIZE
  );
}

// Obtener error de validación
export function getImageValidationError(file: File): string | null {
  if (
    !ALLOWED_IMAGE_TYPES.includes(
      file.type as (typeof ALLOWED_IMAGE_TYPES)[number],
    )
  ) {
    return `Tipo de archivo no permitido. Use: JPG, PNG, WEBP o SVG`;
  }
  if (file.size > MAX_IMAGE_SIZE) {
    return `Archivo muy grande. Máximo: 10MB`;
  }
  return null;
}

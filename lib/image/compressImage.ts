export async function compressImageFile(
  file: File,
  options: { maxWidth?: number; quality?: number } = {},
): Promise<File> {
  const { maxWidth = 1920, quality = 0.8 } = options;

  if (typeof window === "undefined" || !file.type.startsWith("image/")) {
    return file;
  }

  const bitmap = await createImageBitmap(file);

  const scale = Math.min(1, maxWidth / bitmap.width);
  const targetWidth = Math.round(bitmap.width * scale);
  const targetHeight = Math.round(bitmap.height * scale);

  const canvas = document.createElement("canvas");
  canvas.width = targetWidth;
  canvas.height = targetHeight;

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return file;
  }

  ctx.drawImage(bitmap, 0, 0, targetWidth, targetHeight);

  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, "image/webp", quality),
  );

  if (!blob) {
    return file;
  }

  const newName = file.name.replace(/\.[^.]+$/, "") + ".webp";

  return new File([blob], newName, { type: "image/webp" });
}

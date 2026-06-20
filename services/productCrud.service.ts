import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} from "./product.service";

import { uploadProductImage, deleteProductImage } from "./productImage.service";

import {
  createProductImages,
  deleteProductImages,
} from "./productImages.service";

import {
  createProductSpecifications,
  updateProductSpecifications,
  deleteProductSpecifications,
} from "./productSpecification.service";

import { Product } from "@/types/product";
import { ProductFormData } from "@/types/product-form";

/**
 * CREAR producto con todas sus relaciones
 *
 * Transacción:
 * 1. Crear producto base
 * 2. Subir imágenes al Storage
 * 3. Crear registros en product_images
 * 4. Crear especificaciones
 * 5. Obtener producto completo
 *
 * Si falla en cualquier punto, se revierte todo
 */
export async function createProductWithRelations({
  formData,
  images,
}: {
  formData: ProductFormData;
  images: File[];
}): Promise<Product> {
  let productId: number | null = null;
  const uploadedImagePaths: string[] = [];

  try {
    // 1. Crear producto base
    const product = await createProduct({
      title: formData.title,
      description: formData.description,
      long_description: formData.long_description,
      price: formData.price,
      category_id: formData.category_id,
      subcategory_id: formData.subcategory_id,
    });

    productId = product.id;

    // 2. Subir imágenes al Storage
    const uploadedImages = await Promise.all(
      images.map((image) => uploadProductImage(image)),
    );

    uploadedImagePaths.push(...uploadedImages);

    // 3. Guardar imágenes en la tabla
    await createProductImages(product.id, uploadedImages);

    // 4. Guardar especificaciones
    await createProductSpecifications(product.id, formData.specifications);

    // 5. Obtener el producto con todas sus relaciones
    const createdProduct = await getProduct(product.id);

    return createdProduct;
  } catch (error) {
    // ROLLBACK: Limpiar imágenes subidas en caso de error
    if (uploadedImagePaths.length > 0) {
      console.error(
        "Eliminando imágenes del Storage debido a error:",
        uploadedImagePaths,
      );
      await Promise.allSettled(
        uploadedImagePaths.map((path) => deleteProductImage(path)),
      );
    }

    // ROLLBACK: Eliminar producto si fue creado pero falló después
    if (productId) {
      console.error("Eliminando producto incompleto:", productId);
      await Promise.allSettled([deleteProduct(productId)]);
    }

    throw error;
  }
}

/**
 * ACTUALIZAR producto con todas sus relaciones
 *
 * Transacción:
 * 1. Actualizar datos básicos
 * 2. Eliminar imágenes especificadas del Storage
 * 3. Eliminar registros de imágenes de la BD
 * 4. Subir nuevas imágenes al Storage
 * 5. Crear registros de nuevas imágenes en la BD
 * 6. Actualizar especificaciones
 * 7. Obtener producto actualizado
 *
 * Si falla en cualquier punto después de eliminar, puede haber inconsistencias
 */
export async function updateProductWithRelations({
  product,
  formData,
  images,
  imagesToDelete = [],
}: {
  product: Product;
  formData: ProductFormData;
  images: File[];
  imagesToDelete?: string[];
}): Promise<Product> {
  const uploadedImagePaths: string[] = [];

  try {
    // 1. Actualizar datos básicos
    await updateProduct(product.id, {
      title: formData.title,
      description: formData.description,
      long_description: formData.long_description,
      price: formData.price,
      category_id: formData.category_id,
      subcategory_id: formData.subcategory_id,
    });

    // 2-3. Eliminar imágenes especificadas
    if (imagesToDelete.length > 0) {
      // Eliminar del Storage
      await Promise.allSettled(
        imagesToDelete.map((path) => deleteProductImage(path)),
      );

      // Eliminar de la BD
      await deleteProductImages(product.id, imagesToDelete);
    }

    // 4-5. Subir y crear nuevas imágenes
    if (images.length > 0) {
      const uploadedImages = await Promise.all(
        images.map((image) => uploadProductImage(image)),
      );

      uploadedImagePaths.push(...uploadedImages);

      // Calcular sort_order: las nuevas imágenes van al final
      const existingImagesCount =
        (product.images?.length ?? 0) - imagesToDelete.length;
      const newImages = uploadedImages.map((path, index) => ({
        path,
        sort_order: existingImagesCount + index,
      }));

      await createProductImages(
        product.id,
        newImages.map((img) => img.path),
      );
    }

    // 6. Actualizar especificaciones
    await updateProductSpecifications(product.id, formData.specifications);

    // 7. Obtener el producto actualizado con todas sus relaciones correctas
    const updatedProduct = await getProduct(product.id);

    return updatedProduct;
  } catch (error) {
    // ROLLBACK: Limpiar imágenes subidas en caso de error
    if (uploadedImagePaths.length > 0) {
      console.error(
        "Eliminando imágenes del Storage debido a error:",
        uploadedImagePaths,
      );
      await Promise.allSettled(
        uploadedImagePaths.map((path) => deleteProductImage(path)),
      );
    }

    throw error;
  }
}

/**
 * ELIMINAR producto y todas sus relaciones
 *
 * Transacción:
 * 1. Eliminar imágenes del Storage
 * 2. Eliminar registros de product_images
 * 3. Eliminar especificaciones
 * 4. Eliminar producto
 *
 * Usa Promise.allSettled para no fallar si hay inconsistencias previas
 */
export async function deleteProductWithRelations(
  product: Product,
): Promise<void> {
  try {
    const imagePaths = product.images?.map((item) => item.image) ?? [];

    // Ejecutar todas las eliminaciones en paralelo
    const results = await Promise.allSettled([
      // 1. Eliminar imágenes del Storage
      ...(imagePaths.length > 0
        ? imagePaths.map((path) => deleteProductImage(path))
        : [Promise.resolve()]),

      // 2. Eliminar especificaciones
      deleteProductSpecifications(product.id),

      // 3. Eliminar registros de imágenes de la BD
      deleteProductImages(product.id),
    ]);

    // Verificar si hubo errores en las limpiezas
    const errors = results.filter((r) => r.status === "rejected");
    if (errors.length > 0) {
      console.warn(
        "Errores durante limpieza de imágenes y especificaciones:",
        errors,
      );
      // Continuamos igual porque queremos eliminar el producto
    }

    // 4. Eliminar producto (last, ya que cascade deletes dependen de esto)
    await deleteProduct(product.id);
  } catch (error) {
    throw new Error(`Error al eliminar producto: ${error}`);
  }
}

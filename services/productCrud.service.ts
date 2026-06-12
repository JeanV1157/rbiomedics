import { createProduct, updateProduct, deleteProduct } from "./product.service";

import { uploadProductImage, deleteProductImage } from "./productImage.service";

import {
  createProductSpecifications,
  updateProductSpecifications,
} from "./productSpecification.service";

import { Product } from "@/types/product";
import { ProductFormData } from "@/types/product-form";

export async function createProductWithRelations({
  formData,
  image,
}: {
  formData: ProductFormData;
  image: File | null;
}) {
  let imagePath: string | null = null;

  if (image) {
    imagePath = await uploadProductImage(image);
  }

  const product = await createProduct({
    title: formData.title,
    description: formData.description,
    long_description: formData.long_description,
    image: imagePath,
    price: formData.price,
    category_id: formData.category_id,
    subcategory_id: formData.subcategory_id,
  });

  await createProductSpecifications(product.id, formData.specifications);

  return product;
}

export async function updateProductWithRelations({
  product,
  formData,
  image,
}: {
  product: Product;
  formData: ProductFormData;
  image: File | null;
}) {
  let imagePath = product.image;

  if (image) {
    if (product.image) {
      await deleteProductImage(product.image);
    }

    imagePath = await uploadProductImage(image);
  }

  const updatedProduct = await updateProduct(product.id, {
    title: formData.title,
    description: formData.description,
    long_description: formData.long_description,
    image: imagePath,
    price: formData.price,
    category_id: formData.category_id,
    subcategory_id: formData.subcategory_id,
  });

  await updateProductSpecifications(updatedProduct.id, formData.specifications);

  return updatedProduct;
}

export async function deleteProductWithRelations(product: Product) {
  if (product.image) {
    await deleteProductImage(product.image);
  }

  await deleteProduct(product.id);
}

import { supabase } from "@/lib/supabase";

import { ProductSpecificationForm } from "@/types/specification";

export async function createProductSpecifications(
  productId: number,
  specifications: ProductSpecificationForm[],
) {
  if (!specifications.length) return [];

  const payload = specifications
    .filter((item) => item.label.trim() !== "" && item.value.trim() !== "")
    .map((item) => ({
      product_id: productId,

      label: item.label,

      value: item.value,
    }));

  if (!payload.length) return [];

  const { data, error } = await supabase
    .from("product_specifications")
    .insert(payload)
    .select();

  if (error) {
    throw new Error(
      `Error al crear especificaciones: ${error.message || JSON.stringify(error)}`,
    );
  }

  return data;
}

export async function updateProductSpecifications(
  productId: number,
  specifications: ProductSpecificationForm[],
) {
  const { error } = await supabase
    .from("product_specifications")
    .delete()
    .eq("product_id", productId);

  if (error) {
    throw new Error(
      `Error al actualizar especificaciones: ${error.message || JSON.stringify(error)}`,
    );
  }

  return createProductSpecifications(productId, specifications);
}

export async function deleteProductSpecifications(productId: number) {
  const { error } = await supabase
    .from("product_specifications")
    .delete()
    .eq("product_id", productId);

  if (error) {
    throw new Error(
      `Error al eliminar especificaciones: ${error.message || JSON.stringify(error)}`,
    );
  }
}

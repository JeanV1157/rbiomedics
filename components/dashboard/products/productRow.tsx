"use client";

import Image from "next/image";

import ActionButtons from "../ui/actionButtons";

import { Product } from "@/types/product";
import { Category } from "@/types/category";

import { getProductCoverImageUrl } from "@/services/productImageHelper.service";

interface Props {
  product: Product;

  categories: Category[];

  onEdit: (product: Product) => void;

  onDelete: (product: Product) => void;
}

export default function ProductRow({
  product,
  categories,
  onEdit,
  onDelete,
}: Props) {
  const category = categories.find((item) => item.id === product.category_id);

  const subcategory = category?.subcategories?.find(
    (item) => item.id === product.subcategory_id,
  );

  // Obtener imagen de portada de forma consistente
  const coverImageUrl = getProductCoverImageUrl(product);

  return (
    <tr className="border-b border-[var(--border)]">
      <td className="p-4">
        <Image
          src={coverImageUrl}
          alt={product.title}
          width={60}
          height={60}
          className="h-[60px] w-[60px] rounded-lg object-cover"
        />
      </td>

      <td className="p-4 font-medium">{product.title}</td>

      <td className="p-4">{category?.name ?? "-"}</td>

      <td className="p-4">{subcategory?.name ?? "-"}</td>

      <td className="p-4">{product.price ? `S/ ${product.price}` : "-"}</td>

      <td className="p-4">
        <ActionButtons
          onEdit={() => onEdit(product)}
          onDelete={() => onDelete(product)}
        />
      </td>
    </tr>
  );
}

import { ProductSpecificationForm } from "./specification";

export interface ProductFormData {
  title: string;

  description: string;

  long_description: string;

  price: number | null;

  category_id: number;

  subcategory_id: number;

  specifications: ProductSpecificationForm[];
}

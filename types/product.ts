import { ProductImage } from "./product-image";

export interface Product {
  id: number;

  title: string;

  description: string;

  long_description: string | null;

  price: number | null;

  category_id: number;

  subcategory_id: number;

  created_at: string;

  updated_at: string;

  images?: ProductImage[];

  specifications?: ProductSpecification[];
}

export interface ProductSpecification {
  id: number;

  product_id: number;

  label: string;

  value: string;

  created_at: string;
}

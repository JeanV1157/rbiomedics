export interface Product {
  id: number;
  title: string;
  description: string;
  long_description?: string;
  image: string;

  category_id: number;
  subcategory_id: number;

  price?: number;
  created_at: string;

  updated_at: string;
  specifications?: ProductSpecification[];
}

export interface ProductSpecification {
  id: number;

  product_id: number;

  label: string;

  value: string;

  created_at: string;
}

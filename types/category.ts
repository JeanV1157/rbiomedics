export interface Subcategory {
  id: number;
  name: string;
  category_id: number;
}

export interface Category {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;

  subcategories?: Subcategory[];
}

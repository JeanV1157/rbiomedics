import { supabase } from "@/lib/supabase";
import { Category } from "@/types/category";

export async function getPublicCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select(
      `
      id,
      name,
      created_at,
      updated_at,
      subcategories(
        id,
        name,
        category_id
      )
    `,
    )
    .order("name");

  if (error) {
    throw error;
  }

  return (data ?? []).map(
    (category: any): Category => ({
      id: category.id,
      name: category.name,
      created_at: category.created_at,
      updated_at: category.updated_at,
      subcategories: category.subcategories ?? [],
    }),
  );
}

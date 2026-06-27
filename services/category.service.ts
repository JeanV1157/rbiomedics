import { supabase } from "@/lib/supabase";
import { Category } from "@/types/category";

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select(
      `
    *,
    subcategories (
        id,
        name,
        category_id
    )
`,
    )
    .order("name")
    .order("name", { ascending: true });

  console.log("Categorías obtenidas:", data);

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}

export async function getCategoryById(id: number): Promise<Category | null> {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return null;
  }

  return data;
}

export async function createCategory(name: string) {
  const { data, error } = await supabase
    .from("categories")
    .insert({
      name,
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return {
    ...data,
    subcategories: [],
  };
}

export async function updateCategory(id: number, name: string) {
  console.log("ID:", id);
  console.log("NAME:", name);
  const { data, error } = await supabase
    .from("categories")
    .update({
      name,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return {
    ...data,
    subcategories: [],
  };
}

export async function deleteCategory(id: number) {
  const { error } = await supabase.from("categories").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}

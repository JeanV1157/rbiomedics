import { supabase } from "@/lib/supabase";

export async function createSubcategory(name: string, categoryId: number) {
  const { data, error } = await supabase
    .from("subcategories")
    .insert({
      name,
      category_id: categoryId,
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
export async function updateSubcategory(
  id: number,
  name: string,
  categoryId: number,
) {
  const { data, error } = await supabase
    .from("subcategories")
    .update({
      name,
      category_id: categoryId,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function deleteSubcategory(id: number) {
  const { error } = await supabase.from("subcategories").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return id;
}

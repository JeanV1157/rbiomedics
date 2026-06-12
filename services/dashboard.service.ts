import { supabase } from "@/lib/supabase";

export async function getDashboardStats() {
  const { count: totalCategories } = await supabase
    .from("categories")
    .select("*", { count: "exact", head: true });

  const { count: totalSubcategories } = await supabase
    .from("subcategories")
    .select("*", { count: "exact", head: true });

  const { count: totalProducts } = await supabase
    .from("products")
    .select("*", { count: "exact", head: true });

  return {
    totalCategories: totalCategories ?? 0,
    totalSubcategories: totalSubcategories ?? 0,
    totalProducts: totalProducts ?? 0,
    totalHeroImages: 0,
  };
}

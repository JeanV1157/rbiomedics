import CategoriesClient from "./categoriesClient";
import { getCategories } from "@/services/category.service";

export const dynamic = "force-dynamic";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return <CategoriesClient initialCategories={categories} />;
}

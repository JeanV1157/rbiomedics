import CategoriesClient from "./categoriesClient";
import { getCategories } from "@/services/category.service";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return <CategoriesClient initialCategories={categories} />;
}

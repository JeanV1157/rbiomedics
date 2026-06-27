import { getProducts } from "@/services/product.service";
import ProductsClient from "./productClient";
import { getCategories } from "@/services/category.service";

export const dynamic = "force-dynamic";

export default async function DashboardProductsPage() {
  const products = await getProducts();
  const categories = await getCategories();
  return <ProductsClient initialProducts={products} categories={categories} />;
}

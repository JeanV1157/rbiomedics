import { getCategories } from "@/services/category.service";

export default async function TestPage() {
  const categories = await getCategories();

  return (
    <div className="p-10">
      <pre>{JSON.stringify(categories, null, 2)}</pre>
    </div>
  );
}

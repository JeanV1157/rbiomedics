import { Product } from "@/types/product";
import EmptyState from "./emptyState";
import ProductRow from "./productRow";
import { Category } from "@/types/category";

interface Props {
  products: Product[];
  categories: Category[];
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

export default function ProductTable({
  products,
  categories,
  onEdit,
  onDelete,
}: Props) {
  if (products.length === 0) {
    return <EmptyState />;
  }

  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-[var(--border)]
        bg-white
      "
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--surface)]">
              <th className="p-4 text-left">Imagen</th>

              <th className="p-4 text-left">Producto</th>

              <th className="p-4 text-left">Categoría</th>

              <th className="p-4 text-left">Subcategoría</th>

              <th className="p-4 text-left">Precio</th>

              <th className="p-4 text-left">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                categories={categories}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

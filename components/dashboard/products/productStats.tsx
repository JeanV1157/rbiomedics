interface Props {
  totalProducts: number;
  totalCategories: number;
}

export default function ProductStats({
  totalProducts,
  totalCategories,
}: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <div className="rounded-2xl border border-[var(--border)] bg-white p-6">
        <p className="text-sm text-[var(--muted)]">Productos</p>

        <h3 className="mt-2 text-3xl font-bold text-[var(--primary-dark)]">
          {totalProducts}
        </h3>
      </div>

      <div className="rounded-2xl border border-[var(--border)] bg-white p-6">
        <p className="text-sm text-[var(--muted)]">Categorías</p>

        <h3 className="mt-2 text-3xl font-bold text-[var(--primary-dark)]">
          {totalCategories}
        </h3>
      </div>
    </div>
  );
}

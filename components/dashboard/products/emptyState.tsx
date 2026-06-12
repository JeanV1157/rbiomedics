import { PackageOpen } from "lucide-react";

export default function EmptyState() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-dashed
        border-[var(--border)]
        bg-white
        py-20
      "
    >
      <PackageOpen size={60} className="text-[var(--primary)]" />

      <h3 className="mt-5 text-2xl font-bold text-[var(--primary-dark)]">
        Aún no hay productos
      </h3>

      <p className="mt-2 text-center text-[var(--muted)]">
        Cuando agregues productos aparecerán aquí.
      </p>
    </div>
  );
}

import { Plus } from "lucide-react";

interface Props {
  search: string;
  onSearchChange: (value: string) => void;
  onCreate: () => void;
}

export default function ProductToolbar({
  search,
  onSearchChange,
  onCreate,
}: Props) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="
          w-full
          lg:max-w-md
          rounded-xl
          border
          border-[var(--border)]
          px-4
          py-3
          outline-none
        "
      />

      <button
        type="button"
        onClick={onCreate}
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-[var(--primary)]
          px-5
          py-3
          font-semibold
          text-white
          transition
          hover:bg-[var(--primary-dark)]
        "
      >
        <Plus size={18} />
        Nuevo Producto
      </button>
    </div>
  );
}

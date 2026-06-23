"use client";

interface Props {
  search: string;
  setSearch: (value: string) => void;
  setPage: (page: number) => void;
  filteredCount: number;
  totalCount: number;
}

export default function ProductSearchBar({
  search,
  setSearch,
  setPage,
  filteredCount,
  totalCount,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      {/* SEARCH (opcional moverlo aquí si quieres) */}
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        className="
          w-full md:w-80
          rounded-xl
          border border-[var(--border)]
          px-4 py-3
          outline-none
          focus:border-[var(--primary)]
        "
      />
    </div>
  );
}

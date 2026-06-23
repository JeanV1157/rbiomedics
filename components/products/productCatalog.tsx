"use client";

import { useMemo, useState } from "react";
import ProductCard from "../cards/productCard";
import { Filter } from "lucide-react";
import { Category } from "@/types/category";
import { Product } from "@/types/product";
import ProductSearchBar from "./productSearchBar";
import ProductSidebar from "./productSidebar";

export interface ProductSpecification {
  label: string;
  value: string;
}

interface Props {
  products: Product[];
  categories: Category[];
}

const PRODUCTS_PER_PAGE = 20;

export default function ProductCatalog({ products, categories }: Props) {
  const [search, setSearch] = useState("");
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const [selectedSubcategory, setSelectedSubcategory] = useState<number | null>(
    null,
  );

  const [page, setPage] = useState(1);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        !selectedCategory || product.category_id === selectedCategory;

      const matchesSubcategory =
        !selectedSubcategory || product.subcategory_id === selectedSubcategory;

      return matchesSearch && matchesCategory && matchesSubcategory;
    });
  }, [products, search, selectedCategory, selectedSubcategory]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const currentProducts = filteredProducts.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE,
  );

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile Search + Filters */}
        <div className="lg:hidden flex gap-3">
          <div className="flex-1">
            <ProductSearchBar
              search={search}
              setSearch={setSearch}
              setPage={setPage}
              filteredCount={filteredProducts.length}
              totalCount={products.length}
            />
          </div>

          <button
            onClick={() => setFiltersOpen(true)}
            className="shrink-0 flex items-center justify-center h-12 w-12 rounded-xl border border-[var(--border)] bg-white"
          >
            <Filter size={20} />
          </button>
        </div>
        <div className="grid lg:grid-cols-[280px_1fr] gap-10">
          {/* Sidebar */}
          <aside>
            <div className="hidden lg:block sticky top-35">
              {/* Search */}
              <ProductSearchBar
                search={search}
                setSearch={setSearch}
                setPage={setPage}
                filteredCount={filteredProducts.length}
                totalCount={products.length}
              />

              {/* Categories */}
              <ProductSidebar
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedSubcategory={selectedSubcategory}
                setSelectedSubcategory={setSelectedSubcategory}
                openCategory={openCategory}
                setOpenCategory={setOpenCategory}
                setPage={setPage}
              />
            </div>
          </aside>

          {/* Products */}
          <div>
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <p className="text-[var(--muted)]">
                Mostrando{" "}
                <span className="font-semibold">{currentProducts.length}</span>{" "}
                de{" "}
                <span className="font-semibold">{filteredProducts.length}</span>{" "}
                productos
              </p>
              {/* 
              <select
                className="
              rounded-xl
              border
              border-[var(--border)]
              px-4
              py-3
              outline-none
            "
              >
                <option>Ordenar por nombre</option>
                <option>Más recientes</option>
              </select> */}
            </div>

            {currentProducts.length > 0 ? (
              <div
                className="
      grid
      grid-cols-2
      sm:grid-cols-3
      lg:grid-cols-4
      gap-6
    "
              >
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
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
      bg-[var(--surface)]
      py-20
      px-6
      text-center
    "
              >
                <h3 className="mt-6 text-2xl font-bold text-[var(--primary-dark)]">
                  ¡Ups! Aún no hay productos disponibles
                </h3>

                <p className="mt-3 max-w-md text-[var(--muted)]">
                  Estamos actualizando nuestro catálogo con nuevos equipos,
                  insumos y soluciones biomédicas. Mientras tanto, puedes
                  explorar otras categorías o contactarnos para recibir asesoría
                  personalizada.
                </p>

                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory(null);
                    setSelectedSubcategory(null);
                    setOpenCategory(null);
                    setPage(1);
                  }}
                  className="
        mt-8
        rounded-xl
        bg-[var(--primary)]
        px-6
        py-3
        font-semibold
        text-white
        transition-all
        hover:bg-[var(--primary-dark)]
      "
                >
                  Ver todos los productos
                </button>
              </div>
            )}

            {/* Pagination */}
            <div className="mt-12 flex justify-center gap-2 flex-wrap">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    className={`
                h-11
                w-11
                rounded-xl
                font-semibold
                transition
                ${
                  page === pageNumber
                    ? "bg-[var(--primary)] text-white"
                    : "border border-[var(--border)] hover:border-[var(--primary)]"
                }
              `}
                  >
                    {pageNumber}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
        {filtersOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* overlay */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setFiltersOpen(false)}
            />
            {/* panel */}
            <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl overflow-y-auto p-4">
              {/* close */}
              <div className="flex justify-between items-center mb-4">
                <button onClick={() => setFiltersOpen(false)}>✕</button>
              </div>

              <ProductSidebar
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={(id) => {
                  setSelectedCategory(id);
                  setFiltersOpen(false);
                }}
                selectedSubcategory={selectedSubcategory}
                setSelectedSubcategory={(id) => {
                  setSelectedSubcategory(id);
                  setFiltersOpen(false);
                }}
                openCategory={openCategory}
                setOpenCategory={setOpenCategory}
                setPage={(p) => {
                  setPage(p);
                  setFiltersOpen(false);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

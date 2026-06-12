"use client";

import { useMemo, useState } from "react";
import ProductCard from "../cards/productCard";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Category } from "@/types/category";

export interface Product {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  categoryId: number;
  subcategoryId: number;
  price?: number;
  specifications?: ProductSpecification[];
  relatedProducts?: number[];
}

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
        !selectedCategory || product.categoryId === selectedCategory;

      const matchesSubcategory =
        !selectedSubcategory || product.subcategoryId === selectedSubcategory;

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
        <div className="grid lg:grid-cols-[280px_1fr] gap-10">
          {/* Sidebar */}
          <aside>
            <div className="sticky top-35">
              <h3 className="font-bold text-xl text-[var(--primary-dark)]">
                Categorías
              </h3>

              {/* Search */}
              <input
                type="text"
                placeholder="Buscar producto..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="
              mt-5
              w-full
              rounded-xl
              border
              border-[var(--border)]
              px-4
              py-3
              outline-none
              focus:border-[var(--primary)]
            "
              />

              {/* Categories */}
              <div className="mt-6 space-y-2">
                {/* Todos */}
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedSubcategory(null);
                    setOpenCategory(null);
                    setPage(1);
                  }}
                  className={`
                w-full
                rounded-xl
                px-4
                py-3
                text-left
                font-medium
                transition
                ${
                  !selectedCategory
                    ? "bg-[var(--primary)] text-white"
                    : "hover:bg-[var(--surface)]"
                }
              `}
                >
                  Todos
                </button>

                {/* Categorías */}
                {categories.map((category) => {
                  const isOpen = openCategory === category.name;

                  return (
                    <div
                      key={category.id}
                      className="
                    rounded-xl
                    border
                    border-[var(--border)]
                    overflow-hidden
                  "
                    >
                      {/* Categoria Principal */}
                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          px-4
                          py-3
                        "
                      >
                        {/* Nombre categoría */}
                        <button
                          onClick={() => {
                            setSelectedCategory(category.id);
                            setSelectedSubcategory(null);
                            setPage(1);
                          }}
                          className={`
                            flex-1
                            text-left
                            font-medium
                            transition
                            ${
                              selectedCategory === category.id &&
                              !selectedSubcategory
                                ? "text-[var(--primary)]"
                                : "text-[var(--primary-dark)]"
                            }
                          `}
                        >
                          {category.name}
                        </button>

                        {/* Flecha desplegable */}
                        <button
                          onClick={() =>
                            setOpenCategory(isOpen ? null : category.name)
                          }
                          className="
                            ml-3
                            rounded-lg
                            p-1
                            hover:bg-[var(--surface)]
                            transition
                          "
                        >
                          {isOpen ? (
                            <ChevronDown size={18} />
                          ) : (
                            <ChevronRight size={18} />
                          )}
                        </button>
                      </div>

                      {/* Subcategorías */}
                      {isOpen && (
                        <div className="bg-[var(--surface-muted)]">
                          {category.subcategories.map((subcategory) => (
                            <button
                              key={subcategory.id}
                              onClick={() => {
                                setSelectedCategory(category.id);
                                setSelectedSubcategory(subcategory.id);
                                setPage(1);
                              }}
                              className={`
                            block
                            w-full
                            px-8
                            py-2.5
                            text-left
                            text-sm
                            transition
                            ${
                              selectedSubcategory === subcategory.id
                                ? "bg-[var(--primary)] text-white"
                                : "text-[var(--muted)] hover:bg-white hover:text-[var(--primary-dark)]"
                            }
                          `}
                            >
                              {subcategory.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
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
              </select>
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
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    buttonText="Leer más"
                  />
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
      </div>
    </section>
  );
}

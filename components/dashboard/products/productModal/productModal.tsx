"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { Category } from "@/types/category";
import { Product } from "@/types/product";
import { ProductSpecificationForm } from "@/types/specification";
import ProductBasicInfo from "./productBasicInfo";
import ProductImageUpload from "./productImageUpload";
import ProductCategorySelect from "./productCategorySelect";
import ProductSpecifications from "./productSpecifications";
import { ProductFormData } from "@/types/product-form";
import { getProductImageUrl } from "@/services/productImage.service";

interface ProductModalProps {
  open: boolean;

  initialData: Product | null;

  categories: Category[];

  onClose: () => void;

  onSave: (data: {
    formData: ProductFormData;
    image: File | null;
  }) => Promise<void>;
}

const emptyForm: ProductFormData = {
  title: "",

  description: "",

  long_description: "",

  price: null,

  category_id: 0,

  subcategory_id: 0,

  specifications: [],
};

export default function ProductModal({
  open,
  initialData,
  categories,
  onClose,
  onSave,
}: ProductModalProps) {
  const [formData, setFormData] = useState<ProductFormData>(emptyForm);

  const [imageFile, setImageFile] = useState<File | null>(null);

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;

    if (initialData) {
      setFormData({
        title: initialData.title,

        description: initialData.description,

        long_description: initialData.long_description ?? "",

        price: initialData.price,

        category_id: initialData.category_id,

        subcategory_id: initialData.subcategory_id,

        specifications: [],
      });

      if (initialData.image) {
        setImagePreview(getProductImageUrl(initialData.image));
      }

      return;
    }

    setFormData(emptyForm);

    setImageFile(null);

    setImagePreview(null);
  }, [initialData, open]);

  function handleImageChange(file: File | null) {
    setImageFile(file);

    if (!file) {
      setImagePreview(null);

      return;
    }

    setImagePreview(URL.createObjectURL(file));
  }

  function handleRemoveImage() {
    setImageFile(null);

    setImagePreview(null);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setLoading(true);

      await onSave({
        formData,

        image: imageFile,
      });

      onClose();
    } catch (error) {
      console.error("Error al guardar producto:", error);
      // Aquí puedes agregar notificación al usuario (toast, modal, etc.)
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/60
        p-2
        sm:p-4
      "
    >
      <div
        className="
          flex
          h-[98vh]
          w-full
          max-w-7xl
          flex-col
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-2xl

          sm:h-[95vh]

          lg:h-[92vh]
        "
      >
        {/* ================= HEADER ================= */}

        <div
          className="
            sticky
            top-0
            z-20
            flex
            items-center
            justify-between
            border-b
            bg-white
            px-5
            py-4

            sm:px-8
            sm:py-5
          "
        >
          <div>
            <h2 className="text-xl font-bold text-[var(--primary-dark)] sm:text-2xl">
              {initialData ? "Editar Producto" : "Nuevo Producto"}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Completa la información del producto.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              rounded-xl
              p-2
              transition
              hover:bg-gray-100
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* ================= BODY ================= */}

        <form
          onSubmit={handleSubmit}
          className="
            flex
            flex-1
            flex-col
            overflow-hidden
          "
        >
          <div
            className="
              flex-1
              overflow-y-auto
              px-4
              py-5

              sm:px-6

              lg:px-8
            "
          >
            <div className="space-y-6">
              <ProductBasicInfo
                title={formData.title}
                description={formData.description}
                long_description={formData.long_description}
                price={formData.price}
                onChange={(field, value) =>
                  setFormData((prev) => ({
                    ...prev,
                    [field]: value,
                  }))
                }
              />

              <ProductImageUpload
                image={imageFile}
                preview={imagePreview}
                onChange={handleImageChange}
                onRemove={handleRemoveImage}
              />

              <ProductCategorySelect
                categories={categories}
                category_id={formData.category_id}
                subcategory_id={formData.subcategory_id}
                onCategoryChange={(categoryId) =>
                  setFormData((prev) => ({
                    ...prev,
                    category_id: categoryId,
                    subcategory_id: 0,
                  }))
                }
                onSubcategoryChange={(subcategory_id) =>
                  setFormData((prev) => ({
                    ...prev,
                    subcategory_id,
                  }))
                }
              />

              <ProductSpecifications
                specifications={formData.specifications}
                onChange={(specifications) =>
                  setFormData((prev) => ({
                    ...prev,
                    specifications,
                  }))
                }
              />
            </div>
          </div>

          {/* ================= FOOTER ================= */}

          <div
            className="
              sticky
              bottom-0
              z-20
              border-t
              bg-white
              px-4
              py-4

              sm:px-6

              lg:px-8
            "
          >
            <div
              className="
                flex
                flex-col-reverse
                gap-3

                sm:flex-row
                sm:justify-end
              "
            >
              <button
                type="button"
                onClick={onClose}
                className="
                  w-full
                  rounded-xl
                  border
                  border-gray-300
                  px-5
                  py-3
                  font-medium
                  transition
                  hover:bg-gray-100

                  sm:w-auto
                "
              >
                Cancelar
              </button>

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  rounded-xl
                  bg-[var(--primary)]
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:opacity-90
                  disabled:cursor-not-allowed
                  disabled:opacity-50

                  sm:w-auto
                "
              >
                {loading
                  ? "Guardando..."
                  : initialData
                    ? "Actualizar producto"
                    : "Crear producto"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

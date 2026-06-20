"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { Category } from "@/types/category";
import { Product } from "@/types/product";
import { ProductSpecificationForm } from "@/types/specification";
import { ProductImagePreview } from "@/types/product-image-preview";
import ProductBasicInfo from "./productBasicInfo";
import ProductImageUpload from "./productImageUpload";
import ProductCategorySelect from "./productCategorySelect";
import ProductSpecifications from "./productSpecifications";
import { ProductFormData } from "@/types/product-form";
import { getProductImageUrl } from "@/services/productImage.service";
import {
  isValidImageFile,
  getImageValidationError,
} from "@/types/product-image";

interface ProductModalProps {
  open: boolean;

  initialData: Product | null;

  categories: Category[];

  onClose: () => void;

  onSave: (data: {
    formData: ProductFormData;
    images: File[];
    imagesToDelete: string[];
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
  const [productImages, setProductImages] = useState<ProductImagePreview[]>([]);

  const [deletedImages, setDeletedImages] = useState<ProductImagePreview[]>([]);

  const [formData, setFormData] = useState<ProductFormData>(emptyForm);

  const [loading, setLoading] = useState(false);

  const isFormValid =
    formData.title.trim() !== "" &&
    formData.description.trim() !== "" &&
    formData.price !== null &&
    formData.price > 0 &&
    formData.category_id > 0 &&
    formData.subcategory_id > 0 &&
    productImages.length > 0;

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

        specifications: initialData.specifications ?? [],
      });

      const images = [...(initialData.images ?? [])]
        .sort((a, b) => a.sort_order - b.sort_order)
        .map((item) => ({
          id: item.id,

          image: item.image,

          preview: getProductImageUrl(item.image),
        }));

      setProductImages(images);

      setDeletedImages([]);

      return;
    }

    setFormData(emptyForm);

    setProductImages([]);

    setDeletedImages([]);
  }, [initialData, open]);

  function handleAddImages(files: File[]) {
    const validImages: ProductImagePreview[] = [];
    const errors: string[] = [];

    files.forEach((file) => {
      // Validar archivo
      const validationError = getImageValidationError(file);

      if (validationError) {
        errors.push(`${file.name}: ${validationError}`);
        return;
      }

      // Si es válido, agregar a la lista
      validImages.push({
        image: "",
        file,
        preview: URL.createObjectURL(file),
      });
    });

    // TODO: Mostrar errores de validación al usuario
    if (errors.length > 0) {
      console.warn("Errores de validación de imágenes:", errors);
    }

    setProductImages((prev) => [...prev, ...validImages]);
  }

  function handleRemoveImage(index: number) {
    const image = productImages[index];

    if (image.id) {
      setDeletedImages((prev) => [...prev, image]);
    }

    if (image.preview.startsWith("blob:")) {
      URL.revokeObjectURL(image.preview);
    }

    setProductImages((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setLoading(true);

      await onSave({
        formData,

        images: productImages
          .filter((item) => item.file)
          .map((item) => item.file!),

        imagesToDelete: deletedImages.map((item) => item.image),
      });

      onClose();
    } catch (error) {
      console.error(error);
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
                images={productImages}
                onAdd={handleAddImages}
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
                disabled={loading || !isFormValid}
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

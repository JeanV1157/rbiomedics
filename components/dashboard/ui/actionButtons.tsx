"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

interface ActionButtonsProps {
  viewHref?: string;
  size?: "sm" | "md";
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function ActionButtons({
  viewHref,
  size,
  onEdit,
  onDelete,
}: ActionButtonsProps) {
  const buttonClass = size === "sm" ? "h-4 w-4 p-0" : "h-10 w-10 p-0";
  return (
    <div className="flex items-center justify-center gap-2">
      {viewHref && (
        <Link
          href={viewHref}
          className={`
            ${buttonClass}
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-[var(--border)]
            bg-white
            text-[var(--primary-dark)]
            transition-all
            duration-300
            hover:border-[var(--primary)]
            hover:bg-[var(--surface)]
          `}
        >
          <Eye size={size === "sm" ? 14 : 18} />
        </Link>
      )}

      {onEdit && (
        <button
          type="button"
          onClick={onEdit}
          className={`
            ${buttonClass}
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-xl
            bg-[var(--primary)]
            text-white
            transition-all
            duration-300
            hover:bg-[var(--primary-dark)]
            hover:shadow-md
          `}
        >
          <Pencil size={size === "sm" ? 14 : 18} />
        </button>
      )}

      {onDelete && (
        <button
          type="button"
          onClick={onDelete}
          className={`
            ${buttonClass}
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-xl
            border
            border-red-200
            bg-red-50
            text-red-600
            transition-all
            duration-300
            hover:bg-red-600
            hover:text-white
            hover:shadow-md
         `}
        >
          <Trash2 size={size === "sm" ? 14 : 18} />
        </button>
      )}
    </div>
  );
}

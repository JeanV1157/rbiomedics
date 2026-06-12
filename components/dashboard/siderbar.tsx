"use client";

import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Package,
  ImageIcon,
  LogOut,
  LayoutGrid,
  FolderTree,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function DashboardSidebar() {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.message);
      return;
    }

    router.replace("/auth/login");
  };
  return (
    <aside
      className="
        flex
        h-screen
        w-72
        flex-col
        border-r
        border-[var(--border)]
        bg-white
      "
    >
      {/* Logo */}
      <div
        className="
          border-b
          border-[var(--border)]
          px-6
          py-6
        "
      >
        <Image
          src="/images/logo3.png"
          alt="RBIOMEDICS"
          width={180}
          height={60}
          className="h-14 w-auto object-contain"
          priority
        />
      </div>

      {/* Navegación */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          <Link
            href="/dashboard"
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-[var(--primary-dark)]
              font-medium
              transition-all
              hover:bg-[var(--surface)]
              hover:text-[var(--primary)]
            "
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
          <Link
            href="/dashboard/categories"
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-[var(--primary-dark)]
              font-medium
              transition-all
              hover:bg-[var(--surface)]
              hover:text-[var(--primary)]
            "
          >
            <FolderTree size={20} />
            Categorias
          </Link>

          <Link
            href="/dashboard/products"
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-[var(--primary-dark)]
              font-medium
              transition-all
              hover:bg-[var(--surface)]
              hover:text-[var(--primary)]
            "
          >
            <Package size={20} />
            Productos
          </Link>

          <Link
            href="/dashboard/portada"
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-[var(--primary-dark)]
              font-medium
              transition-all
              hover:bg-[var(--surface)]
              hover:text-[var(--primary)]
            "
          >
            <ImageIcon size={20} />
            Portada Home
          </Link>
        </div>
      </nav>

      {/* Footer */}
      <div
        className="
          border-t
          border-[var(--border)]
          p-4
        "
      >
        <button
          onClick={handleLogout}
          className="
            flex
            w-full
            items-center
            gap-3
            rounded-xl
            px-4
            py-3
            text-red-500
            font-medium
            transition-all
            hover:bg-red-50
          "
        >
          <LogOut size={20} />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}

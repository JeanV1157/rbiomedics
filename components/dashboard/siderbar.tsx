"use client";

import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Package,
  ImageIcon,
  LogOut,
  FolderTree,
  Menu,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function DashboardSidebar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/auth/login");
  };

  const linkClass =
    "flex items-center gap-3 rounded-xl px-4 py-3 text-[var(--primary-dark)] font-medium transition-all hover:bg-[var(--surface)] hover:text-[var(--primary)]";

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-[var(--border)] bg-white">
        <Image
          src="/images/logo3.png"
          alt="RBIOMEDICS"
          width={140}
          height={50}
          className="h-10 w-auto object-contain"
        />

        <button onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 md:hidden z-40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-full w-72
          bg-white border-r border-[var(--border)]
          transform transition-transform duration-300
          md:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo desktop */}
        <div className="hidden md:block border-b border-[var(--border)] px-6 py-6">
          <Image
            src="/images/logo3.png"
            alt="RBIOMEDICS"
            width={180}
            height={60}
            className="h-14 w-auto object-contain"
            priority
          />
        </div>

        {/* Nav */}
        <nav className="p-4 space-y-2">
          <Link
            href="/dashboard"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            href="/dashboard/categories"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            <FolderTree size={20} />
            Categorías
          </Link>

          <Link
            href="/dashboard/products"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            <Package size={20} />
            Productos
          </Link>

          <Link
            href="/dashboard/portada"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            <ImageIcon size={20} />
            Portada Home
          </Link>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[var(--border)] p-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-500 font-medium hover:bg-red-50"
          >
            <LogOut size={20} />
            Cerrar sesión
          </button>
        </div>
      </aside>
    </>
  );
}

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import DashboardStats from "@/components/dashboard/dashboardStats";
import QuickActions from "@/components/dashboard/quickActions";
import { supabase } from "@/lib/supabase";

interface Props {
  stats: {
    totalProducts: number;
    totalCategories: number;
    totalSubcategories: number;
    totalHeroImages: number;
  };
}

export default function DashboardPage({ stats }: Props) {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/auth/login");
      }
    };

    checkUser();
  }, [router]);

  return (
    <div className="space-y-10">
      <div>
        <span className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
          Panel Administrativo
        </span>

        <h1 className="mt-2 text-4xl font-bold text-[var(--primary-dark)]">
          Bienvenido
        </h1>

        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          Gestiona los productos, categorías y contenido principal de RBIOMEDICS
          desde un solo lugar.
        </p>
      </div>

      <DashboardStats
        totalCategories={stats.totalCategories}
        totalSubcategories={stats.totalSubcategories}
        totalHeroImages={stats.totalHeroImages}
        totalProducts={stats.totalProducts}
      />
      <QuickActions />
    </div>
  );
}

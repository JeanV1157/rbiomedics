"use client";

import DashboardStatCard from "./dashboardStatCard";

interface Props {
  totalCategories: number;
  totalSubcategories: number;
}

export default function CategoryStats({
  totalCategories,
  totalSubcategories,
}: Props) {
  return (
    <div
      className="
        grid
        gap-6
        sm:grid-cols-2
      "
    >
      <DashboardStatCard title="Categorías" value={totalCategories} />

      <DashboardStatCard title="Subcategorías" value={totalSubcategories} />
    </div>
  );
}

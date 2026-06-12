"use client";

import { Plus } from "lucide-react";

interface HeaderAction {
  label: string;
  onClick: () => void;
}

interface DashboardHeaderProps {
  title: string;
  description: string;
  actions?: HeaderAction[];
}

export default function DashboardHeader({
  title,
  description,
  actions,
}: DashboardHeaderProps) {
  return (
    <div
      className="
        flex
        flex-col
        gap-5
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      <div>
        <h1 className="text-3xl font-bold text-[var(--primary-dark)]">
          {title}
        </h1>

        <p className="mt-2 text-[var(--muted)]">{description}</p>
      </div>

      {actions && (
        <div className="flex flex-wrap gap-3">
          {actions.map((action) => (
            <button
              key={action.label}
              onClick={action.onClick}
              className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-[var(--primary)]
          px-5
          py-3
          font-semibold
          text-white
          transition
          hover:bg-[var(--primary-dark)]
        "
            >
              <Plus size={18} />
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

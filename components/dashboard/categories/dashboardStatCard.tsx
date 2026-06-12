interface Props {
  title: string;
  value: number;
}

export default function DashboardStatCard({ title, value }: Props) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-[var(--border)]
        bg-white
        p-6
      "
    >
      <p className="text-sm text-[var(--muted)]">{title}</p>

      <h2
        className="
          mt-2
          text-3xl
          font-bold
          text-[var(--primary-dark)]
        "
      >
        {value}
      </h2>
    </div>
  );
}

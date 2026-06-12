import DashboardSidebar from "@/components/dashboard/siderbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[var(--surface)]">
      <DashboardSidebar />

      <main className="flex-1 p-6 lg:p-8">{children}</main>
    </div>
  );
}

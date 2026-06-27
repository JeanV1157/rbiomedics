import DashboardSidebar from "@/components/dashboard/siderbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--surface)]">
      <DashboardSidebar />

      <main className="md:ml-72 p-6 lg:p-8">{children}</main>
    </div>
  );
}

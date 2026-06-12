import DashboardClient from "./dashboardClient";
import { getDashboardStats } from "@/services/dashboard.service";

export default async function DashboardPage() {
  const stats = await getDashboardStats();

  return <DashboardClient stats={stats} />;
}

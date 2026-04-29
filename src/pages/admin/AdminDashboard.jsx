import BarChart from "../../components/common/BarChart";
import StatGrid from "../../components/common/StatGrid";
import { adminStats } from "../../data";

export default function AdminDashboard() {
  return (
    <>
      <StatGrid stats={adminStats} />
      <BarChart />
    </>
  );
}

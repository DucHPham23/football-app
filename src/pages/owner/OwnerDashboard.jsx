import BarChart from "../../components/common/BarChart";
import StatGrid from "../../components/common/StatGrid";
import { ownerStats } from "../../data";

export default function OwnerDashboard() {
  return (
    <>
      <StatGrid stats={ownerStats} />
      <BarChart />
    </>
  );
}

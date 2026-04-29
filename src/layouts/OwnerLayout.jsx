import { Outlet } from "react-router-dom";
import OwnerSidebar from "../components/owner/OwnerSidebar";

export default function OwnerLayout() {
  return (
    <main className="container page dashboard">
      <OwnerSidebar />
      <section className="dashboard-content">
        <Outlet />
      </section>
    </main>
  );
}

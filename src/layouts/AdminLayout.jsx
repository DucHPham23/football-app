import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";

export default function AdminLayout() {
  return (
    <main className="container page dashboard">
      <AdminSidebar />
      <section className="dashboard-content">
        <Outlet />
      </section>
    </main>
  );
}

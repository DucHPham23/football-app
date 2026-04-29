import { NavLink } from "react-router-dom";

const adminMenus = [
  { path: "/admin", label: "Tong quan" },
  { path: "/admin/users", label: "Quan ly user" },
  { path: "/admin/transactions", label: "Quan ly giao dich" },
];

export default function AdminSidebar() {
  return (
    <aside className="dashboard-sidebar">
      <h2>Admin Dashboard</h2>
      {adminMenus.map((menu) => (
        <NavLink key={menu.path} to={menu.path}>
          <button>{menu.label}</button>
        </NavLink>
      ))}
    </aside>
  );
}

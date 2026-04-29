import { NavLink } from "react-router-dom";

const ownerMenus = [
  { path: "/owner", label: "Tong quan" },
  { path: "/owner/fields", label: "Quan ly san" },
  { path: "/owner/bookings", label: "Quan ly booking" },
];

export default function OwnerSidebar() {
  return (
    <aside className="dashboard-sidebar">
      <h2>Owner Dashboard</h2>
      {ownerMenus.map((menu) => (
        <NavLink key={menu.path} to={menu.path}>
          <button>{menu.label}</button>
        </NavLink>
      ))}
    </aside>
  );
}

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RoleGuard({ allow }) {
  const { role } = useAuth();

  if (!allow.includes(role)) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

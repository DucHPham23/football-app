import { Navigate, Route, Routes } from "react-router-dom";
import EmptyState from "./components/common/EmptyState";
import AdminLayout from "./layouts/AdminLayout";
import OwnerLayout from "./layouts/OwnerLayout";
import UserLayout from "./layouts/UserLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageTransactions from "./pages/admin/ManageTransactions";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageBookings from "./pages/owner/ManageBookings";
import ManageFields from "./pages/owner/ManageFields";
import OwnerDashboard from "./pages/owner/OwnerDashboard";
import Booking from "./pages/user/Booking";
import FieldDetail from "./pages/user/FieldDetail";
import Home from "./pages/user/Home";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import UserCenter from "./pages/user/UserCenter";
import RoleGuard from "./routes/RoleGuard";

export default function App() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/field/:id" element={<FieldDetail />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/user-center" element={<UserCenter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<RoleGuard allow={["OWNER"]} />}>
        <Route path="/owner/*" element={<OwnerLayout />}>
          <Route index element={<OwnerDashboard />} />
          <Route path="fields" element={<ManageFields />} />
          <Route path="bookings" element={<ManageBookings />} />
        </Route>
      </Route>
      <Route element={<RoleGuard allow={["ADMIN"]} />}>
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="transactions" element={<ManageTransactions />} />
        </Route>
      </Route>
      <Route path="/auth" element={<Navigate to="/login" replace />} />
      <Route
        path="*"
        element={
          <main className="container page">
            <EmptyState title="Trang khong ton tai" desc="Vui long quay lai trang chu de tiep tuc." />
          </main>
        }
      />
    </Routes>
  );
}

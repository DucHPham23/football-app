import { Outlet } from "react-router-dom";
import UserNavbar from "../components/user/UserNavbar";

export default function UserLayout() {
  return (
    <div className="app">
      <UserNavbar />
      <Outlet />
      <footer className="site-footer">
        <div className="container">
          <p>Football Booking Platform - giao dien the thao, de su dung.</p>
        </div>
      </footer>
    </div>
  );
}

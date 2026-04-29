import { Link, NavLink } from "react-router-dom";

export default function UserNavbar() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link to="/" className="logo">
          Football Booking
        </Link>
        <nav>
          <NavLink to="/">Trang chu</NavLink>
          <NavLink to="/user-center">Tai khoan</NavLink>
          <NavLink to="/login">Dang nhap</NavLink>
          <NavLink to="/register">Dang ky</NavLink>
        </nav>
      </div>
    </header>
  );
}

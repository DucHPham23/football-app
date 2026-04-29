import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { loginAsUser, loginAsOwner, loginAsAdmin } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Vui long nhap day du email va mat khau.");
      return;
    }

    setError("");

    if (email.includes("owner")) {
      loginAsOwner();
      navigate("/owner");
      return;
    }

    if (email.includes("admin")) {
      loginAsAdmin();
      navigate("/admin");
      return;
    }

    loginAsUser();
    navigate("/");
  };

  return (
    <main className="container page auth-page">
      <section className="panel auth-panel">
        <h1>Dang nhap</h1>
        <form onSubmit={handleLogin}>
          <Input label="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <Input label="Mat khau" type="password" value={password} onChange={(event) => setPassword(event.target.value)} error={error} />
          <Button type="submit">Dang nhap</Button>
        </form>
      </section>
    </main>
  );
}

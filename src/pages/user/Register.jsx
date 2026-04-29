import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import { useAuth } from "../../context/AuthContext";

export default function Register() {
  const { loginAsUser } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    if (!name || !email || !password) {
      setError("Vui long nhap day du thong tin.");
      return;
    }
    setError("");
    loginAsUser();
    navigate("/");
  };

  return (
    <main className="container page auth-page">
      <section className="panel auth-panel">
        <h1>Dang ky</h1>
        <form onSubmit={handleRegister}>
          <Input label="Ho ten" value={name} onChange={(event) => setName(event.target.value)} />
          <Input label="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <Input label="Mat khau" type="password" value={password} onChange={(event) => setPassword(event.target.value)} error={error} />
          <Button type="submit">Tao tai khoan</Button>
        </form>
      </section>
    </main>
  );
}

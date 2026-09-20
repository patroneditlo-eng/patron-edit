import { useState } from "react";
import "./Login.css";
import { login } from "./auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    const { error } = await login(email, password);

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    // Başarılı giriş
    window.location.href = "/";
  }

  return (
    <div className="login-page">
      <div className="login-box">

        <div className="login-logo">P</div>

        <h1>Giriş Yap</h1>

        <p>Patron Edit hesabına giriş yap.</p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <p style={{ color: "#ff4d4d", marginTop: "10px" }}>
              {error}
            </p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>

        </form>

        <div className="login-switch">
          Hesabın yok mu?

          <button
            type="button"
            onClick={() => {
              window.location.href = "/kayit";
            }}
          >
            Kayıt Ol
          </button>
        </div>

        <a href="/" className="back-home">
          Ana Sayfaya Dön
        </a>

      </div>
    </div>
  );
}

export default Login;
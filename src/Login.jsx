import { useState } from "react";
import "./Login.css";

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (isRegister) {
      alert("Kayıt başarılı!");
    } else {
      alert("Giriş başarılı!");
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">

        <div className="login-logo">P</div>

        <h1>
          {isRegister ? "Hesap Oluştur" : "Giriş Yap"}
        </h1>

        <p>
          {isRegister
            ? "Patron Edit hesabını oluştur."
            : "Patron Edit hesabına giriş yap."}
        </p>

        <form onSubmit={handleSubmit}>

          {isRegister && (
            <input
              type="text"
              placeholder="Kullanıcı adı"
              required
            />
          )}

          <input
            type="email"
            placeholder="E-posta"
            required
          />

          <input
            type="password"
            placeholder="Şifre"
            required
          />

          <button type="submit">
            {isRegister ? "Kayıt Ol" : "Giriş Yap"}
          </button>

        </form>

        <div className="login-switch">
          {isRegister
            ? "Zaten hesabın var mı?"
            : "Hesabın yok mu?"}

          <button
            type="button"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Giriş Yap" : "Kayıt Ol"}
          </button>
        </div>

        <a href="/" className="back-home">
          ← Ana Sayfaya Dön
        </a>

      </div>
    </div>
  );
}

export default Login;
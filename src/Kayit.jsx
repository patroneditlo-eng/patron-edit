import { useState } from "react";
import { supabase } from "./lib/supabaseClient";
import "./Login.css";

function Kayit() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [message, setMessage] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    setMessage("");

    if (password !== passwordAgain) {
      setMessage("Şifreler aynı değil.");
      return;
    }

    if (password.length < 6) {
      setMessage("Şifre en az 6 karakter olmalı.");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage(
      "Kayıt başarılı! E-posta adresini kontrol et."
    );
  }

  return (
    <div className="login-page">
      <div className="login-box">

        <div className="login-logo">P</div>

        <h1>PatronEditLo</h1>

        <h2>Hesap Oluştur</h2>

        <p>PatronEditLo hesabını oluştur.</p>

        <form onSubmit={handleRegister}>

          <input
            type="email"
            placeholder="Gmail adresin"
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

          <input
            type="password"
            placeholder="Şifre tekrar"
            value={passwordAgain}
            onChange={(e) => setPasswordAgain(e.target.value)}
            required
          />

          <button type="submit">
            Kaydol
          </button>

        </form>

        {message && (
          <p className="login-message">
            {message}
          </p>
        )}

        <p>
          Zaten hesabın var mı?{" "}
          <a href="/login">Giriş Yap</a>
        </p>

        <a href="/" className="back-home">
          ← Ana Sayfaya Dön
        </a>

      </div>
    </div>
  );
}

export default Kayit;
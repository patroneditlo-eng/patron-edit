import SFX from "./SFX";
import Overlay from "./Overlay";
import Fonts from "./Fonts";
import Login from "./Login";
import Kayit from "./Kayit";
import CC from "./CC/CC";
import Shake from "./Shake/Shake";
import BackgroundRemover from "./BackgroundRemover";

import { useEffect, useState } from "react";
import { supabase } from "./lib/supabaseClient";

import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaDiscord,
} from "react-icons/fa";

import "./index.css";

function Programlar() {
  return (
    <div className="simple-page">
      <h1>Shakeler</h1>
      <p>Editlerinizde kullanabileceğiniz shake presetleri.</p>

      <div className="program-grid">
        <div className="program-card">
          <div className="program-icon">Ae</div>
          <h2>After Effects 2020</h2>
          <p>Adobe After Effects</p>
          <a href="#" className="program-btn">
            İndir / Git ↗
          </a>
        </div>

        <div className="program-card">
          <div className="program-icon">Ae</div>
          <h2>After Effects 2021</h2>
          <p>Adobe After Effects</p>
          <a href="#" className="program-btn">
            İndir / Git ↗
          </a>
        </div>

        <div className="program-card">
          <div className="program-icon">Ae</div>
          <h2>After Effects 2022</h2>
          <p>Adobe After Effects</p>
          <a href="#" className="program-btn">
            İndir / Git ↗
          </a>
        </div>

        <div className="program-card">
          <div className="program-icon">Ae</div>
          <h2>After Effects 2023</h2>
          <p>Adobe After Effects</p>
          <a href="#" className="program-btn">
            İndir / Git ↗
          </a>
        </div>

        <div className="program-card">
          <div className="program-icon">Ae</div>
          <h2>After Effects 2024</h2>
          <p>Adobe After Effects</p>
          <a href="#" className="program-btn">
            İndir / Git ↗
          </a>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="site">

      {/* NAVBAR */}
      <header
        className="navbar"
        style={{
          minHeight: "84px",
          padding: "0 24px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >

        {/* LOGO */}
        <a href="/" className="logo">
          <div
            className="logo-box"
            style={{
              width: "48px",
              height: "48px",
              fontSize: "22px",
            }}
          >
            P
          </div>

          <div className="logo-text">
            <strong>PATRONEDİTLO</strong>
            <span>COMMUNİTY</span>
          </div>
        </a>

        {/* ANA MENÜ */}
        <nav
          className="main-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >

          {/* ANA SAYFA */}
          <a
            href="/"
            style={{
              fontSize: "16px",
              fontWeight: "700",
              padding: "12px 8px",
              whiteSpace: "nowrap",
            }}
          >
            Ana Sayfa
          </a>

          {/* GİRİŞ YAP */}
          <a
            href="/login"
            style={{
              fontSize: "16px",
              fontWeight: "700",
              padding: "12px 8px",
              whiteSpace: "nowrap",
            }}
          >
            Giriş Yap
          </a>

          {/* KAYDOL */}
          <a
            href="/kayit"
            className="register-btn"
            style={{
              fontSize: "16px",
              fontWeight: "700",
              padding: "12px 8px",
              whiteSpace: "nowrap",
            }}
          >
            Kaydol
          </a>

          {/* SOSYAL MEDYA */}
          <div
            className="social-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginLeft: "12px",
            }}
          >

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/patroneditlo.aep/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn instagram"
              aria-label="Instagram"
              style={{
                minWidth: "108px",
                height: "48px",
                padding: "0 16px",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                borderRadius: "12px",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "15px",
                background:
                  "linear-gradient(135deg, #ff7a00 0%, #ff3d00 45%, #182848 100%)",
                transition: "0.2s ease",
                whiteSpace: "nowrap",
              }}
            >
              <FaInstagram size={19} />
              <span>Instagram</span>
            </a>

            {/* YOUTUBE */}
            <a
              href="https://www.youtube.com/@PatronEditLo"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn youtube"
              aria-label="YouTube"
              style={{
                minWidth: "102px",
                height: "48px",
                padding: "0 16px",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                borderRadius: "12px",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "15px",
                background: "#ff0000",
                transition: "0.2s ease",
                whiteSpace: "nowrap",
              }}
            >
              <FaYoutube size={19} />
              <span>YouTube</span>
            </a>

            {/* TIKTOK */}
            <a
              href="https://www.tiktok.com/@patroneditlo"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn tiktok"
              aria-label="TikTok"
              style={{
                minWidth: "92px",
                height: "48px",
                padding: "0 16px",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                borderRadius: "12px",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "15px",
                background: "#050505",
                transition: "0.2s ease",
                whiteSpace: "nowrap",
              }}
            >
              <FaTiktok size={19} />
              <span>TikTok</span>
            </a>

            {/* DISCORD */}
            <a
              href="https://discord.gg/kXaqx3rkm"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn discord"
              aria-label="Discord"
              style={{
                minWidth: "102px",
                height: "48px",
                padding: "0 16px",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                borderRadius: "12px",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "15px",
                background: "#5865F2",
                transition: "0.2s ease",
                whiteSpace: "nowrap",
              }}
            >
              <FaDiscord size={19} />
              <span>Discord</span>
            </a>

          </div>
        </nav>
      </header>

      {/* ANA İÇERİK */}
      <main>

        {/* HERO */}
        <section className="hero">
          <p className="hero-small">
            ✦ PATRON EDIT KAYNAK PLATFORMU
          </p>

          <h1>
            Editörlerin ihtiyacı olan
            <br />
            her şey burada.
          </h1>

          <p>
            Editlerin için gerekli SFX, overlay, font, preset,
            template ve daha fazlasını tek yerde bul.
          </p>
        </section>

        {/* KAYNAKLAR */}
        <section className="resources">

          <div className="section-title">
            <p>KAYNAKLAR</p>

            <h2>
              Editini güçlendirecek kaynaklar
            </h2>

            <span>
              Aradığın her şeyi kategorilere ayırdık.
            </span>
          </div>

          <div className="resource-grid">

            {/* SFX */}
            <div
              className="resource-card"
              onClick={() => {
                window.location.href = "/sfx";
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="resource-icon">🔊</div>

              <h3>SFX & Sesler</h3>

              <p>
                Whoosh, impact, bass, transition ve daha fazlası.
              </p>
            </div>

            {/* OVERLAY */}
            <div
              className="resource-card"
              onClick={() => {
                window.location.href = "/overlay";
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="resource-icon">✦</div>

              <h3>Overlay</h3>

              <p>
                Smoke, fire, particles, light leak ve efektler.
              </p>
            </div>

            {/* FONTLAR */}
            <div
              className="resource-card"
              onClick={() => {
                window.location.href = "/fonts";
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="resource-icon">Aa</div>

              <h3>Fontlar</h3>

              <p>
                Editlerinde kullanabileceğin özel fontlar.
              </p>
            </div>

            {/* SHAKE */}
            <div
              className="resource-card"
              onClick={() => {
                window.location.href = "/shake";
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="resource-icon">◆</div>

              <h3>Edit İçin Shake ler</h3>

              <p>
                After Effects, Premiere Pro ve diğer programlar.
              </p>
            </div>

            {/* CC */}
            <div
              className="resource-card"
              onClick={() => {
                window.location.href = "/cc";
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="resource-icon">▣</div>

              <h3>Edit İçin CC ler</h3>

              <p>
                Editlerinde kullanabileceğiniz cc ler burada.
              </p>
            </div>

            {/* BACKGROUND REMOVER */}
            <div
              className="resource-card"
              onClick={() => {
                window.location.href = "/background-remover";
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="resource-icon">✂️</div>

              <h3>Arka Plan Kaldırıcı</h3>

              <p>
                Fotoğraflarındaki arka planı kolayca kaldır.
              </p>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Patron Edit</p>
      </footer>

    </div>
  );
}

function App() {
  const path = window.location.pathname;

  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  /* YÜKLENİYOR */
  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          color: "white",
        }}
      >
        Yükleniyor...
      </div>
    );
  }

  /* LOGIN */
  if (path === "/login") {
    return <Login />;
  }

  /* KAYIT */
  if (path === "/kayit") {
    return <Kayit />;
  }

  /* GİRİŞ YAPMAMIŞSA LOGIN */
  if (!session) {
    window.location.replace("/login");
    return null;
  }

  /* SFX */
  if (path === "/sfx") {
    return <SFX />;
  }

  /* OVERLAY */
  if (path === "/overlay") {
    return <Overlay />;
  }

  /* BACKGROUND REMOVER */
  if (path === "/background-remover") {
    return <BackgroundRemover />;
  }

  /* FONTS */
  if (path === "/fonts") {
    return <Fonts />;
  }

  /* PROGRAMLAR */
  if (path === "/programlar") {
    return <Programlar />;
  }

  /* SHAKE */
  if (path === "/shake") {
    return <Shake />;
  }

  /* CC */
  if (path === "/cc") {
    return <CC />;
  }

  /* ANA SAYFA */
  return <Home />;
}

export default App;
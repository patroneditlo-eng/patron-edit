import SFX from "./SFX";
import Overlay from "./Overlay";
import Fonts from "./Fonts";
import Login from "./Login";
import Kayit from "./Kayit";
import CC from "./CC/CC";
import Shake from "./Shake/Shake";

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

      <header className="navbar">

        <a href="/" className="logo">
          <div className="logo-box">P</div>

          <div className="logo-text">
            <strong>PATRONEDİTLO</strong>
            <span>COMMUNİTY</span>
          </div>
        </a>

        <nav className="main-nav">
          <a href="/">Ana Sayfa</a>
          <a href="/shake">Shake</a>
          <a href="/sfx">Kaynaklar</a>
          <a href="/fonts">Fontlar</a>
          <a href="/login">Giriş Yap</a>
          <a href="/kayit" className="register-btn">Kaydol</a>
        </nav>

      </header>

      <main>

        <section className="hero">
          <p className="hero-small">✦ PATRON EDIT KAYNAK PLATFORMU</p>

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

        <section className="resources">

          <div className="section-title">
            <p>KAYNAKLAR</p>
            <h2>Editini güçlendirecek kaynaklar</h2>
            <span>Aradığın her şeyi kategorilere ayırdık.</span>
          </div>

          <div className="resource-grid">

            <div className="resource-card">
              <div className="resource-icon">🔊</div>
              <h3>SFX & Sesler</h3>
              <p>Whoosh, impact, bass, transition ve daha fazlası.</p>
              <a href="/sfx">Kaynakları Gör →</a>
            </div>

            <div className="resource-card">
              <div className="resource-icon">✦</div>
              <h3>Overlay</h3>
              <p>Smoke, fire, particles, light leak ve efektler.</p>
              <a href="/overlay">Kaynakları Gör →</a>
            </div>

            <div className="resource-card">
              <div className="resource-icon">Aa</div>
              <h3>Fontlar</h3>
              <p>Editlerinde kullanabileceğin özel fontlar.</p>
              <a href="/fonts">Kaynakları Gör →</a>
            </div>

            <div
              className="resource-card"
              onClick={() => (window.location.href = "/shake")}
              style={{ cursor: "pointer" }}
            >
              <div className="resource-icon">◆</div>
              <h3>Edit İçin Shake ler</h3>
              <p>After Effects, Premiere Pro ve diğer programlar.</p>
              <a href="/shake">Shakeler Gör →</a>
            </div>

            <div className="resource-card">
              <div className="resource-icon">▣</div>
              <h3>Edit İçin CC ler</h3>
              <p>Editlerinde kullanabileceğiniz ccler burdadır.</p>
              <a href="/cc">Kaynakları Gör →</a>
            </div>

            <div className="resource-card">
              <div className="resource-icon">⚡</div>
              <h3>Transition</h3>
              <p>Editlerine uygun geçiş efektleri.</p>
              <a href="#">Kaynakları Gör →</a>
            </div>

          </div>
        </section>

      </main>

      <footer>
        <p>© 2026 Patron Edit</p>
      </footer>

    </div>
  );
}

function App() {
  const path = window.location.pathname;

  if (path === "/sfx") {
    return <SFX />;
  }

  if (path === "/overlay") {
    return <Overlay />;
  }

  if (path === "/fonts") {
    return <Fonts />;
  }

  if (path === "/programlar") {
    return <Programlar />;
  }

  if (path === "/login") {
    return <Login />;
  }

  if (path === "/kayit") {
    return <Kayit />;
  }

  if (path === "/shake") {
    return <Shake />;
  }

  if (path === "/cc") {
    return <CC />;
  }

  return <Home />;
}

export default App;
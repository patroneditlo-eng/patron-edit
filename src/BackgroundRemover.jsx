import { useState } from "react";
import { removeBackground } from "@imgly/background-removal";
import "./BackgroundRemover.css";

export default function BackgroundRemover() {
  const [file, setFile] = useState(null);
  const [resultUrl, setResultUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    setFile(selectedFile);
    setResultUrl("");
    setError("");
  };

  const handleRemove = async () => {
    if (!file) return;

    setLoading(true);
    setError("");

    try {
      const blob = await removeBackground(file);
      const url = URL.createObjectURL(blob);

      setResultUrl(url);
    } catch (err) {
      console.error(err);
      setError("Arka plan kaldırılırken bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="background-remover-page">

      <header className="remover-header">
        <div className="remover-logo">
          <span>⌁</span>
          PatronEdit
        </div>

        <nav>
          <a href="/">Ana Sayfa</a>
          <a href="/background-remover">Araçlar</a>
          <a href="#">Hakkımızda</a>
        </nav>

        <div className="theme-icon">☼</div>
      </header>

      <main className="remover-main">

        <section className="remover-intro">
          <div className="remover-badge">
            Hızlı • Kolay • Ücretsiz
          </div>

          <h1>
            Arka Plan
            <span>Kaldırıcı</span>
          </h1>

          <p>
            Fotoğrafını yükle, arka planını saniyeler içinde kaldır.
            <br />
            Daha temiz ve profesyonel görseller oluştur.
          </p>

          <div
            className="upload-card"
            onClick={() => document.getElementById("imageInput").click()}
          >
            <div className="upload-area">
              <div className="upload-icon">↥</div>

              <h2>Görselini Yükle</h2>

              <p>
                PNG, JPG, JPEG formatlarını destekler
                <br />
                (maks. 10MB)
              </p>

              {file ? (
  <div className="selected-file">
    ✓ Dosya seçildi: <strong>{file.name}</strong>
  </div>
) : (
  <div className="selected-file not-selected">
    Henüz dosya seçilmedi
  </div>
)}

              <button
                className="choose-button"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById("imageInput").click();
                }}
              >
                ▢ &nbsp; Dosya Seç
              </button>

              <input
                id="imageInput"
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => handleFile(e.target.files?.[0])}
              />
            </div>
          </div>

          {file && !resultUrl && (
            <button
              className="remove-button"
              onClick={handleRemove}
              disabled={loading}
            >
              {loading ? "Arka Plan Kaldırılıyor..." : "Arka Planı Kaldır"}
            </button>
          )}

          {error && <p className="remover-error">{error}</p>}
        </section>

        <section className="preview-card">

          <div className="preview-top">
            <span>◉ &nbsp; Önizleme</span>

            {resultUrl && (
              <strong>
                ✨ Arka plan kaldırıldı ✓
              </strong>
            )}
          </div>

          <div className="preview-image">
            {resultUrl ? (
              <img
                src={resultUrl}
                alt="Arka planı kaldırılmış görsel"
              />
            ) : (
              <div className="empty-preview">
                <span>Görseliniz burada görünecek</span>
              </div>
            )}
          </div>

          <div className="preview-buttons">

            <button
              className="again-button"
              onClick={() => {
                setFile(null);
                setResultUrl("");
              }}
            >
              ⟳ &nbsp; Tekrar Yükle
            </button>

            {resultUrl && (
              <a
                className="download-button"
                href={resultUrl}
                download="arka-plansiz.png"
              >
                ↓ &nbsp; PNG Olarak İndir
              </a>
            )}

          </div>

        </section>

      </main>

      <section className="features">

        <div className="feature">
          <div className="feature-icon">ϟ</div>
          <div>
            <h3>Hızlı İşlem</h3>
            <p>Saniyeler içinde sonuç al.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">♢</div>
          <div>
            <h3>Yüksek Kalite</h3>
            <p>Net ve keskin görseller.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">▣</div>
          <div>
            <h3>Tüm Cihazlarda</h3>
            <p>Bilgisayar, tablet, telefon.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">♢</div>
          <div>
            <h3>Güvenli</h3>
            <p>Görselleriniz cihazınızda kalır.</p>
          </div>
        </div>

      </section>

    </div>
  );
}
import { useEffect, useState } from "react";
import "./Fonts.css";

const fontFiles = import.meta.glob(
  "./fonts/*.{ttf,otf,woff,woff2}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

function getFontName(path) {
  const fileName = path.split("/").pop();
  return fileName
    .replace(/\.(ttf|otf|woff2?|TTF|OTF|WOFF2?)$/i, "")
    .replace(/[-_]/g, " ");
}

function Fonts() {
  const [fonts, setFonts] = useState([]);
  const [text, setText] = useState("Patron Edit");

  useEffect(() => {
    const loadFonts = async () => {
      const loadedFonts = [];

      for (const [path, url] of Object.entries(fontFiles)) {
        const name = getFontName(path);
        const family = `PatronFont_${loadedFonts.length}`;

        try {
          const font = new FontFace(family, `url(${url})`);
          await font.load();
          document.fonts.add(font);

          loadedFonts.push({
            name,
            family,
            url,
          });
        } catch (error) {
          console.error("Font yüklenemedi:", name, error);
        }
      }

      setFonts(loadedFonts);
    };

    loadFonts();
  }, []);

  return (
    <div className="fonts-page">

      <div className="fonts-header">
        <div className="fonts-icon">Aa</div>

        <h1>Fontlar</h1>

        <p>
          Editlerinde kullanabileceğin özel fontları keşfet,
          yazını önizle ve indir.
        </p>

        <input
          className="font-text-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Buraya yaz..."
        />
      </div>

      <div className="fonts-grid">

        {fonts.map((font) => (
          <div className="font-card" key={font.family}>

            <div className="font-card-top">
              <span className="font-aa">Aa</span>

              <h2>{font.name}</h2>

              <p>Font</p>
            </div>

            <div
              className="font-preview"
              style={{
                fontFamily: `"${font.family}"`,
              }}
            >
              {text || "Patron Edit"}
            </div>

            <a
              className="font-download"
              href={font.url}
              download
            >
              ↓ İndir
            </a>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Fonts;
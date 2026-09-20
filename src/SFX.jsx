import "./SFX.css";

const soundFiles = import.meta.glob(
  "./assets/sfx/*.{mp3,wav,ogg}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

function getName(path) {
  const fileName = path.split("/").pop();
  return fileName
    .replace(/\.(mp3|wav|ogg)$/i, "")
    .replace(/[_-]+/g, " ")
    .trim();
}

export default function SFX() {
  const sounds = Object.entries(soundFiles).map(([path, url], index) => ({
    id: index,
    name: getName(path),
    url,
  }));

  return (
    <div className="sfx-page">
      <div className="sfx-header">
        <h1>SFX & Sesler</h1>
        <p>
          Videolarında kullanabileceğin ses efektlerini keşfet,
          dinle ve indir.
        </p>
      </div>

      <div className="sfx-grid">
        {sounds.map((sound) => (
          <div className="sfx-card" key={sound.id}>
            <div className="sfx-icon">🔊</div>

            <h2>{sound.name}</h2>
            <p>Sound Effect</p>

            <div className="sfx-player">
              <audio controls src={sound.url} />
              
              <a
                className="download-btn"
                href={sound.url}
                download
              >
                ↓ İndir
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
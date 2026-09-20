import "./Shake.css";

const shakes = Object.entries(
  import.meta.glob("./presets/*.ffx", {
    eager: true,
    query: "?url",
    import: "default",
  })
).map(([path, url]) => ({
  name: path.split("/").pop().replace(/\.ffx$/i, ""),
  type: "After Effects",
  url,
}));

function Shake() {
  return (
    <div className="programlar-page">

      <div className="programlar-header">
        <h1>Shake</h1>
        <p>Editlerinde kullanabileceğin hazır shake presetleri.</p>
      </div>

      <div className="program-grid">
        {shakes.map((shake, index) => (
          <div className="program-card" key={index}>

            <div className="program-icon">
              ⚡
            </div>

            <h2>{shake.name}</h2>

            <p className="program-type">
              {shake.type}
            </p>

            <div className="program-line"></div>

            <div className="program-actions">

              <a
                href={shake.url}
                download
                className="program-download"
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

export default Shake;
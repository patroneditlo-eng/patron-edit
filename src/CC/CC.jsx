import "./CC.css";

const presets = Object.entries(
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

function CC() {
  return (
    <div className="cc-page">
      <div className="cc-header">
        <h1>Edit CC'leri</h1>
        <p>Editlerinde kullanabileceğin hazır CC presetleri.</p>
      </div>

      <div className="cc-grid">
        {presets.map((preset, index) => (
          <div className="cc-card" key={index}>
            <div className="cc-preview">CC</div>

            <h2>{preset.name}</h2>

            <p>{preset.type}</p>

            <a
              href={preset.url}
              download
              className="cc-download"
            >
              ↓ İndir
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CC;
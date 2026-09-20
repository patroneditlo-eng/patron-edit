import "./Overlay.css";

const overlayFiles = import.meta.glob(
  "./assets/Overlay/*.{mp4,MP4,webm,WEBM,mov,MOV}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

function getName(path) {
  const fileName = path.split("/").pop();

  return fileName
    .replace(/\.(mp4|MP4|webm|WEBM|mov|MOV)$/i, "")
    .replace(/[_-]+/g, " ")
    .trim();
}

function Overlay() {
  const overlays = Object.entries(overlayFiles).map(
    ([path, url], index) => ({
      id: index,
      name: getName(path),
      url,
    })
  );

  return (
    <div className="overlay-page">

      <div className="overlay-header">
        <div className="overlay-label">KAYNAKLAR</div>

        <h1>Overlay</h1>

        <p>
          Videolarında kullanabileceğin overlay efektlerini
          izle, beğen ve indir.
        </p>
      </div>

      <div className="overlay-grid">

        {overlays.map((overlay) => (
          <div className="overlay-card" key={overlay.id}>

            <div className="overlay-preview">
              <video
                src={overlay.url}
                controls
                playsInline
                preload="metadata"
              />
            </div>

            <div className="overlay-info">

              <h2>{overlay.name}</h2>

              <p>Overlay Effect</p>

              <a
                className="overlay-download"
                href={overlay.url}
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

export default Overlay;
import "./Programlar.css";

const programs = [
  { icon: "Ae", name: "After Effects 2026", type: "Adobe • Güncel sürüm" },
  { icon: "Ae", name: "After Effects 2025", type: "Adobe • Önceki sürüm" },
  { icon: "Ae", name: "After Effects 2024", type: "Adobe • Eski sürüm" },
  { icon: "Ae", name: "After Effects 2023", type: "Adobe • Eski sürüm" },
  { icon: "Ae", name: "After Effects 2021", type: "Adobe • Eski sürüm" },

  { icon: "Ae", name: "After Effects 2020", type: "Adobe • Eski sürüm" },
  { icon: "Pr", name: "Premiere Pro 2026", type: "Adobe • Güncel sürüm" },
  { icon: "Pr", name: "Premiere Pro 2025", type: "Adobe • Güncel sürüm" },
  { icon: "Pr", name: "Premiere Pro 2024", type: "Adobe • Eski sürüm" },
  { icon: "Me", name: "Media Encoder 2026", type: "Adobe • Güncel sürüm" },

  { icon: "Me", name: "Media Encoder 2025", type: "Adobe • Güncel sürüm" },
  { icon: "Me", name: "Media Encoder 2024", type: "Adobe • Eski sürüm" },
  { icon: "Me", name: "Media Encoder 2023", type: "Adobe • Eski sürüm" },
  { icon: "Me", name: "Media Encoder 2021", type: "Adobe • Eski sürüm" },
  { icon: "Me", name: "Media Encoder 2020", type: "Adobe • Eski sürüm" },

  { icon: "Tv", name: "Topaz Video Activator v2", type: "Topaz Labs • Activated" },
  { icon: "Tp", name: "Topaz Photo Activator v2", type: "Topaz Labs • Activated" },
  { icon: "Tg", name: "Topaz Gigapixel Activator v2", type: "Topaz Labs • Activated" },
];

function Programlar() {
  return (
    <div className="programlar-page">

      <div className="programlar-header">
        <h1>Programlar</h1>
        <p>Edit için gerekli programları keşfet.</p>
      </div>

      <div className="program-grid">
        {programs.map((program, index) => (
          <div className="program-card" key={index}>

            <div className="program-icon">
              {program.icon}
            </div>

            <h2>{program.name}</h2>

            <p className="program-type">
              {program.type}
            </p>

            <div className="program-line"></div>

            <div className="program-actions">

              <button className="program-copy">
                ◧ AS
              </button>

              <a
                href="#"
                className="program-download"
                onClick={(e) => e.preventDefault()}
              >
                İndir / Git ↗
              </a>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Programlar;
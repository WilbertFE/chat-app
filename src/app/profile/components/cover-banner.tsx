import { Pencil } from "lucide-react";

export default function CoverBanner() {
  return (
    <div
      style={{
        height: "240px",
        position: "relative",
        border: "2px solid #000",
        borderLeft: "none",
        overflow: "hidden",
        backgroundColor: "#1a1a2e",
      }}
    >
      {/* Geometric SVG pattern */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 200"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0 }}
      >
        {/* Background */}
        <rect width="800" height="200" fill="#1a1a2e" />

        {/* Orange shapes */}
        <rect x="0" y="0" width="200" height="200" fill="#ff5c00" />
        <polygon points="200,0 350,0 200,200" fill="#ff5c00" />
        <rect x="600" y="60" width="120" height="80" fill="#ff5c00" stroke="#000" strokeWidth="2" />

        {/* Teal shapes */}
        <rect x="350" y="40" width="120" height="120" fill="#00bcd4" stroke="#000" strokeWidth="2" />
        <polygon points="470,40 590,40 590,160 470,160" fill="#4fc3f7" opacity="0.7" />

        {/* Black accent lines */}
        <line x1="200" y1="0" x2="200" y2="200" stroke="#000" strokeWidth="3" />
        <line x1="350" y1="0" x2="350" y2="200" stroke="#000" strokeWidth="2" />
        <line x1="590" y1="0" x2="590" y2="200" stroke="#000" strokeWidth="2" />
        <line x1="720" y1="0" x2="720" y2="200" stroke="#000" strokeWidth="2" />

        {/* Yellow accent box */}
        <rect x="720" y="0" width="80" height="200" fill="#ffde00" stroke="#000" strokeWidth="2" />

        {/* Decorative squares */}
        <rect x="240" y="20" width="40" height="40" fill="#ffde00" stroke="#000" strokeWidth="2" />
        <rect x="300" y="120" width="30" height="30" fill="#fff" stroke="#000" strokeWidth="2" />
        <rect x="640" y="20" width="50" height="50" fill="#0d0d0d" stroke="#000" strokeWidth="2" />

        {/* Grid dots */}
        {[440, 480, 520, 560].map((x) =>
          [80, 120].map((y) => (
            <rect key={`${x}-${y}`} x={x} y={y} width="8" height="8" fill="#fff" opacity="0.4" />
          ))
        )}
      </svg>

      {/* Pencil edit button */}
      <button
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          width: "32px",
          height: "32px",
          border: "2px solid #000",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "2px 2px 0 #000",
          zIndex: 10,
        }}
        aria-label="Edit cover"
        className="neo-btn-hover"
      >
        <Pencil size={14} />
      </button>
    </div>
  );
}

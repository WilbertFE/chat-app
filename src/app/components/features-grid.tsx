import { MessageSquare, Grid3x3, Zap, Volume2 } from "lucide-react";

export default function FeaturesGrid() {
  return (
    <section style={{ borderBottom: "2px solid #000" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto",
        }}
      >
        {/* Card 1 — THREADED CHAOS (blue, spans tall) */}
        <div
          style={{
            backgroundColor: "#4fc3f7",
            border: "2px solid #000",
            borderTop: "none",
            borderLeft: "none",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            gridRow: "1 / 2",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                border: "2px solid #000",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <MessageSquare size={22} />
            </div>
            <h3
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 800,
                fontSize: "1.4rem",
                margin: 0,
                letterSpacing: "0.02em",
              }}
            >
              THREADED CHAOS
            </h3>
          </div>
          <p
            style={{
              fontFamily: "var(--font-ibm), monospace",
              fontSize: "0.875rem",
              color: "#0d0d0d",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Keep conversations bounded by thick strokes. Hierarchy established through hard-edged structure, not subtle blur.
          </p>
          {/* Decorative box */}
          <div
            style={{
              marginTop: "auto",
              border: "2px solid #000",
              backgroundColor: "#fff",
              padding: "12px",
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <div style={{ width: "8px", height: "36px", backgroundColor: "#000" }} />
            <div style={{ flex: 1, height: "8px", backgroundColor: "#000", opacity: 0.2 }} />
            <div style={{ width: "36px", height: "36px", border: "2px solid #000", backgroundColor: "#ffde00" }} />
          </div>
        </div>

        {/* Card 2 — SERVER HUBS (pink) */}
        <div
          style={{
            backgroundColor: "#ffd6cc",
            border: "2px solid #000",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                border: "2px solid #000",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Grid3x3 size={22} />
            </div>
            <h3
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 800,
                fontSize: "1.4rem",
                margin: 0,
              }}
            >
              SERVER HUBS
            </h3>
          </div>
          <p
            style={{
              fontFamily: "var(--font-ibm), monospace",
              fontSize: "0.875rem",
              color: "#0d0d0d",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Fixed-pixel sidebars that feel like heavy cards resting on the background. No floaty sidebars.
          </p>
        </div>

        {/* Card 3 — INSTANT SYNC (off-white) */}
        <div
          style={{
            backgroundColor: "#fffdf5",
            border: "2px solid #000",
            borderTop: "none",
            borderLeft: "none",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                border: "2px solid #000",
                backgroundColor: "#ffde00",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Zap size={22} />
            </div>
            <h3
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 800,
                fontSize: "1.4rem",
                margin: 0,
              }}
            >
              INSTANT SYNC
            </h3>
          </div>
          <p
            style={{
              fontFamily: "var(--font-ibm), monospace",
              fontSize: "0.875rem",
              color: "#0d0d0d",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            No 2-axis lighting simulations. Just immediate, 2D mechanical state updates across all clients.
          </p>
        </div>

        {/* Card 4 — MECHANICAL AUDIO (white, large) */}
        <div
          style={{
            backgroundColor: "#fff",
            border: "2px solid #000",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            position: "relative",
          }}
        >
          {/* NEW FEATURE badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <span
              style={{
                backgroundColor: "#ff5c00",
                border: "2px solid #000",
                borderRadius: "999px",
                padding: "3px 12px",
                fontSize: "0.65rem",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              NEW FEATURE
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                border: "2px solid #000",
                backgroundColor: "#0d0d0d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Volume2 size={22} color="#fff" />
            </div>
            <h3
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 800,
                fontSize: "1.4rem",
                margin: 0,
              }}
            >
              MECHANICAL AUDIO
            </h3>
          </div>
          <p
            style={{
              fontFamily: "var(--font-ibm), monospace",
              fontSize: "0.875rem",
              color: "#0d0d0d",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Voice channels that don't try to hide the tech. Raw bitrates, clear indications, hard-edged volume meters.
          </p>
          {/* Bar chart SVG */}
          <div style={{ marginTop: "auto" }}>
            <svg width="120" height="48" viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              {[8, 20, 36, 24, 40, 16, 44, 28, 12, 32].map((h, i) => (
                <rect
                  key={i}
                  x={i * 12}
                  y={48 - h}
                  width="9"
                  height={h}
                  fill={i % 3 === 0 ? "#ff5c00" : "#0d0d0d"}
                  stroke="#000"
                  strokeWidth="1"
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

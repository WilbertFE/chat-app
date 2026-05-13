import { User } from "lucide-react";
import { currentUser } from "@/lib/mock-data";

export default function AboutCard() {
  return (
    <div
      style={{
        border: "2px solid #000",
        boxShadow: "4px 4px 0 #000",
        backgroundColor: "#fff",
        padding: "24px",
        fontFamily: "var(--font-ibm), monospace",
      }}
    >
      {/* Heading */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
        <User size={18} />
        <h2
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "1.1rem",
            margin: 0,
            letterSpacing: "0.05em",
          }}
        >
          ABOUT ME
        </h2>
      </div>

      <div style={{ borderTop: "2px dashed #ccc", marginBottom: "16px" }} />

      {/* Bio */}
      <p
        style={{
          fontSize: "0.875rem",
          color: "#0d0d0d",
          lineHeight: 1.7,
          margin: "0 0 16px",
          whiteSpace: "pre-line",
        }}
      >
        {currentUser.bio}
      </p>

      <div style={{ borderTop: "2px dashed #ccc", marginBottom: "16px" }} />

      {/* Interest tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {currentUser.interests.map((tag) => (
          <span
            key={tag}
            style={{
              border: "2px solid #000",
              padding: "4px 12px",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "#0d0d0d",
              backgroundColor: "#fffdf5",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

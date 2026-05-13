import { servers } from "@/lib/mock-data";
import { Plus } from "lucide-react";

export default function ServerStrip() {
  return (
    <div
      style={{
        width: "56px",
        minWidth: "56px",
        backgroundColor: "#fde8e0",
        borderRight: "2px solid #000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "12px 0",
        gap: "8px",
        height: "100%",
      }}
    >
      {servers.map((server) => (
        <button
          key={server.id}
          title={server.name}
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: server.color,
            border: server.active ? "2px solid #ff5c00" : "2px solid #000",
            boxShadow: server.active ? "3px 3px 0 #000" : "2px 2px 0 #000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontFamily: "var(--font-ibm), monospace",
            fontWeight: 700,
            fontSize: "0.65rem",
            color: "#fff",
            letterSpacing: "0.05em",
            flexShrink: 0,
          }}
          aria-label={server.name}
        >
          {server.abbr}
        </button>
      ))}

      <div style={{ flex: 1 }} />

      {/* Add server */}
      <button
        style={{
          width: "36px",
          height: "36px",
          backgroundColor: "#00c853",
          border: "2px solid #000",
          boxShadow: "2px 2px 0 #000",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        aria-label="Add server"
      >
        <Plus size={16} color="#fff" />
      </button>
    </div>
  );
}

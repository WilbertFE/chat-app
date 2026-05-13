"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import { currentUser } from "@/lib/mock-data";

export default function ProfileHeader() {
  const [editing, setEditing] = useState(false);

  return (
    <div
      style={{
        padding: "20px 32px",
        borderBottom: "2px solid #000",
        borderLeft: "none",
        display: "flex",
        alignItems: "flex-end",
        gap: "20px",
        backgroundColor: "#fffdf5",
        position: "relative",
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: "100px",
          height: "100px",
          border: "3px solid #000",
          boxShadow: "4px 4px 0 #000",
          backgroundColor: "#ff5c00",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 800,
          fontSize: "2rem",
          color: "#fff",
          flexShrink: 0,
          marginTop: "-50px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {currentUser.initials}
        {/* Online dot */}
        <span
          style={{
            position: "absolute",
            bottom: "4px",
            right: "4px",
            width: "14px",
            height: "14px",
            backgroundColor: "#00c853",
            border: "2px solid #000",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Info */}
      <div style={{ flex: 1 }}>
        <h1
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "2.5rem",
            textTransform: "uppercase",
            margin: "0 0 8px",
            color: "#0d0d0d",
            lineHeight: 1,
          }}
        >
          {currentUser.name.toUpperCase()}
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          <span
            style={{
              fontFamily: "var(--font-ibm), monospace",
              fontSize: "0.8rem",
              border: "2px solid #000",
              padding: "2px 10px",
              color: "#0d0d0d",
            }}
          >
            {currentUser.handle}
          </span>
          <span
            style={{
              fontFamily: "var(--font-ibm), monospace",
              fontSize: "0.7rem",
              fontWeight: 700,
              border: "2px solid #000",
              padding: "2px 10px",
              color: "#0d0d0d",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {currentUser.role}
          </span>
        </div>
      </div>

      {/* Edit profile button */}
      <button
        onClick={() => setEditing(!editing)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#ff5c00",
          border: "2px solid #000",
          boxShadow: "4px 4px 0 #000",
          fontFamily: "var(--font-ibm), monospace",
          fontWeight: 700,
          fontSize: "0.8rem",
          color: "#fff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          alignSelf: "flex-start",
        }}
        className="neo-btn-hover"
      >
        <Pencil size={14} />
        {editing ? "SAVE PROFILE" : "EDIT PROFILE"}
      </button>
    </div>
  );
}

"use client";

import Link from "next/link";
import { MessageSquare, Grid3x3, User, HelpCircle, LogOut, Plus, Mic, Headphones } from "lucide-react";
import { currentUser } from "@/lib/mock-data";

type ActiveRoute = "messages" | "servers" | "profile" | "help";

interface DashboardSidebarProps {
  activeRoute: ActiveRoute;
  showNewServerTopButton?: boolean;
  showAudioControls?: boolean;
}

const navItems = [
  { key: "messages" as ActiveRoute, label: "Messages", icon: MessageSquare, href: "/messages" },
  { key: "servers" as ActiveRoute, label: "Servers", icon: Grid3x3, href: "/dashboard" },
  { key: "profile" as ActiveRoute, label: "Profile", icon: User, href: "/profile" },
  { key: "help" as ActiveRoute, label: "Help", icon: HelpCircle, href: "/help" },
];

export default function DashboardSidebar({
  activeRoute,
  showNewServerTopButton = false,
  showAudioControls = false,
}: DashboardSidebarProps) {
  return (
    <div
      style={{
        width: "260px",
        minWidth: "260px",
        backgroundColor: "#fde8e0",
        borderRight: "2px solid #000",
        display: "flex",
        flexDirection: "column",
        fontFamily: "var(--font-ibm), monospace",
        height: "100%",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "16px",
          borderBottom: "2px solid #000",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: "#ff5c00",
            border: "2px solid #000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid3x3 size={16} color="#fff" />
        </div>
        <span
          style={{
            fontFamily: "var(--font-ibm), monospace",
            fontWeight: 700,
            fontSize: "0.95rem",
            letterSpacing: "0.05em",
          }}
        >
          NEOCHAT
        </span>
      </div>

      {/* New Server top button */}
      {showNewServerTopButton && (
        <div style={{ padding: "12px 16px", borderBottom: "2px solid #000" }}>
          <button
            style={{
              width: "100%",
              backgroundColor: "#ff5c00",
              border: "2px solid #000",
              boxShadow: "3px 3px 0 #000",
              color: "#fff",
              fontFamily: "var(--font-ibm), monospace",
              fontWeight: 700,
              fontSize: "0.8rem",
              padding: "8px 12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              cursor: "pointer",
              letterSpacing: "0.05em",
            }}
            className="neo-btn-hover"
          >
            <Plus size={14} />
            NEW SERVER
          </button>
        </div>
      )}

      {/* Nav Items */}
      <nav style={{ padding: "8px 0", flex: 1 }}>
        {navItems.map(({ key, label, icon: Icon, href }) => {
          const isActive = activeRoute === key;
          return (
            <Link
              key={key}
              href={href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 16px",
                fontWeight: isActive ? 700 : 400,
                fontSize: "0.9rem",
                backgroundColor: isActive ? "#ffde00" : "transparent",
                borderLeft: isActive ? "3px solid #000" : "3px solid transparent",
                color: "#0d0d0d",
                textDecoration: "none",
                transition: "background 0.1s",
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.05)";
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <Icon size={18} />
              {label}
            </Link>
          );
        })}

        {/* Channels (servers view only) */}
        {activeRoute === "servers" && (
          <div style={{ marginTop: "8px", borderTop: "1px solid rgba(0,0,0,0.15)" }}>
            <div
              style={{
                padding: "10px 16px 4px",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#555",
                textTransform: "uppercase",
              }}
            >
              Channels
            </div>
            {["showcase", "general", "random"].map((ch, i) => (
              <div
                key={ch}
                style={{
                  padding: "7px 16px",
                  fontSize: "0.875rem",
                  cursor: "pointer",
                  fontWeight: i === 0 ? 700 : 400,
                  color: i === 0 ? "#ff5c00" : "#0d0d0d",
                  backgroundColor: i === 0 ? "rgba(255,92,0,0.08)" : "transparent",
                }}
              >
                # {ch}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* Bottom user area */}
      <div style={{ borderTop: "2px solid #000", padding: "12px 16px" }}>
        {showAudioControls && (
          <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
            <button
              style={{
                width: "36px",
                height: "36px",
                border: "2px solid #000",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              aria-label="Microphone"
            >
              <Mic size={16} />
            </button>
            <button
              style={{
                width: "36px",
                height: "36px",
                border: "2px solid #000",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              aria-label="Headphones"
            >
              <Headphones size={16} />
            </button>
          </div>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
          <div
            style={{
              position: "relative",
              width: "40px",
              height: "40px",
              border: "2px solid #000",
              backgroundColor: "#ff5c00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              fontWeight: 700,
              color: "#fff",
              fontSize: "0.75rem",
            }}
          >
            {currentUser.initials}
            <span
              style={{
                position: "absolute",
                bottom: "-3px",
                right: "-3px",
                width: "10px",
                height: "10px",
                backgroundColor: "#00c853",
                border: "2px solid #000",
                borderRadius: "50%",
              }}
            />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 700, fontSize: "0.85rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {currentUser.name}
            </div>
            <div style={{ fontSize: "0.75rem", color: "#555", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {currentUser.handle}
            </div>
          </div>
        </div>
        <Link
          href="/signin"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "0.8rem",
            color: "#555",
            textDecoration: "none",
          }}
        >
          <LogOut size={14} />
          Logout
        </Link>
      </div>
    </div>
  );
}

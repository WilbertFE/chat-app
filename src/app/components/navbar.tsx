"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "#fff",
        borderBottom: "2px solid #000",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        height: "60px",
        fontFamily: "var(--font-ibm), monospace",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 800,
          fontSize: "1.4rem",
          color: "#0d0d0d",
          textDecoration: "none",
          letterSpacing: "0.02em",
        }}
      >
        NEOCHAT
      </Link>

      {/* Center links */}
      <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
        {["FEATURES", "PRICING", "ABOUT"].map((item) => (
          <a
            key={item}
            href="#"
            style={{
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              color: "#0d0d0d",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Auth buttons */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Link
          href="/signin"
          style={{
            padding: "8px 18px",
            border: "2px solid #000",
            backgroundColor: "#fff",
            boxShadow: "3px 3px 0 #000",
            fontFamily: "var(--font-ibm), monospace",
            fontWeight: 700,
            fontSize: "0.8rem",
            color: "#0d0d0d",
            textDecoration: "none",
            display: "inline-block",
            transition: "transform 0.1s, box-shadow 0.1s",
          }}
          className="neo-btn-hover"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          style={{
            padding: "8px 18px",
            border: "2px solid #000",
            backgroundColor: "#ff5c00",
            boxShadow: "3px 3px 0 #000",
            fontFamily: "var(--font-ibm), monospace",
            fontWeight: 700,
            fontSize: "0.8rem",
            color: "#fff",
            textDecoration: "none",
            display: "inline-block",
            textTransform: "uppercase",
          }}
          className="neo-btn-hover"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

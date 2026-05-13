"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { LogIn } from "lucide-react";

export default function SignInPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffde00",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-ibm), monospace",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          border: "3px solid #000",
          boxShadow: "8px 8px 0 #000",
          width: "420px",
          padding: "48px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* App name */}
        <span
          style={{
            fontFamily: "var(--font-ibm), monospace",
            fontWeight: 700,
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#0d0d0d",
          }}
        >
          NEOCHAT
        </span>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "2rem",
            margin: 0,
            textAlign: "center",
            color: "#0d0d0d",
          }}
        >
          Welcome back.
        </h1>

        <div style={{ width: "100%", borderTop: "1px solid #eee" }} />

        {/* Google button */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/messages" })}
          style={{
            width: "100%",
            backgroundColor: "#fff",
            border: "2px solid #000",
            boxShadow: "4px 4px 0 #000",
            padding: "14px 20px",
            fontFamily: "var(--font-ibm), monospace",
            fontWeight: 700,
            fontSize: "0.9rem",
            color: "#0d0d0d",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            letterSpacing: "0.02em",
          }}
          className="neo-btn-hover"
        >
          <LogIn size={18} />
          Continue with Google
        </button>

        {/* Sign up link */}
        <p style={{ fontSize: "0.85rem", color: "#555", margin: 0, textAlign: "center" }}>
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            style={{
              color: "#ff5c00",
              fontWeight: 700,
              textDecoration: "underline",
            }}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

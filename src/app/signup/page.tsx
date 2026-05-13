"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function SignUpPage() {
  const router = useRouter();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ff5c00",
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
          Join the conversation.
        </h1>

        <p
          style={{
            fontFamily: "var(--font-ibm), monospace",
            fontSize: "0.875rem",
            color: "#555",
            margin: 0,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Create an account to get started.
        </p>

        <div style={{ width: "100%", borderTop: "1px solid #eee" }} />

        {/* Google button */}
        <button
          onClick={() => router.push("/dashboard")}
          style={{
            width: "100%",
            backgroundColor: "#fff",
            border: "2px solid #000",
            boxShadow: "4px 4px 0 #000",
            padding: "14px 20px",
            fontFamily: "var(--font-ibm), monospace",
            fontWeight: 700,
            fontSize: "0.85rem",
            color: "#0d0d0d",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
          className="neo-btn-hover"
        >
          <GoogleIcon />
          CONTINUE WITH GOOGLE
        </button>

        {/* Sign in link */}
        <p style={{ fontSize: "0.85rem", color: "#555", margin: 0, textAlign: "center" }}>
          Already have an account?{" "}
          <Link
            href="/signin"
            style={{
              color: "#ff5c00",
              fontWeight: 700,
              textDecoration: "underline",
            }}
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

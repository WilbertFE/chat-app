import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      style={{
        marginTop: "60px",
        border: "2px solid #000",
        borderTop: "none",
        padding: "80px 64px",
        backgroundColor: "#fffdf5",
        fontFamily: "var(--font-ibm), monospace",
      }}
    >
      {/* Headline */}
      <h1
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 800,
          fontSize: "clamp(3rem, 8vw, 5rem)",
          lineHeight: 1.0,
          textTransform: "uppercase",
          color: "#0d0d0d",
          marginBottom: "32px",
          letterSpacing: "-0.01em",
        }}
      >
        CHAT LOUD.
        <br />
        SPEAK BOLD.
      </h1>

      {/* Yellow subtext box */}
      <div
        style={{
          display: "inline-block",
          backgroundColor: "#ffde00",
          border: "2px solid #000",
          padding: "14px 20px",
          marginBottom: "48px",
          maxWidth: "600px",
        }}
      >
        <p
          style={{
            fontSize: "0.95rem",
            fontStyle: "italic",
            color: "#0d0d0d",
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          Ditch the soft, blurred aesthetics of modern SaaS. Embrace a raw, intentional communication platform
          built for communities that value character and high-contrast clarity.
        </p>
      </div>

      {/* CTAs */}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <Link
          href="/signup"
          style={{
            padding: "14px 32px",
            backgroundColor: "#ff5c00",
            border: "2px solid #000",
            boxShadow: "4px 4px 0 #000",
            fontFamily: "var(--font-ibm), monospace",
            fontWeight: 700,
            fontSize: "0.9rem",
            color: "#fff",
            textDecoration: "none",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            display: "inline-block",
          }}
          className="neo-btn-hover"
        >
          GET STARTED FREE
        </Link>
        <Link
          href="/dashboard"
          style={{
            padding: "14px 32px",
            backgroundColor: "#fff",
            border: "2px solid #000",
            boxShadow: "4px 4px 0 #000",
            fontFamily: "var(--font-ibm), monospace",
            fontWeight: 700,
            fontSize: "0.9rem",
            color: "#0d0d0d",
            textDecoration: "none",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            display: "inline-block",
          }}
          className="neo-btn-hover"
        >
          VIEW DEMO
        </Link>
      </div>
    </section>
  );
}

export default function MarqueeStrip() {
  const text =
    "// UNAPOLOGETICALLY BOLD // BUILT FOR COMMUNITIES // STRUCTURAL HONESTY // NO BLUR. NO GRADIENTS.    ";

  return (
    <div
      style={{
        backgroundColor: "#ff5c00",
        borderTop: "2px solid #000",
        borderBottom: "2px solid #000",
        overflow: "hidden",
        padding: "14px 0",
        whiteSpace: "nowrap",
      }}
    >
      <div
        className="animate-marquee"
        style={{
          display: "inline-flex",
          gap: 0,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-ibm), monospace",
            fontWeight: 700,
            fontSize: "0.85rem",
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            paddingRight: "0",
          }}
        >
          {text}
          {text}
        </span>
      </div>
    </div>
  );
}

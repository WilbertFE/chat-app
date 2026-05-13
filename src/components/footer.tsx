"use client";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#fffdf5",
        borderTop: "2px solid #000",
        fontFamily: "var(--font-ibm), monospace",
      }}
      className="w-full py-6 px-8"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <span style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "1.1rem" }}>
          NEOCHAT
        </span>
        <div className="flex gap-6 text-xs uppercase tracking-widest" style={{ color: "#555" }}>
          <a href="#" className="hover:text-black transition-colors">TERMS</a>
          <span style={{ color: "#999" }}>·</span>
          <a href="#" className="hover:text-black transition-colors">PRIVACY</a>
          <span style={{ color: "#999" }}>·</span>
          <a href="#" className="hover:text-black transition-colors">STATUS</a>
          <span style={{ color: "#999" }}>·</span>
          <a href="#" className="hover:text-black transition-colors">TWITTER</a>
        </div>
        <span className="text-xs" style={{ color: "#555" }}>
          © 2024 NEOCHAT. Built for the bold.
        </span>
      </div>
    </footer>
  );
}

"use client";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-8 bg-neo-bg border-t-2 border-t-black font-mono">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <span className="font-syne text-[1.1rem]">NEOCHAT</span>
        <div className="flex gap-6 text-xs uppercase tracking-widest text-neo-muted">
          <a href="#" className="hover:text-black transition-colors">TERMS</a>
          <span className="text-[#999]">·</span>
          <a href="#" className="hover:text-black transition-colors">PRIVACY</a>
          <span className="text-[#999]">·</span>
          <a href="#" className="hover:text-black transition-colors">STATUS</a>
          <span className="text-[#999]">·</span>
          <a href="#" className="hover:text-black transition-colors">TWITTER</a>
        </div>
        <span className="text-xs text-neo-muted">© 2024 NEOCHAT. Built for the bold.</span>
      </div>
    </footer>
  );
}

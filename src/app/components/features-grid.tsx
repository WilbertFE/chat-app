import { MessageSquare, Grid3x3, Zap, Volume2 } from "lucide-react";

export default function FeaturesGrid() {
  return (
    <section className="border-b-2 border-b-black">
      <div className="grid grid-cols-2">
        {/* Card 1 — THREADED CHAOS (blue) */}
        <div className="bg-neo-blue border-r-2 border-b-2 border-black p-10 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 border-2 border-black bg-white flex items-center justify-center shrink-0">
              <MessageSquare size={22} />
            </div>
            <h3 className="font-syne text-[1.4rem] m-0 tracking-[0.02em]">
              THREADED CHAOS
            </h3>
          </div>
          <p className="font-mono text-[0.875rem] text-neo-text leading-[1.6] m-0">
            Keep conversations bounded by thick strokes. Hierarchy established through hard-edged structure, not subtle blur.
          </p>
          {/* Decorative box */}
          <div className="mt-auto border-2 border-black bg-white p-3 flex gap-2 items-center">
            <div className="w-2 h-9 bg-black" />
            <div className="flex-1 h-2 bg-black opacity-20" />
            <div className="w-9 h-9 border-2 border-black bg-neo-yellow" />
          </div>
        </div>

        {/* Card 2 — SERVER HUBS (pink) */}
        <div className="bg-neo-pink border-b-2 border-black p-10 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 border-2 border-black bg-white flex items-center justify-center shrink-0">
              <Grid3x3 size={22} />
            </div>
            <h3 className="font-syne text-[1.4rem] m-0">
              SERVER HUBS
            </h3>
          </div>
          <p className="font-mono text-[0.875rem] text-neo-text leading-[1.6] m-0">
            Fixed-pixel sidebars that feel like heavy cards resting on the background. No floaty sidebars.
          </p>
        </div>

        {/* Card 3 — INSTANT SYNC (off-white) */}
        <div className="bg-neo-bg border-r-2 border-b-2 border-black p-10 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 border-2 border-black bg-neo-yellow flex items-center justify-center shrink-0">
              <Zap size={22} />
            </div>
            <h3 className="font-syne text-[1.4rem] m-0">
              INSTANT SYNC
            </h3>
          </div>
          <p className="font-mono text-[0.875rem] text-neo-text leading-[1.6] m-0">
            No 2-axis lighting simulations. Just immediate, 2D mechanical state updates across all clients.
          </p>
        </div>

        {/* Card 4 — MECHANICAL AUDIO (white) */}
        <div className="bg-white border-b-2 border-black p-10 flex flex-col gap-4 relative">
          {/* NEW FEATURE badge */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="bg-neo-orange border-2 border-black rounded-full py-[3px] px-3 text-[0.65rem] font-bold text-white tracking-[0.08em] uppercase">
              NEW FEATURE
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 border-2 border-black bg-neo-text flex items-center justify-center shrink-0">
              <Volume2 size={22} color="#fff" />
            </div>
            <h3 className="font-syne text-[1.4rem] m-0">
              MECHANICAL AUDIO
            </h3>
          </div>
          <p className="font-mono text-[0.875rem] text-neo-text leading-[1.6] m-0">
            Voice channels that don&apos;t try to hide the tech. Raw bitrates, clear indications, hard-edged volume meters.
          </p>
          {/* Bar chart SVG */}
          <div className="mt-auto">
            <svg width="120" height="48" viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              {[8, 20, 36, 24, 40, 16, 44, 28, 12, 32].map((h, i) => (
                <rect
                  key={i}
                  x={i * 12}
                  y={48 - h}
                  width="9"
                  height={h}
                  fill={i % 3 === 0 ? "#ff5c00" : "#0d0d0d"}
                  stroke="#000"
                  strokeWidth="1"
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

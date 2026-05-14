import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neo-blue flex items-center justify-center font-mono">
      <div className="bg-white border-[3px] border-black shadow-neo-xl w-[480px] py-12 px-10 flex flex-col items-center gap-5">
        <span className="font-mono font-bold text-[0.8rem] tracking-[0.15em] uppercase text-neo-text">
          NEOCHAT
        </span>

        <div className="bg-neo-yellow border-2 border-black px-8 py-4">
          <span className="font-syne text-[6rem] leading-none text-neo-text">
            404
          </span>
        </div>

        <div className="w-full border-t border-[#eee]" />

        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="font-syne text-[1.75rem] m-0 text-neo-text">
            Page not found.
          </h1>
          <p className="font-mono text-[0.85rem] text-neo-muted m-0 leading-[1.6]">
            The page you&apos;re looking for doesn&apos;t exist<br />or has been moved.
          </p>
        </div>

        <div className="w-full border-t border-[#eee]" />

        <Link
          href="/"
          className="w-full bg-neo-orange hover:bg-neo-orange text-white border-2 border-black shadow-neo py-[14px] px-5 font-mono font-bold text-[0.9rem] uppercase tracking-[0.05em] neo-btn-hover text-center"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}

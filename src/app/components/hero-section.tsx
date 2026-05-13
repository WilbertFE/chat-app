import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="mt-[60px] border-l-2 border-r-2 border-b-2 border-black py-20 px-16 bg-neo-bg font-mono">
      {/* Headline */}
      <h1 className="font-syne text-[clamp(3rem,8vw,5rem)] leading-none uppercase text-neo-text mb-8 tracking-[-0.01em]">
        CHAT LOUD.
        <br />
        SPEAK BOLD.
      </h1>

      {/* Yellow subtext box */}
      <div className="inline-block bg-neo-yellow border-2 border-black py-[14px] px-5 mb-12 max-w-[600px]">
        <p className="text-[0.95rem] italic text-neo-text m-0 leading-[1.6]">
          Ditch the soft, blurred aesthetics of modern SaaS. Embrace a raw, intentional communication platform
          built for communities that value character and high-contrast clarity.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex gap-4 flex-wrap">
        <Link
          href="/signup"
          className="py-[14px] px-8 bg-neo-orange border-2 border-black shadow-neo font-mono font-bold text-[0.9rem] text-white no-underline uppercase tracking-[0.08em] inline-block neo-btn-hover"
        >
          GET STARTED FREE
        </Link>
        <Link
          href="/dashboard"
          className="py-[14px] px-8 bg-white border-2 border-black shadow-neo font-mono font-bold text-[0.9rem] text-neo-text no-underline uppercase tracking-[0.08em] inline-block neo-btn-hover"
        >
          VIEW DEMO
        </Link>
      </div>
    </section>
  );
}

export default function MarqueeStrip() {
  const text =
    "// UNAPOLOGETICALLY BOLD // BUILT FOR COMMUNITIES // STRUCTURAL HONESTY // NO BLUR. NO GRADIENTS.    ";

  return (
    <div className="bg-neo-orange border-t-2 border-b-2 border-black overflow-hidden py-[14px] whitespace-nowrap">
      <div className="animate-marquee inline-flex">
        <span className="font-mono font-bold text-[0.85rem] text-white uppercase tracking-[0.05em]">
          {text}
          {text}
        </span>
      </div>
    </div>
  );
}

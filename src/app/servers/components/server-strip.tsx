import { servers } from "@/lib/mock-data";
import { Plus } from "lucide-react";

export default function ServerStrip() {
  return (
    <div className="w-14 min-w-14 bg-neo-sidebar border-r-2 border-r-black flex flex-col items-center py-3 gap-2 h-full">
      {servers.map((server) => (
        <button
          key={server.id}
          title={server.name}
          style={{ backgroundColor: server.color }}
          className={`w-10 h-10 flex items-center justify-center cursor-pointer font-mono font-bold text-[0.65rem] text-white tracking-[0.05em] shrink-0 ${
            server.active
              ? "border-2 border-neo-orange shadow-neo-sm"
              : "border-2 border-black shadow-neo-xs"
          }`}
          aria-label={server.name}
        >
          {server.abbr}
        </button>
      ))}

      <div className="flex-1" />

      {/* Add server */}
      <button
        className="w-9 h-9 bg-neo-green border-2 border-black shadow-neo-xs rounded-full flex items-center justify-center cursor-pointer"
        aria-label="Add server"
      >
        <Plus size={16} color="#fff" />
      </button>
    </div>
  );
}

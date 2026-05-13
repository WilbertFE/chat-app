import { User } from "lucide-react";
import { currentUser } from "@/lib/mock-data";

export default function AboutCard() {
  return (
    <div className="border-2 border-black shadow-neo bg-white p-6 font-mono">
      {/* Heading */}
      <div className="flex items-center gap-[10px] mb-3">
        <User size={18} />
        <h2 className="font-syne text-[1.1rem] m-0 tracking-[0.05em]">
          ABOUT ME
        </h2>
      </div>

      <div className="border-t-2 border-dashed border-[#ccc] mb-4" />

      {/* Bio */}
      <p className="text-[0.875rem] text-neo-text leading-[1.7] m-0 mb-4 whitespace-pre-line">
        {currentUser.bio}
      </p>

      <div className="border-t-2 border-dashed border-[#ccc] mb-4" />

      {/* Interest tags */}
      <div className="flex flex-wrap gap-2">
        {currentUser.interests.map((tag) => (
          <span
            key={tag}
            className="border-2 border-black py-1 px-3 text-[0.75rem] font-medium text-neo-text bg-neo-bg"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

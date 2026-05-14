import { User as UserIcon } from "lucide-react";
import type { User } from "@/types/user";

interface AboutCardProps {
  user: User;
}

export default function AboutCard({ user }: AboutCardProps) {
  return (
    <div className="border-2 border-black shadow-neo bg-white p-6 font-mono">
      <div className="flex items-center gap-[10px] mb-3">
        <UserIcon size={18} />
        <h2 className="font-syne text-[1.1rem] m-0 tracking-[0.05em]">ABOUT ME</h2>
      </div>

      <div className="border-t-2 border-dashed border-[#ccc] mb-4" />

      {user.about ? (
        <p className="text-[0.875rem] text-neo-text leading-[1.7] m-0 whitespace-pre-line">
          {user.about}
        </p>
      ) : (
        <p className="text-[0.875rem] text-neo-muted leading-[1.7] m-0 italic">
          No bio yet.
        </p>
      )}
    </div>
  );
}

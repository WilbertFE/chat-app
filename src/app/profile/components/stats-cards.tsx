import { MessageSquare, Users, Calendar } from "lucide-react";
import type { User } from "@/types/user";

function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

function formatMemberSince(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

interface StatsCardsProps {
  user: User;
}

export default function StatsCards({ user }: StatsCardsProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Messages Sent */}
      <div className="border-2 border-black shadow-neo bg-white py-5 px-6 relative overflow-hidden">
        <div className="text-[0.7rem] font-bold tracking-[0.12em] text-neo-muted uppercase font-mono mb-2">
          MESSAGES SENT
        </div>
        <div className="font-syne text-[3rem] text-neo-text leading-none">
          {formatCount(user.messages_sent ?? 0)}
        </div>
        <MessageSquare
          size={64}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#e0e0e0] opacity-50"
        />
      </div>

      {/* Servers Joined */}
      <div className="border-2 border-black shadow-neo bg-neo-yellow py-5 px-6 relative overflow-hidden">
        <div className="text-[0.7rem] font-bold tracking-[0.12em] text-neo-muted uppercase font-mono mb-2">
          SERVERS JOINED
        </div>
        <div className="font-syne text-[3rem] text-neo-text leading-none">
          {user.servers_joined ?? 0}
        </div>
        <Users
          size={64}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-neo-text opacity-[0.15]"
        />
      </div>

      {/* Member Since */}
      <div className="border-2 border-black shadow-neo bg-white py-5 px-6 flex items-center gap-4">
        <div>
          <div className="text-[0.7rem] font-bold tracking-[0.12em] text-neo-muted uppercase font-mono mb-2">
            MEMBER SINCE
          </div>
          <div className="font-syne text-[1.8rem] text-neo-text leading-none">
            {formatMemberSince(user.created_at)}
          </div>
        </div>
        <div className="ml-auto w-[52px] h-[52px] border-2 border-black bg-neo-orange flex items-center justify-center shrink-0">
          <Calendar size={24} color="#fff" />
        </div>
      </div>
    </div>
  );
}

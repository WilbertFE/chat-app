import { onlineUsers, offlineUsers } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

export default function MembersSidebar() {
  return (
    <div className="w-[220px] min-w-[220px] bg-neo-bg border-l-2 border-l-black flex flex-col font-mono h-full overflow-y-auto">
      {/* Online section */}
      <div className="pt-4 px-4 pb-2">
        <div className="text-[0.7rem] font-bold tracking-[0.12em] text-neo-muted uppercase mb-2.5">
          ONLINE — {onlineUsers.length}
        </div>
        {onlineUsers.map((user) => (
          <div key={user.id} className="flex items-center gap-2.5 py-[5px]">
            <div className="relative shrink-0">
              <div
                className={`w-8 h-8 border-2 border-black flex items-center justify-center font-bold text-[0.65rem] ${
                  user.isCurrentUser
                    ? "bg-neo-orange text-white"
                    : "bg-[#e0e0e0] text-neo-text"
                }`}
              >
                {user.initials}
              </div>
              <span className="absolute -bottom-[2px] -right-[2px] w-[9px] h-[9px] bg-neo-green border-2 border-white rounded-full" />
            </div>
            <div className="flex-1 min-w-0">
              <div
                className={`text-[0.8rem] font-bold overflow-hidden text-ellipsis whitespace-nowrap ${
                  user.isCurrentUser ? "text-neo-orange" : "text-neo-text"
                }`}
              >
                {user.name}
              </div>
            </div>
            {user.isBot && (
              <Badge className="text-[0.6rem] font-bold bg-neo-blue border border-black py-[1px] px-[5px] tracking-[0.05em] shrink-0 rounded-none text-neo-text hover:bg-neo-blue">
                BOT
              </Badge>
            )}
          </div>
        ))}
      </div>

      {/* Offline section */}
      <div className="py-2 px-4 border-t border-t-black/10">
        <div className="text-[0.7rem] font-bold tracking-[0.12em] text-[#999] uppercase mb-2.5">
          OFFLINE — 20
        </div>
        {offlineUsers.map((user) => (
          <div key={user.id} className="flex items-center gap-2.5 py-[5px] opacity-50">
            <div className="w-8 h-8 border-2 border-[#999] bg-[#e0e0e0] flex items-center justify-center font-bold text-[0.65rem] text-[#999] shrink-0">
              {user.initials}
            </div>
            <span className="text-[0.8rem] text-[#999]">{user.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

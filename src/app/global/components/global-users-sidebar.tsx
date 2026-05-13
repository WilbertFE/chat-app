import { globalUsers } from "@/lib/mock-data";

export default function GlobalUsersSidebar() {
  return (
    <div className="w-[220px] min-w-[220px] bg-neo-bg border-l-2 border-l-black flex flex-col font-mono h-full overflow-y-auto">
      {/* Header */}
      <div className="pt-4 px-4 pb-2 border-b-2 border-b-black">
        <div className="text-xs font-bold tracking-[0.1em] text-neo-text uppercase">
          GLOBAL USERS
        </div>
      </div>

      {/* Online */}
      <div className="pt-3 px-4 pb-2">
        <div className="text-[0.7rem] font-bold tracking-[0.12em] text-neo-muted uppercase mb-2">
          ONLINE — {globalUsers.online.length}
        </div>
        {globalUsers.online.map((user) => (
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
            <span
              className={`text-[0.8rem] font-bold ${
                user.isCurrentUser ? "text-neo-orange" : "text-neo-text"
              }`}
            >
              {user.name}
            </span>
          </div>
        ))}
      </div>

      {/* Offline */}
      <div className="py-2 px-4 border-t border-t-black/10">
        <div className="text-[0.7rem] font-bold tracking-[0.12em] text-[#999] uppercase mb-2">
          OFFLINE — {globalUsers.offlineCount}
        </div>
        {globalUsers.offline.map((user) => (
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

import UserAvatar from "@/components/user-avatar";
import { Badge } from "@/components/ui/badge";

type SidebarUser = {
  id: string;
  name: string;
  initials: string;
  isCurrentUser?: boolean;
  badge?: string;
};

type UsersSidebarProps = {
  title?: string;
  titleCount?: number;
  onlineUsers: SidebarUser[];
  offlineUsers: SidebarUser[];
  offlineDisplayCount?: number;
};

export default function UsersSidebar({
  title,
  titleCount,
  onlineUsers,
  offlineUsers,
  offlineDisplayCount,
}: UsersSidebarProps) {
  return (
    <div className="w-[220px] min-w-[220px] bg-neo-bg border-l-2 border-l-black flex flex-col font-mono h-full overflow-y-auto">
      {title && (
        <div className="pt-4 px-4 pb-2 border-b-2 border-b-black">
          <div className="text-xs font-bold tracking-[0.1em] text-neo-text uppercase">
            {titleCount !== undefined ? `${title} — ${titleCount}` : title}
          </div>
        </div>
      )}

      <div className={`${title ? "pt-3" : "pt-4"} px-4 pb-2`}>
        <div className="text-[0.7rem] font-bold tracking-[0.12em] text-neo-muted uppercase mb-2.5">
          ONLINE — {onlineUsers.length}
        </div>
        {onlineUsers.map((user) => (
          <div key={user.id} className="flex items-center gap-2.5 py-[5px]">
            <UserAvatar
              initials={user.initials}
              isCurrentUser={user.isCurrentUser}
              showOnlineDot
            />
            <div className="flex-1 min-w-0 flex items-center gap-1.5">
              <span
                className={`text-[0.8rem] font-bold overflow-hidden text-ellipsis whitespace-nowrap ${
                  user.isCurrentUser ? "text-neo-orange" : "text-neo-text"
                }`}
              >
                {user.name}
              </span>
              {user.badge && (
                <Badge className="text-[0.6rem] font-bold bg-neo-blue border border-black py-[1px] px-[5px] tracking-[0.05em] shrink-0 rounded-none text-neo-text hover:bg-neo-blue">
                  {user.badge}
                </Badge>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="py-2 px-4 border-t border-t-black/10">
        <div className="text-[0.7rem] font-bold tracking-[0.12em] text-[#999] uppercase mb-2.5">
          OFFLINE — {offlineDisplayCount ?? offlineUsers.length}
        </div>
        {offlineUsers.map((user) => (
          <div key={user.id} className="flex items-center gap-2.5 py-[5px] opacity-50">
            <UserAvatar initials={user.initials} offline />
            <span className="text-[0.8rem] text-[#999]">{user.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

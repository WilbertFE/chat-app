import { onlineUsers, offlineUsers } from "@/lib/mock-data";
import UsersSidebar from "@/components/users-sidebar";

export default function MembersSidebar() {
  const online = onlineUsers.map((u) => ({
    id: u.id,
    name: u.name,
    initials: u.initials,
    isCurrentUser: u.isCurrentUser,
    badge: u.isBot ? "BOT" : undefined,
  }));

  const offline = offlineUsers.map((u) => ({
    id: u.id,
    name: u.name,
    initials: u.initials,
  }));

  return (
    <UsersSidebar
      onlineUsers={online}
      offlineUsers={offline}
      offlineDisplayCount={20}
    />
  );
}

import { globalUsers } from "@/lib/mock-data";
import UsersSidebar from "@/components/users-sidebar";

export default function GlobalUsersSidebar() {
  return (
    <UsersSidebar
      title="GLOBAL USERS"
      onlineUsers={globalUsers.online}
      offlineUsers={globalUsers.offline}
      offlineDisplayCount={globalUsers.offlineCount}
    />
  );
}

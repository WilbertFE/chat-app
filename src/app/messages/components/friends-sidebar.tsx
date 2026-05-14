import { friends } from "@/lib/mock-data";
import UsersSidebar from "@/components/users-sidebar";

export default function FriendsSidebar() {
  return (
    <UsersSidebar
      title="FRIENDS"
      titleCount={friends.totalCount}
      onlineUsers={friends.online}
      offlineUsers={friends.offline}
      offlineDisplayCount={friends.offlineCount}
    />
  );
}

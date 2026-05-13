import DashboardSidebar from "@/components/dashboard-sidebar";
import DmPanel from "./components/dm-panel";
import FriendsSidebar from "./components/friends-sidebar";

export default function MessagesPage() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#fffdf5",
      }}
    >
      <DashboardSidebar
        activeRoute="messages"
        showNewServerTopButton={true}
        showAudioControls={true}
        newServerButtonStyle="orange"
      />
      <DmPanel />
      <FriendsSidebar />
    </div>
  );
}

import DashboardSidebar from "@/components/dashboard-sidebar";
import ServerStrip from "./components/server-strip";
import ChatPanel from "./components/chat-panel";
import MembersSidebar from "./components/members-sidebar";

export default function DashboardPage() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#fffdf5",
      }}
    >
      <DashboardSidebar activeRoute="servers" showNewServerButton={true} />
      <ServerStrip />
      <ChatPanel />
      <MembersSidebar />
    </div>
  );
}

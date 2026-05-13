import ServerStrip from "./components/server-strip";
import ChatPanel from "./components/chat-panel";
import MembersSidebar from "./components/members-sidebar";
import DashboardSidebar from "@/components/dashboard-sidebar";

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
      <ServerStrip />
      <DashboardSidebar activeRoute="servers" newServerButtonStyle="blue" />
      <ChatPanel />
      <MembersSidebar />
    </div>
  );
}

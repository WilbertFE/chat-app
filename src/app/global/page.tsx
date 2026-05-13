import DashboardSidebar from "@/components/dashboard-sidebar";
import GlobalPanel from "./components/global-panel";
import GlobalUsersSidebar from "./components/global-users-sidebar";

export default function GlobalPage() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#fffdf5",
      }}
    >
      <DashboardSidebar activeRoute="global" />
      <GlobalPanel />
      <GlobalUsersSidebar />
    </div>
  );
}

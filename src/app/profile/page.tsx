import DashboardSidebar from "@/components/dashboard-sidebar";
import CoverBanner from "./components/cover-banner";
import ProfileHeader from "./components/profile-header";
import AboutCard from "./components/about-card";
import StatsCards from "./components/stats-cards";
import Footer from "@/components/footer";

export default function ProfilePage() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#fffdf5",
      }}
    >
      {/* Sidebar stays fixed while page scrolls */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          flexShrink: 0,
        }}
      >
        <DashboardSidebar activeRoute="profile" />
      </div>

      {/* Main content — full natural height, browser scrolls the page */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <CoverBanner />
        <ProfileHeader />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: "24px",
            padding: "32px 32px",
            flex: 1,
          }}
        >
          <AboutCard />
          <StatsCards />
        </div>

        <Footer />
      </div>
    </div>
  );
}

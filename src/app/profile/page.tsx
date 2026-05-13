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
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#fffdf5",
      }}
    >
      <DashboardSidebar activeRoute="profile" />

      {/* Main content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        <CoverBanner />
        <ProfileHeader />

        {/* Content grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: "24px",
            padding: "24px 32px",
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

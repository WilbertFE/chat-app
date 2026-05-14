import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import DashboardSidebar from "@/components/dashboard-sidebar";
import CoverBanner from "../components/cover-banner";
import ProfileHeader from "../components/profile-header";
import AboutCard from "../components/about-card";
import StatsCards from "../components/stats-cards";
import Footer from "@/components/footer";
import type { User } from "@/types/user";

interface Props {
  params: Promise<{ username: string }>;
}

export default async function PublicProfilePage({ params }: Props) {
  const { username } = await params;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("username", username)
    .single();

  if (!user) notFound();

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#fffdf5",
      }}
    >
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

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <CoverBanner />
        <ProfileHeader user={user as User} isOwner={false} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: "24px",
            padding: "32px 32px",
            flex: 1,
          }}
        >
          <AboutCard user={user as User} />
          <StatsCards user={user as User} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

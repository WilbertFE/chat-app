import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UsernameForm from "./components/username-form";

export default async function OnboardingPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  if (session.user.onboarding_complete === true) {
    redirect("/global");
  }

  return (
    <div className="min-h-screen bg-neo-orange flex items-center justify-center font-mono">
      <UsernameForm initialUsername={session.user.username ?? ""} />
    </div>
  );
}

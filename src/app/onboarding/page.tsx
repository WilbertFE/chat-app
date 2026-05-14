"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import UsernameForm from "./components/username-form";

export default function OnboardingPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/signin");
    }
    if (status === "authenticated" && session.user.onboarding_complete === true) {
      router.replace("/global");
    }
  }, [status, session, router]);

  if (status === "loading") return null;

  if (status !== "authenticated") return null;

  if (session.user.onboarding_complete === true) return null;

  return (
    <div className="min-h-screen bg-neo-orange flex items-center justify-center font-mono">
      <UsernameForm initialUsername={session.user.username ?? ""} />
    </div>
  );
}

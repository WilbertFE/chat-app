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

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-neo-orange flex items-center justify-center">
        <div className="bg-white border-[3px] border-black shadow-neo-xl w-[480px] py-12 px-10">
          <div className="flex flex-col gap-4 animate-pulse">
            <div className="h-4 w-24 bg-black/10" />
            <div className="h-8 w-64 bg-black/10" />
            <div className="h-4 w-full bg-black/10" />
            <div className="h-[46px] w-full bg-black/10 mt-4" />
            <div className="h-[50px] w-full bg-black/10" />
          </div>
        </div>
      </div>
    );
  }

  if (status !== "authenticated") return null;

  return (
    <div className="min-h-screen bg-neo-orange flex items-center justify-center font-mono">
      <UsernameForm initialUsername={session.user.username ?? ""} />
    </div>
  );
}

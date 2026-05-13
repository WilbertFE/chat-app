"use client";
import { useSession } from "next-auth/react";
import { currentUser as mockUser } from "@/lib/mock-data";

function getInitials(name: string | null | undefined): string {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function getHandle(email: string | null | undefined): string {
  if (!email) return "@user";
  return "@" + email.split("@")[0].replace(/[^a-zA-Z0-9_]/g, "");
}

export function useCurrentUser() {
  const { data: session, status } = useSession();

  const name = session?.user?.name ?? mockUser.name;
  const email = session?.user?.email ?? null;
  const image = session?.user?.image ?? null;
  const initials = getInitials(session?.user?.name);
  const handle = getHandle(email);

  return {
    id: email ?? mockUser.id,
    name,
    email,
    image,
    initials,
    handle,
    role: mockUser.role,
    bio: mockUser.bio,
    interests: mockUser.interests,
    stats: mockUser.stats,
    status,
  };
}

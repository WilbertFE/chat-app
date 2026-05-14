"use client";
import { useSession } from "next-auth/react";

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

  const name = session?.user?.name ?? "User";
  const email = session?.user?.email ?? null;
  const image = session?.user?.image ?? null;
  const initials = getInitials(session?.user?.name);
  const handle = session?.user?.username
    ? `@${session.user.username}`
    : getHandle(email);

  return {
    id: email ?? "anonymous",
    name,
    email,
    image,
    initials,
    handle,
    status,
  };
}

import { SupabaseClient } from "@supabase/supabase-js";

export function generateUsername(email: string): string {
  const prefix = email.split("@")[0];
  const cleaned = prefix
    .toLowerCase()
    .replace(/[^a-z0-9_]/g, "_")
    .replace(/_{2,}/g, "_")
    .replace(/^_|_$/g, "")
    .slice(0, 15);
  return cleaned || "user";
}

export async function generateUniqueUsername(
  email: string,
  supabase: SupabaseClient
): Promise<string> {
  const base = generateUsername(email);
  const { data } = await supabase
    .from("users")
    .select("id")
    .eq("username", base)
    .maybeSingle();
  if (!data) return base;
  const suffix = Math.random().toString(36).slice(2, 7);
  return `${base}_${suffix}`;
}

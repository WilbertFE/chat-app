import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { createClient } from "@supabase/supabase-js";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { postUserSchema, patchUserSchema } from "@/lib/validations";
import type { User } from "@/types/user";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const check = request.nextUrl.searchParams.get("check");
  if (check !== null) {
    const { data } = await supabase
      .from("users")
      .select("id, email")
      .eq("username", check)
      .maybeSingle();
    return NextResponse.json({ available: !data || data.email === session.user.email });
  }

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", session.user.email)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(data as User);
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const result = postUserSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: result.error.issues[0].message },
      { status: 400 }
    );
  }

  const { email, name, avatar_url, username } = result.data;

  const { data, error } = await supabase
    .from("users")
    .insert({
      email,
      name: name ?? null,
      avatar_url: avatar_url ?? null,
      username: username ?? null,
      onboarding_complete: false,
      created_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data as User, { status: 201 });
}

export async function PATCH(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const result = patchUserSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: result.error.issues[0].message },
      { status: 400 }
    );
  }

  const { username, onboarding_complete, name, about } = result.data;

  if (username !== undefined) {
    const { data: existing } = await supabase
      .from("users")
      .select("id, email")
      .eq("username", username)
      .maybeSingle();

    if (existing && existing.email !== session.user.email) {
      return NextResponse.json({ error: "Username already taken" }, { status: 409 });
    }
  }

  const updates: Record<string, unknown> = {};
  if (username !== undefined) updates.username = username;
  if (onboarding_complete !== undefined) updates.onboarding_complete = onboarding_complete;
  if (name !== undefined) updates.name = name;
  if (about !== undefined) updates.about = about;

  const { data, error } = await supabase
    .from("users")
    .update(updates)
    .eq("email", session.user.email)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data as User);
}

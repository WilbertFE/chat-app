import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createClient } from "@supabase/supabase-js";
import { generateUniqueUsername } from "@/lib/username";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return true;

      const { data: existing } = await supabase
        .from("users")
        .select("id")
        .eq("email", user.email)
        .single();

      if (!existing) {
        const username = await generateUniqueUsername(user.email, supabase);
        try {
          await supabase.from("users").insert({
            email: user.email,
            name: user.name ?? null,
            avatar_url: user.image ?? null,
            created_at: new Date().toISOString(),
            username,
            onboarding_complete: false,
          });
        } catch {
          // Unique constraint race condition — append a fresh suffix and retry
          const suffix = Math.random().toString(36).slice(2, 7);
          await supabase.from("users").insert({
            email: user.email,
            name: user.name ?? null,
            avatar_url: user.image ?? null,
            created_at: new Date().toISOString(),
            username: `${username}_${suffix}`,
            onboarding_complete: false,
          });
        }
      }

      return true;
    },

    async jwt({ token, trigger, session }) {
      if (trigger === "update" && session) {
        token.username = session.username ?? token.username;
        token.onboarding_complete =
          session.onboarding_complete ?? token.onboarding_complete;
        return token;
      }

      if (token.username === undefined) {
        const { data } = await supabase
          .from("users")
          .select("username, onboarding_complete")
          .eq("email", token.email as string)
          .single();
        if (data) {
          token.username = data.username;
          token.onboarding_complete = data.onboarding_complete;
        }
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.username = token.username;
        session.user.onboarding_complete = token.onboarding_complete;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      username?: string | null;
      onboarding_complete?: boolean;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username?: string | null;
    onboarding_complete?: boolean;
  }
}

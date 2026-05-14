export type User = {
  id: string;
  email: string;
  name: string | null;
  avatar_url: string | null;
  username: string | null;
  onboarding_complete: boolean;
  created_at: string;
};

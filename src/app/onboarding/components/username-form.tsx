"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

const USERNAME_REGEX = /^[a-zA-Z0-9_]{3,20}$/;

interface UsernameFormProps {
  initialUsername: string;
}

export default function UsernameForm({ initialUsername }: UsernameFormProps) {
  const router = useRouter();
  const { update } = useSession();
  const [username, setUsername] = useState(initialUsername);
  const [error, setError] = useState<string | null>(null);
  const [checking, setChecking] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!username) {
      setError(null);
      return;
    }

    if (!USERNAME_REGEX.test(username)) {
      setError("3–20 characters: letters, numbers, underscores only.");
      setChecking(false);
      return;
    }

    setError(null);
    setChecking(true);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      const res = await fetch(`/api/users?check=${encodeURIComponent(username)}`);
      const json = await res.json();
      if (!json.available) {
        setError("Username is already taken.");
      }
      setChecking(false);
    }, 500);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [username]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (error || checking || !username) return;

    setSubmitting(true);
    const res = await fetch("/api/users", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, onboarding_complete: true }),
    });

    if (!res.ok) {
      const json = await res.json();
      setError(json.error ?? "Something went wrong.");
      setSubmitting(false);
      return;
    }

    await update({ username, onboarding_complete: true });
    router.replace("/global");
  }

  return (
    <div className="bg-white border-[3px] border-black shadow-neo-xl w-[480px] py-12 px-10 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <span className="font-mono font-bold text-[0.8rem] tracking-[0.15em] uppercase text-neo-text">
          NEOCHAT
        </span>
        <h1 className="font-syne text-[2rem] m-0 text-neo-text leading-tight">
          Choose your username.
        </h1>
        <p className="font-mono text-[0.85rem] text-neo-muted leading-[1.5] m-0">
          This is how others will find and mention you. You can always change it later.
        </p>
      </div>

      <div className="w-full border-t border-[#eee]" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="font-mono font-bold text-[0.8rem] uppercase tracking-[0.08em] text-neo-text">
            Username
          </label>
          <div className="flex">
            <span className="flex items-center px-3 border-2 border-r-0 border-black bg-neo-yellow font-mono font-bold text-[0.9rem] text-neo-text shrink-0">
              @
            </span>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="your_username"
              autoFocus
              className={`flex-1 border-2 border-black rounded-none font-mono text-[0.95rem] h-[46px] px-3 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black bg-white ${
                error ? "border-red-500" : ""
              }`}
            />
            {checking && (
              <span className="flex items-center px-3 border-2 border-l-0 border-black bg-white">
                <Loader2 size={14} className="animate-spin text-neo-muted" />
              </span>
            )}
          </div>
          {error && (
            <p className="font-mono text-[0.8rem] text-red-500 m-0">{error}</p>
          )}
          <p className="font-mono text-[0.78rem] text-neo-muted m-0">
            3–20 characters. Letters, numbers, and underscores only.
          </p>
        </div>

        <Button
          type="submit"
          disabled={!!error || checking || submitting || !username}
          className="w-full bg-neo-orange hover:bg-neo-orange text-white border-2 border-black shadow-neo py-[14px] px-5 font-mono font-bold text-[0.9rem] uppercase tracking-[0.05em] neo-btn-hover rounded-none h-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
        >
          {submitting ? (
            <span className="flex items-center gap-2">
              <Loader2 size={16} className="animate-spin" />
              Saving...
            </span>
          ) : (
            "Confirm Username"
          )}
        </Button>
      </form>
    </div>
  );
}

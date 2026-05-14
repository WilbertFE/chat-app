"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usernameSchema } from "@/lib/validations";
import type { User } from "@/types/user";

interface EditProfileDialogProps {
  user: User;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function EditProfileDialog({
  user,
  open,
  onOpenChange,
}: EditProfileDialogProps) {
  const router = useRouter();
  const { update } = useSession();

  const [name, setName] = useState(user.name ?? "");
  const [username, setUsername] = useState(user.username ?? "");
  const [about, setAbout] = useState(user.about ?? "");
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [checkingUsername, setCheckingUsername] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (open) {
      setName(user.name ?? "");
      setUsername(user.username ?? "");
      setAbout(user.about ?? "");
      setUsernameError(null);
      setSubmitting(false);
    }
  }, [open, user]);

  useEffect(() => {
    if (!username) {
      setUsernameError(null);
      return;
    }

    const result = usernameSchema.safeParse(username);
    if (!result.success) {
      setUsernameError(result.error.issues[0].message);
      setCheckingUsername(false);
      return;
    }

    if (username === user.username) {
      setUsernameError(null);
      setCheckingUsername(false);
      return;
    }

    setUsernameError(null);
    setCheckingUsername(true);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      const res = await fetch(`/api/users?check=${encodeURIComponent(username)}`);
      const json = await res.json();
      if (!json.available) setUsernameError("Username is already taken.");
      setCheckingUsername(false);
    }, 500);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [username, user.username]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (usernameError || checkingUsername || !name || !username || submitting) return;

    setSubmitting(true);
    const res = await fetch("/api/users", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, username, about: about || null }),
    });

    if (!res.ok) {
      const json = await res.json();
      setUsernameError(json.error ?? "Something went wrong.");
      setSubmitting(false);
      return;
    }

    if (username !== user.username || name !== user.name) {
      await update({ username, name });
    }

    router.refresh();
    onOpenChange(false);
    setSubmitting(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <span className="font-mono font-bold text-[0.7rem] tracking-[0.15em] uppercase text-neo-muted">
            NEOCHAT
          </span>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Update your display name, username, and bio.
          </DialogDescription>
        </DialogHeader>

        <div className="border-t-2 border-dashed border-[#ccc] mx-8" />

        <DialogBody>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            {/* Display name */}
            <div className="flex flex-col gap-1.5">
              <label className="font-mono font-bold text-[0.75rem] uppercase tracking-[0.08em] text-neo-text">
                Display Name
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="border-2 border-black rounded-none font-mono text-[0.95rem] h-[46px] px-3 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black bg-white"
              />
            </div>

            {/* Username */}
            <div className="flex flex-col gap-1.5">
              <label className="font-mono font-bold text-[0.75rem] uppercase tracking-[0.08em] text-neo-text">
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
                  className={`flex-1 border-2 border-black rounded-none font-mono text-[0.95rem] h-[46px] px-3 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black bg-white ${
                    usernameError ? "border-red-500" : ""
                  }`}
                />
                {checkingUsername && (
                  <span className="flex items-center px-3 border-2 border-l-0 border-black bg-white">
                    <Loader2 size={14} className="animate-spin text-neo-muted" />
                  </span>
                )}
              </div>
              {usernameError && (
                <p className="font-mono text-[0.8rem] text-red-500 m-0">{usernameError}</p>
              )}
              <p className="font-mono text-[0.78rem] text-neo-muted m-0">
                3–20 characters. Letters, numbers, and underscores only.
              </p>
            </div>

            {/* About */}
            <div className="flex flex-col gap-1.5">
              <label className="font-mono font-bold text-[0.75rem] uppercase tracking-[0.08em] text-neo-text">
                About{" "}
                <span className="text-neo-muted font-normal normal-case">
                  (optional)
                </span>
              </label>
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                placeholder="Tell the community about yourself..."
                maxLength={500}
                rows={4}
                className="border-2 border-black font-mono text-sm text-neo-text bg-white px-3 py-2.5 outline-none focus:border-black resize-none leading-[1.6]"
              />
              <p className="font-mono text-[0.75rem] text-neo-muted text-right m-0">
                {about.length}/500
              </p>
            </div>

            <div className="border-t-2 border-dashed border-[#ccc] mt-1" />

            <Button
              type="submit"
              disabled={
                !!usernameError ||
                checkingUsername ||
                submitting ||
                !name ||
                !username
              }
              className="w-full bg-neo-orange hover:bg-neo-orange text-white border-2 border-black shadow-neo py-[14px] px-5 font-mono font-bold text-[0.9rem] uppercase tracking-[0.05em] neo-btn-hover rounded-none h-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
            >
              {submitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin" />
                  Saving...
                </span>
              ) : (
                "Save Changes"
              )}
            </Button>
          </form>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}

"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import EditProfileDialog from "./edit-profile-dialog";
import type { User } from "@/types/user";

function getInitials(name: string | null | undefined): string {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

interface ProfileHeaderProps {
  user: User;
  isOwner?: boolean;
}

export default function ProfileHeader({ user, isOwner = false }: ProfileHeaderProps) {
  const [editOpen, setEditOpen] = useState(false);
  const initials = getInitials(user.name);

  return (
    <>
      <div className="py-5 px-8 border-b-2 border-b-black flex items-end gap-5 bg-neo-bg relative">
        {/* Avatar */}
        <div className="relative shrink-0 -mt-[50px] z-[1]">
          <div className="w-[100px] h-[100px] border-[3px] border-black shadow-neo bg-neo-orange flex items-center justify-center font-syne text-[2rem] text-white overflow-hidden">
            {user.avatar_url ? (
              <img
                src={user.avatar_url}
                alt={initials}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            ) : (
              initials
            )}
          </div>
          <span className="absolute bottom-1 right-1 w-[14px] h-[14px] bg-neo-green border-2 border-black rounded-full" />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="font-syne text-[2.5rem] uppercase m-0 mb-2 text-neo-text leading-none">
            {(user.name ?? "Unknown").toUpperCase()}
          </h1>
          <div className="flex items-center gap-2 flex-wrap">
            {user.username && (
              <span className="font-mono text-[0.8rem] border-2 border-black py-[2px] px-[10px] text-neo-text">
                @{user.username}
              </span>
            )}
          </div>
        </div>

        {isOwner && (
          <Button
            onClick={() => setEditOpen(true)}
            className="py-[10px] px-5 bg-neo-orange hover:bg-neo-orange border-2 border-black shadow-neo font-mono font-bold text-[0.8rem] text-white uppercase tracking-[0.05em] self-start neo-btn-hover rounded-none h-auto gap-[6px]"
          >
            <Pencil size={14} />
            EDIT PROFILE
          </Button>
        )}
      </div>

      {isOwner && (
        <EditProfileDialog
          user={user}
          open={editOpen}
          onOpenChange={setEditOpen}
        />
      )}
    </>
  );
}

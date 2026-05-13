"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import { currentUser } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

export default function ProfileHeader() {
  const [editing, setEditing] = useState(false);

  return (
    <div className="py-5 px-8 border-b-2 border-b-black flex items-end gap-5 bg-neo-bg relative">
      {/* Avatar */}
      <div className="w-[100px] h-[100px] border-[3px] border-black shadow-neo bg-neo-orange flex items-center justify-center font-syne text-[2rem] text-white shrink-0 -mt-[50px] relative z-[1]">
        {currentUser.initials}
        {/* Online dot */}
        <span className="absolute bottom-1 right-1 w-[14px] h-[14px] bg-neo-green border-2 border-black rounded-full" />
      </div>

      {/* Info */}
      <div className="flex-1">
        <h1 className="font-syne text-[2.5rem] uppercase m-0 mb-2 text-neo-text leading-none">
          {currentUser.name.toUpperCase()}
        </h1>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-mono text-[0.8rem] border-2 border-black py-[2px] px-[10px] text-neo-text">
            {currentUser.handle}
          </span>
          <span className="font-mono text-[0.7rem] font-bold border-2 border-black py-[2px] px-[10px] text-neo-text tracking-[0.08em] uppercase">
            {currentUser.role}
          </span>
        </div>
      </div>

      {/* Edit profile button */}
      <Button
        onClick={() => setEditing(!editing)}
        className="py-[10px] px-5 bg-neo-orange hover:bg-neo-orange border-2 border-black shadow-neo font-mono font-bold text-[0.8rem] text-white uppercase tracking-[0.05em] self-start neo-btn-hover rounded-none h-auto gap-[6px]"
      >
        <Pencil size={14} />
        {editing ? "SAVE PROFILE" : "EDIT PROFILE"}
      </Button>
    </div>
  );
}

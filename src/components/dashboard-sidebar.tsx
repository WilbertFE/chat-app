"use client";

import Link from "next/link";
import { MessageSquare, Grid3x3, User, HelpCircle, LogOut, Plus, Globe } from "lucide-react";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Button } from "@/components/ui/button";

type ActiveRoute = "messages" | "servers" | "global" | "profile" | "help";

interface DashboardSidebarProps {
  activeRoute: ActiveRoute;
  showNewServerButton?: boolean;
}

const navItems = [
  { key: "global" as ActiveRoute, label: "Global", icon: Globe, href: "/global" },
  { key: "messages" as ActiveRoute, label: "Messages", icon: MessageSquare, href: "/messages" },
  { key: "servers" as ActiveRoute, label: "Servers", icon: Grid3x3, href: "/servers" },
  { key: "profile" as ActiveRoute, label: "Profile", icon: User, href: "/profile" },
  { key: "help" as ActiveRoute, label: "Help", icon: HelpCircle, href: "/help" },
];

export default function DashboardSidebar({
  activeRoute,
  showNewServerButton = false,
}: DashboardSidebarProps) {
  const currentUser = useCurrentUser();

  return (
    <div className="w-[260px] min-w-[260px] bg-neo-sidebar border-r-2 border-r-black flex flex-col font-mono h-full">
      {/* Header */}
      <div className="p-4 border-b-2 border-b-black flex items-center gap-2.5 shrink-0">
        <div className="w-8 h-8 bg-neo-orange border-2 border-black flex items-center justify-center">
          <Grid3x3 size={16} color="#fff" />
        </div>
        <span className="font-bold text-[0.95rem] tracking-[0.05em]">NEOCHAT</span>
      </div>

      {/* Nav Items */}
      <nav className="py-2">
        {navItems.map(({ key, label, icon: Icon, href }) => {
          const isActive = activeRoute === key;
          return (
            <Link
              key={key}
              href={href}
              className={cn(
                "flex items-center gap-2.5 py-2.5 px-4 text-[0.9rem] text-neo-text no-underline transition-colors duration-100 border-l-[3px]",
                isActive
                  ? "font-bold bg-neo-yellow border-l-black"
                  : "font-normal bg-transparent border-l-transparent hover:bg-black/5"
              )}
            >
              <Icon size={18} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* New Server button */}
      {showNewServerButton && (
        <div className="py-2.5 px-4 border-t border-t-black/[0.12]">
          <Button className="w-full bg-neo-orange hover:bg-neo-orange text-white border-2 border-black shadow-neo-sm font-bold text-[0.8rem] uppercase tracking-[0.05em] neo-btn-hover flex items-center justify-center gap-1.5">
            <Plus size={14} />
            NEW SERVER
          </Button>
        </div>
      )}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom user area */}
      <div className="border-t-2 border-t-black py-3 px-4 shrink-0">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="relative w-10 h-10 border-2 border-black bg-neo-orange flex items-center justify-center shrink-0 font-bold text-white text-xs">
            {currentUser.initials}
            <span className="absolute -bottom-[3px] -right-[3px] w-2.5 h-2.5 bg-neo-green border-2 border-black rounded-full" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-[0.85rem] overflow-hidden text-ellipsis whitespace-nowrap">
              {currentUser.name}
            </div>
            <div className="text-xs text-neo-muted overflow-hidden text-ellipsis whitespace-nowrap">
              {currentUser.handle}
            </div>
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/signin" })}
          className="flex items-center gap-1.5 text-[0.8rem] text-neo-muted bg-transparent border-none p-0 cursor-pointer"
        >
          <LogOut size={14} />
          Logout
        </button>
      </div>
    </div>
  );
}

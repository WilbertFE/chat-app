"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { status } = useSession();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-b-black flex items-center justify-between px-8 h-[60px] font-mono">
      {/* Logo */}
      <Link href="/" className="font-syne text-[1.4rem] text-neo-text no-underline tracking-[0.02em]">
        NEOCHAT
      </Link>

      {/* Center links */}
      <div className="flex gap-8 items-center">
        {status === "authenticated" ? (
          <>
            {[{label: "GLOBAL", href: "/global"}, { label: "MESSAGES", href: "/messages" },{ label: "SERVERS", href: "/servers" }, { label: "PROFILE", href: "/profile" }, {label: "HELP", href: "/help"}].map(({ label, href }) => (
              <Link key={label} href={href} className="text-[0.8rem] font-medium tracking-[0.1em] text-neo-text no-underline hover:underline">
                {label}
              </Link>
            ))}
          </>
        ) : (
         <></>
        )}
      </div>

      {/* Auth buttons */}
      {status === "unauthenticated" && (
        <div className="flex gap-[10px] items-center">
          <Link
            href="/signin"
            className="py-2 px-[18px] border-2 border-black bg-white shadow-neo-sm font-mono font-bold text-[0.8rem] text-neo-text no-underline inline-block neo-btn-hover"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="py-2 px-[18px] border-2 border-black bg-neo-orange shadow-neo-sm font-mono font-bold text-[0.8rem] text-white no-underline inline-block uppercase neo-btn-hover"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
